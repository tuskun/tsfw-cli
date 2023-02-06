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
@tsfw/cli/0.0.1 darwin-x64 node-v18.12.1
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
* [`tsfw plugins`](#tsfw-plugins)
* [`tsfw plugins:install PLUGIN...`](#tsfw-pluginsinstall-plugin)
* [`tsfw plugins:inspect PLUGIN...`](#tsfw-pluginsinspect-plugin)
* [`tsfw plugins:install PLUGIN...`](#tsfw-pluginsinstall-plugin-1)
* [`tsfw plugins:link PLUGIN`](#tsfw-pluginslink-plugin)
* [`tsfw plugins:uninstall PLUGIN...`](#tsfw-pluginsuninstall-plugin)
* [`tsfw plugins:uninstall PLUGIN...`](#tsfw-pluginsuninstall-plugin-1)
* [`tsfw plugins:uninstall PLUGIN...`](#tsfw-pluginsuninstall-plugin-2)
* [`tsfw plugins:update`](#tsfw-pluginsupdate)

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

_See code: [dist/commands/command/migrate.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/command/migrate.ts)_

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

_See code: [dist/commands/command/migrate-fresh.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/command/migrate-fresh.ts)_

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

_See code: [dist/commands/make/controller.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/make/controller.ts)_

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

_See code: [dist/commands/make/migration.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/make/migration.ts)_

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

_See code: [dist/commands/make/model.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/make/model.ts)_

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

_See code: [dist/commands/make/seeder.ts](https://github.com/tuskun/tsfw-cli/blob/v0.0.1/dist/commands/make/seeder.ts)_

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

## `tsfw plugins`

List installed plugins.

```
USAGE
  $ tsfw plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tsfw plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `tsfw plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tsfw plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tsfw plugins:add

EXAMPLES
  $ tsfw plugins:install myplugin 

  $ tsfw plugins:install https://github.com/someuser/someplugin

  $ tsfw plugins:install someuser/someplugin
```

## `tsfw plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tsfw plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tsfw plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/inspect.ts)_

## `tsfw plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tsfw plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tsfw plugins:add

EXAMPLES
  $ tsfw plugins:install myplugin 

  $ tsfw plugins:install https://github.com/someuser/someplugin

  $ tsfw plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/install.ts)_

## `tsfw plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tsfw plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tsfw plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/link.ts)_

## `tsfw plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tsfw plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tsfw plugins:unlink
  $ tsfw plugins:remove
```

## `tsfw plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tsfw plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tsfw plugins:unlink
  $ tsfw plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/uninstall.ts)_

## `tsfw plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tsfw plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tsfw plugins:unlink
  $ tsfw plugins:remove
```

## `tsfw plugins:update`

Update installed plugins.

```
USAGE
  $ tsfw plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
