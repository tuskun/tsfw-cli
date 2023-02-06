import {Args, Command} from '@oclif/core'
import * as fs from 'fs';
import {SequelizeStorage, Umzug} from "umzug";
import {Sequelize} from "sequelize";
import * as path from "path";

export default class MakeMigration extends Command {
  static description = 'Generate migration class'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {
    name: Args.string()
  }

  static aliases = ["make:migration"]

  public async run(): Promise<void> {
    // Check for framework
    if (!fs.existsSync(process.cwd() + '/tsfw.config.json')) {
      this.log("You are not in a TSFW project!");
      this.exit(0)
    }

    // Check for env file
    if (!fs.existsSync(process.cwd() + '/.env')) {
      this.log("You don't have an .env file!");
      this.exit(0)
    }

    const {args} = await this.parse(MakeMigration);

    process.env.NODE_ENV = "tsfw-cli";
    const appInstance = await import(process.cwd() + '/src/index.ts');
    const umzug = new Umzug({
      logger: undefined,
      migrations: {
        glob: process.cwd() + '/src/migrations/*.ts',
        resolve: ({name, path, context}) => {
          const migration = require(<string>path)
          return {
            name,
            up: async () => migration.up(context, Sequelize),
            down: async () => migration.down(context, Sequelize),
          }
        },
      },
      create: {
        template: filepath => [
          [filepath, fs.readFileSync(path.join(__dirname, '../../stubs/migration.ts.stub')).toString().replaceAll('__TABLENAME__', args.name ?? 'table')],
        ]
      },
      storage: new SequelizeStorage({
        sequelize: appInstance.app.database.connection
      }),
      context: appInstance.app.database.connection.getQueryInterface()
    });

    // Generate migration
    try {
      await umzug.create({
        name: args.name + '.controller.ts.stub',
        folder: process.cwd() + '/src/migrations'
      })
    } catch (e) {
      console.log(e)
      this.exit()
    }
  }
}
