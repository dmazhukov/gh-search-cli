gh-search-cli
=============
Provides a cli for searching github.com. Supports repositories, code, issues and commits. Can be configured for github enterprise instances as well. Built using [oclif](https://github.com/oclif/oclif)

[![Version](https://img.shields.io/npm/v/gh-search-cli.svg)](https://npmjs.org/package/gh-search-cli)
[![CircleCI](https://circleci.com/gh/feinoujc/gh-search-cli/tree/master.svg?style=shield)](https://circleci.com/gh/feinoujc/gh-search-cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/feinoujc/gh-search-cli?branch=master&svg=true)](https://ci.appveyor.com/project/feinoujc/gh-search-cli/branch/master)
[![Codecov](https://codecov.io/gh/feinoujc/gh-search-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/feinoujc/gh-search-cli)
[![License](https://img.shields.io/npm/l/gh-search-cli.svg)](https://github.com/feinoujc/gh-search-cli/blob/master/package.json)

<!-- toc -->
* [Setup](#setup)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Setup

The cli requires a personal access token (no scope needed). The cli will create a new token on the first run and store it for future use. If you prefer you can use your own token and config the cli yourself (see [ghs config](#ghs-config))

_See code: [src/hooks/init/auth.ts](https://github.com/feinoujc/gh-search-cli/blob/v2.1.0/src/hooks/init/auth.ts)_


# Usage
<!-- usage -->
```sh-session
$ npm install -g gh-search-cli
$ ghs COMMAND
running command...
$ ghs (-v|--version|version)
gh-search-cli/3.0.0 darwin-x64 node-v8.8.1
$ ghs --help [COMMAND]
USAGE
  $ ghs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ghs config`](#ghs-config)
* [`ghs help [COMMAND]`](#ghs-help-command)

## `ghs config`

Configure ghs settings

```
USAGE
  $ ghs config

OPTIONS
  --base-url=base-url  sets the github base url for github enterprise instances (ex: https://github.company.com/api/v3).
  --clear              clears the local config file including the auth token.
  --token=token        sets the github token to use.

EXAMPLE
  $ ghs config --clear
  config cleared
```

_See code: [src/commands/config.ts](https://github.com/feinoujc/gh-search-cli/blob/v3.0.0/src/commands/config.ts)_

## `ghs help [COMMAND]`

display help for ghs

```
USAGE
  $ ghs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
