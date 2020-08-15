# TonicPow: Twetch Bot
> The official bot for posting on [Twetch](https://twetch.app)

[![Release](https://img.shields.io/github/release-pre/tonicpow/twetch-bot.svg?logo=github&style=flat)](https://github.com/tonicpow/twetch-bot/releases)
[![Slack](https://img.shields.io/badge/slack-tonicpow-orange.svg?logo=slack&style=flat)](https://atlantistic.slack.com/app_redirect?channel=tonicpow)

<br/>

## Table of Contents
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples & Tests](#examples--tests)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

<br/>

## Installation

**twetch-bot** requires a [supported release of Node](https://nodejs.org/en/download/).
```shell script
make install
```

Run the bot:
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
<summary><strong><code>Library Deployment</code></strong></summary>
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
install                        Installs the dependencies for the packge
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
|:---:|:---:|:---:|
| [Josh](https://github.com/jdh7190) | [Satchmo](https://github.com/rohenaz) | [MrZ](https://github.com/mrz1836) |

<br/>

## Contributing
View the [contributing guidelines](CONTRIBUTING.md) and follow the [code of conduct](CODE_OF_CONDUCT.md).

Support the development of this project 🙏

[![Donate](https://img.shields.io/badge/donate-bitcoin-brightgreen.svg)](https://tonicpow.com/?af=twetch-bot)

<br/>

## License

[![license](https://img.shields.io/badge/license-Open%20BSV-brightgreen.svg?style=flat)](/LICENSE)
