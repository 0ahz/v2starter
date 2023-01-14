/* https://stylelint.io/user-guide/rules/selector-class-pattern/ */
module.exports = {
  root: true,
  plugins: ['stylelint-less', 'stylelint-selector-bem-pattern'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': null,
    'plugin/selector-bem-pattern': {
      preset: 'suit',
    },
  },
}
