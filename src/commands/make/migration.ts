import {Args, Command} from '@oclif/core'
import * as fs from 'fs';
import * as path from "path";
import * as dotenv from "dotenv";
import {SequelizeStorage, Umzug} from "umzug";
import {Sequelize} from "sequelize";
import Connection from "../../utils/connection";
import {toKebabCase, toPascalCase} from "../../utils";

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

    // Get env configurations
    dotenv.config();

    const {args} = await this.parse(MakeMigration);
    const db = Connection.getInstance().db;

    this.log(`Generating migration ${toPascalCase(args.name)} class.`);


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
          [
            filepath,
            fs.readFileSync(path.join(__dirname, '../../../stubs/migration.ts.stub')).toString().replaceAll('__NAME__', args.name?.toLowerCase() ?? 'table')
          ],
        ]
      },
      storage: new SequelizeStorage({
        sequelize: db
      }),
      context: db.getQueryInterface()
    });

    umzug.on('migrating', ev => console.log('Migrating', { name: ev.name, path: ev.path }));
    umzug.on('migrated', ev => console.log('Migrated', ev));

    // Generate migration
    try {
      await umzug.create({
        name: toKebabCase(args.name) + '.migration.ts',
        folder: process.cwd() + '/src/migrations',
        skipVerify: true
      });
      this.log(`Migration class generated for ${toPascalCase(args.name)}!`);
      this.exit(0);
    } catch (e) {
      console.log("A problem occured while generating class!", e);
      this.exit(0);
    }
  }
}
