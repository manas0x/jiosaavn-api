import { configDefaults, defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '#modules': resolve(__dirname, './src/modules'),
      '#common': resolve(__dirname, './src/common')
    }
  },
  test: {
    include: ['src/**/*.spec.ts'],
    exclude: [...configDefaults.exclude],
    testTimeout: 30000,
    retry: 3,
    coverage: {
      enabled: false, // TODO: enable coverage once all tests are passing
      include: ['src/common', 'src/modules'],
      exclude: ['src/common/types/**'],
      provider: 'v8',
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100
      }
    }
  }
})
