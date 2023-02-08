import {Dialect, Sequelize} from "sequelize";

class Connection {
  private static _instance: Connection;
  public db;
  constructor() {
    this.db = new Sequelize(
      `${process.env.DB_NAME}`,
      `${process.env.DB_USER}`,
      `${process.env.DB_PASSWORD}`,
      {
        host: `${process.env.DB_HOST}`,
        dialect: `${<Dialect>process.env.DB_DIALECT}`,
        pool: {
          max: 10,
          min: 0,
          idle: 100000
        },
        dialectOptions: {
          ssl: false
        },
        logging: false
      }
    );
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new Connection();
    return this._instance;
  }
}

export default Connection;
