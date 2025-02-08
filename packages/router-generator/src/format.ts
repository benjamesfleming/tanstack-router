import { Config } from './config'
import * as prettier from 'prettier'

export async function format(source: string, config: Config): Promise<string> {
  switch (config.formatter) {
    case 'prettier':
      const prettierOptions: prettier.Config = {
        semi: config.semicolons,
        singleQuote: config.quoteStyle === 'single',
        parser: 'typescript',
      }
      return prettier.format(source, prettierOptions)
    case 'none':
    default:
      return source
  }
}
