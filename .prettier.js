module.exports = {
    tabWidth: 2,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 100,
    singleQuote: true,
    trailingComma: "none",
    semi: true,
    overrides: [
      {
        files: '*.json',
        options: {
          printWidth: 200,
        },
      },
    ],
    arrowParens: 'always',
  }