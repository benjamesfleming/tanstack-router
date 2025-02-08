import { describe, expect, it } from 'vitest'
import { getConfig } from '../src'
import { format } from '../src/format'

describe('format tests', () => {
  it('should default format with prettier', async () => {
    const source = `const a = "test"`
    const config = getConfig({
      semicolons: true,
      quoteStyle: 'single',
    })

    const formatted = await format(source, config)
    expect(formatted).toBe(`const a = 'test';\n`)
  })

  it('should format with prettier', async () => {
    const source = `const a = "test"`
    const config = getConfig({
      formatter: 'prettier',
      semicolons: true,
      quoteStyle: 'double',
    })

    const formatted = await format(source, config)
    expect(formatted).toBe(`const a = "test";\n`)
  })

  it('should not format when disabled', async () => {
    const source = `const a = "test"`
    const config = getConfig({
      formatter: 'none',
      semicolons: true,
      quoteStyle: 'double',
    })
    const formatted = await format(source, config)
    expect(formatted).toBe(source)
  })
})
