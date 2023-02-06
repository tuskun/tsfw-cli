import {Command} from '@oclif/core'
import * as fs from "fs";

export default class MakeModel extends Command {
  static description = 'Generate migration class'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = {}

  static aliases = ["make:model"]

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

    this.log("Generating model class Folder: " + process.cwd())
  }
}
