import { eslintConfig } from '@kolhe/eslint-config'

export default eslintConfig(
  [
    {
      files: ['src/**/*.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],
  {
    prettier: true,
    markdown: true
  }
)
