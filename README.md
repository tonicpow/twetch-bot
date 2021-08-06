# TonicPow: Twetch Bot

> The official TonicPow bot for posting on [Twetch](https://twetch.app)

[![last commit](https://img.shields.io/github/last-commit/tonicpow/twetch-bot.svg?style=flat&v=1)](https://github.com/tonicpow/twetch-bot/commits/master)
[![version](https://img.shields.io/github/release-pre/tonicpow/twetch-bot.svg?style=flat&v=1)](https://github.com/tonicpow/twetch-bot/releases)
[![Build Status](https://img.shields.io/github/workflow/status/tonicpow/twetch-bot/CodeQL?logo=github&v=5)](https://github.com/tonicpow/twetch-bot/actions)
[![Sponsor](https://img.shields.io/badge/sponsor-TonicPow-181717.svg?logo=github&style=flat&v=1)](https://github.com/sponsors/TonicPow)
[![slack](https://img.shields.io/badge/slack-tonicpow-orange.svg?style=flat&v=1)](https://atlantistic.slack.com/app_redirect?channel=tonicpow)

<br/>

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
- [Examples & Tests](#examples--tests)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

<br/>

## Pre-Requisites

These are required for building and running the Typescript project:

```shell script
yarn global add tsc
yarn global add ts-node-dev
```

## Installation

#### Yarn

Install:

```shell script
yarn
```

Local development (watch):

```shell script
yarn dev
```

Build & run with:

```shell script
yarn prod
```

#### PM2

```shell script
pm2 start yarn --name api -- prod
```

#### Make

**twetch-bot** requires a [supported release of Node](https://nodejs.org/en/download/).

```shell script
make install
```

Run the bot with:

```shell script
make start
```

<br/>

## Documentation

The bot will query `RSSURL` to check for new campaigns every X seconds as defined in the `refreshRate` parameter in the .env file.

If new campaigns are found, then the bot will automatically [twetch](https://twetch.app) those links with the `privateKey` configured in the .env file.

Once a `privateKey` is setup, upon starting the bot the signing address will be logged along with the message and signature necessary to configure in the [twetch account](https://twetch.app/developer).

The [client identifier](https://twetch.app/developer) should also be configured in the .env file to take advantage of 10% platform fee savings.

<details>
<summary><strong><code>Environment Variables</code></strong></summary>
<br/>

Required environment variables:

- `TWETCH_CLIENT_ID` (twetch client id)
- `TWETCH_PK` (private key for twetch account)
- `TWETCH_REFRESH_RATE` (rate to refresh/fetch new rss)
</details>

### Features

- Consume the TonicPow RSS feed
- Auto post on new campaigns

<details>
<summary><strong><code>Release Deployment</code></strong></summary>
<br/>

[goreleaser](https://github.com/goreleaser/goreleaser) for easy binary or library deployment to Github and can be installed via: `brew install goreleaser`.

The [.goreleaser.yml](.goreleaser.yml) file is used to configure [goreleaser](https://github.com/goreleaser/goreleaser).

Use `make release-snap` to create a snapshot version of the release, and finally `make release` to ship to production.

</details>

<details>
<summary><strong><code>Makefile Commands</code></strong></summary>
<br/>

View all `makefile` commands

```shell script
make help
```

List of all current commands:

```text
audit                          Checks for vulnerabilities in dependencies
clean                          Remove previous builds and any test cache data
help                           Show all commands available
install                        Installs the dependencies for the package
lint                           Runs the standard-js lint tool
outdated                       Checks for outdated packages via npm
release                        Full production release (creates release in Github)
release-test                   Full production test release (everything except deploy)
release-snap                   Test the full release (build binaries)
start                          Starts running the bot
tag                            Generate a new tag and push (IE: tag version=0.0.0)
tag-remove                     Remove a tag if found (IE: tag-remove version=0.0.0)
tag-update                     Update an existing tag to current commit (IE: tag-update version=0.0.0)
update-releaser                Update the goreleaser application
```

</details>

<br/>

## Examples & Tests

Tests & examples coming soon!

<br/>

## Maintainers

| [<img src="https://github.com/jdh7190.png" height="50" alt="Josh" />](https://github.com/jdh7190) | [<img src="https://github.com/rohenaz.png" height="50" alt="Satchmo" />](https://github.com/rohenaz) | [<img src="https://github.com/mrz1836.png" height="50" alt="MrZ" />](https://github.com/mrz1836) |
| :-----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|                                [Josh](https://github.com/jdh7190)                                 |                                [Satchmo](https://github.com/rohenaz)                                 |                                [MrZ](https://github.com/mrz1836)                                 |

<br/>

## Contributing

View the [contributing guidelines](CONTRIBUTING.md) and follow the [code of conduct](CODE_OF_CONDUCT.md).

Support the development of this project 🙏

[![Donate](https://img.shields.io/badge/donate-bitcoin-brightgreen.svg)](https://tonicpow.com/?utm_source=github&utm_medium=sponsor-link&utm_campaign=twetch-bot&utm_term=twetch-bot&utm_content=twetch-bot)

<br/>

## License

[![license](https://img.shields.io/badge/license-Open%20BSV-brightgreen.svg?style=flat)](/LICENSE)
