require('ts-node/register');

import {Command} from '@oclif/core'
import * as fs from "fs"
import {SequelizeStorage, Umzug} from "umzug";
import {Dialect, Sequelize} from "sequelize";
import {SequelizeAuto} from "sequelize-auto";
import Connection from "../../utils/connection";
import * as dotenv from "dotenv";
import path = require('path');

export default class CommandMigrate extends Command {
  static description = 'Generate migration class'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  static aliases = ["migrate"]

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

    // Connection to DB
    const db = Connection.getInstance().db;

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
        sequelize: db
      }),
      context: db.queryInterface
    });
    umzug.on('migrating', ev => console.log(ev.name + ' is migrating!'))
    umzug.on('migrated', ev => console.log(ev.name + ' is migrated!'))

    try {
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
        dialect: `${<Dialect>process.env.DB_DIALECT}`,
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

      try {
        await auto.run();
        console.log('Migration finished!')
        this.exit(0);
      } catch (e) {
        console.log(e)
        this.exit()
      }
    } catch (e) {
      throw e;
    }
  }
}
