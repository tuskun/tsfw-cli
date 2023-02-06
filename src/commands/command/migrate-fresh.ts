import {Command} from '@oclif/core'
import * as fs from "fs";
import {SequelizeStorage, Umzug} from "umzug";
import {Sequelize} from "sequelize";
import {SequelizeAuto} from "sequelize-auto";
import path = require('path');

export default class CommandMigrateFresh extends Command {
  static description = 'Generate migration class'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  static aliases = ["migrate:fresh"]

  public async run(): Promise<void> {
    if (!fs.existsSync(process.cwd() + '/framework')) {
      this.log("You are not in a TSFW project!");
      this.exit(0)
    }
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
      storage: new SequelizeStorage({
        sequelize: appInstance.app.database.connection
      }),
      context: appInstance.app.database.connection.queryInterface
    });
    umzug.on('migrating', ev => console.log(ev.name + ' is migrating!'))
    umzug.on('migrated', ev => console.log('Migrated!'))

    try {
      await umzug.down();
      await umzug.up();

      const directory = path.join(process.cwd(), 'src/models');

      // Create models from sequelize
      fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
          fs.unlink(path.join(directory, file), (err) => {
            if (err) throw err;
          });
        }
      });

      const options: any = {
        directory: process.cwd() + '/src/models',
        singularize: true,
        useDefine: true,
        caseFile: 'l',
        caseModel: 'p',
        caseProp: 'c',
        dialect: 'postgres',
        host: `${process.env.DB_HOST}`,
        lang: 'ts',
        logging: false,
        typescript: true
      };

      const auto = new SequelizeAuto(
        `${process.env.DB_NAME}`,
        `${process.env.DB_USER}`,
        `${process.env.DB_PASSWORD}`,
        options
      );
      await auto.run();

      this.exit(1)
    } catch (e) {
      throw e;
    }
  }
}
