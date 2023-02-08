oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @tsfw/cli
$ tsfw COMMAND
running command...
$ tsfw (--version)
@tsfw/cli/0.0.2 darwin-x64 node-v18.12.1
$ tsfw --help [COMMAND]
USAGE
  $ tsfw COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tsfw command:migrate`](#tsfw-commandmigrate)
* [`tsfw command:migrate-fresh`](#tsfw-commandmigrate-fresh)
* [`tsfw help [COMMANDS]`](#tsfw-help-commands)
* [`tsfw make:controller [NAME]`](#tsfw-makecontroller-name)
* [`tsfw make:migration [NAME]`](#tsfw-makemigration-name)
* [`tsfw make:model`](#tsfw-makemodel)
* [`tsfw make:seeder`](#tsfw-makeseeder)
* [`tsfw migrate`](#tsfw-migrate)
* [`tsfw migrate:fresh`](#tsfw-migratefresh)

## `tsfw command:migrate`

Generate migration class

```
USAGE
  $ tsfw command:migrate

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw migrate

EXAMPLES
  $ tsfw command:migrate
```

_See code: [dist/commands/command/migrate.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/command/migrate.ts)_

## `tsfw command:migrate-fresh`

Generate migration class

```
USAGE
  $ tsfw command:migrate-fresh

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw migrate:fresh

EXAMPLES
  $ tsfw command:migrate-fresh
```

_See code: [dist/commands/command/migrate-fresh.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/command/migrate-fresh.ts)_

## `tsfw help [COMMANDS]`

Display help for tsfw.

```
USAGE
  $ tsfw help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tsfw.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.2/src/commands/help.ts)_

## `tsfw make:controller [NAME]`

Generate migration class

```
USAGE
  $ tsfw make:controller [NAME] [-f]

FLAGS
  -f, --force

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw make:controller

EXAMPLES
  $ tsfw make:controller
```

_See code: [dist/commands/make/controller.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/make/controller.ts)_

## `tsfw make:migration [NAME]`

Generate migration class

```
USAGE
  $ tsfw make:migration [NAME]

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw make:migration

EXAMPLES
  $ tsfw make:migration
```

_See code: [dist/commands/make/migration.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/make/migration.ts)_

## `tsfw make:model`

Generate migration class

```
USAGE
  $ tsfw make:model

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw make:model

EXAMPLES
  $ tsfw make:model
```

_See code: [dist/commands/make/model.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/make/model.ts)_

## `tsfw make:seeder`

Generate migration class

```
USAGE
  $ tsfw make:seeder

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw make:seeder

EXAMPLES
  $ tsfw make:seeder
```

_See code: [dist/commands/make/seeder.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.2/dist/commands/make/seeder.ts)_

## `tsfw migrate`

Generate migration class

```
USAGE
  $ tsfw migrate

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw migrate

EXAMPLES
  $ tsfw migrate
```

## `tsfw migrate:fresh`

Generate migration class

```
USAGE
  $ tsfw migrate:fresh

DESCRIPTION
  Generate migration class

ALIASES
  $ tsfw migrate:fresh

EXAMPLES
  $ tsfw migrate:fresh
```
<!-- commandsstop -->
