module.exports = {
  ignoer:['.git', 'node_modules', "**/routeConfig.tsx"],
  env:{
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:i18next/recommended"

  ],
parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  "rules": {
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  }, 
  globals: {__IS_DEV__:true} ,

}