import {flags} from '@oclif/command'
import chalk from 'chalk'

import {ApiResponse} from '../api'
import Command, {TableResult} from '../base-command'
import { string } from '@oclif/command/lib/flags';

export default class Repositories extends Command {
  static description = 'search github repositories. https://developer.github.com/v3/search/#search-repositories'

  static examples = [
    `$ ghs repo puppeteer
  GoogleChrome/puppeteer (https://github.com/GoogleChrome/puppeteer)
`
  ]

  static flags = {
    in: flags.string({
      description:
        'Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these.'
    }),
    size: flags.string({
      description:
        'Finds repositories that match a certain size (in kilobytes).'
    }),
    forks: flags.string({
      description: 'Filters repositories based on the number of forks.'
    }),
    fork: flags.boolean({
      allowNo: true,
      char: 'f',
      description:
        'Filters whether forked repositories should be included (--fork) or not (--no-fork).'
    }),
    created: flags.string({
      char: 'c',
      description:
        'Filters repositories based on date of creation, or when they were last updated.'
    }),
    pushed: flags.string({
      char: 'p',
      description:
        'Filters repositories based on date of creation, or when they were last updated.'
    }),
    user: flags.string({
      char: 'u',
      description: 'Limits searches to a specific user. Use --current-user to filter on current github username'
    }),
    ['current-user']: flags.boolean({
      allowNo: false,
      hidden: true,
      description:
        'Limits searches to a the current git user for the --user value.'
    }),
    repo: flags.string({
      char: 'r',
      description: 'Limits searches to a specific repo.'
    }),
    language: flags.string({
      char: 'l',
      description:
        "Searches repositories based on the language they're written in."
    }),
    license: flags.string({
      description: 'Filters repositories by license or license family, using the license keyword.'
    }),
    stars: flags.string({
      description: 'Searches repositories based on the number of stars.'
    }),
    topic: flags.string({
      description: 'Filters repositories based on the specified topic.'
    }),
    archived: flags.boolean({
      allowNo: true,
      description: 'Filters whether archived repositories should be included (--archived) or not (--no-archived).'
    }),
    sort: flags.enum({
      char: 's',
      description: 'The sort field. Default: results are sorted by best match.',
      options: ['stars', 'forks', 'updated']
    }),
    ...Command.flags
  }

  static aliases = ['repo', 'repository']

  static args = [...Command.args]

  format(data: ApiResponse): TableResult {
    const rows = data.items.reduce((acc, item) => {
      const repo = chalk.green(item.full_name)
      const url = chalk.blue(item.html_url)
      const description = chalk.whiteBright(item.description)
      const stars = chalk.yellowBright(item.stargazers_count)
      const pushed = chalk.dim(item.pushed_at)
      acc.push({repo, stars, description, pushed, url})
      return acc
    }, [])

    return {
      rows,
      columns: {
        repo: {},
        stars: {},
        description: {},
        pushed: {},
        url: {},
      }
    }
  }
}
