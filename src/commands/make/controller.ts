import {Args, Command, Flags} from '@oclif/core'
import * as fs from "fs";
import * as path from "path";
import {toKebabCase, toPascalCase} from "../../utils";

export default class MakeController extends Command {
  static description = 'Generate migration class'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    name: Args.string()
  }

  static aliases = ["make:controller"]

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

    // Get controller stub
    const {args, flags} = await this.parse(MakeController);

    this.log(`Generating controller ${toPascalCase(args.name)} class.`);

    const fileUri = process.cwd() + `/src/controllers/${toKebabCase(args.name)}.controller.ts`;

    if (fs.existsSync(fileUri)) {
      if (!flags.force) {
        this.log("You have another controller with this name!\nYou may use --force, -f to force generate this class.");
        this.exit(0);
      }

      // Force generate controller file
      try {
        fs.unlinkSync(fileUri);
      } catch (e) {
        this.log("A problem occured while deleting current class! Please try deleting manually.");
        this.exit(0);
      }
    }

    const template = fs.readFileSync(
      path.join(__dirname, '../../../stubs/controller.ts.stub'))
      .toString()
      .replaceAll('__NAME__', toPascalCase(args.name) ?? 'Class');

    try {
      fs.writeFileSync(fileUri, template);
      this.log(`Controller class generated for ${toPascalCase(args.name)}!`)
    } catch (e) {
      console.log("A problem occured while generating class!", e);
      this.exit(0);
    }
  }
}
