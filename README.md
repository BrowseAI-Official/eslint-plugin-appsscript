# `@browseai/eslint-plugin-appsscript`
ESLint plugin for Google Apps Script.

## Installation

```bash
$ npm i -D eslint @browseai/eslint-plugin-appsscript
```

**Note**: If you installed ESLint globally then you must also install `@browseai/eslint-plugin-appsscript` globally.

## Usage

Add `@browseai/eslint-plugin-appsscript` to the plugins section of your `.eslintrc` configuration file.

```jsonc
{
  "plugins": ["@browseai/eslint-plugin-appsscript"]
}
```

Then configure the rules you want to use under the rules section.

```jsonc
{
  "rules": {
    "@browseai/eslint-plugin-appsscript/expect-private-functions": "error"
  }
}
```

You can also tell ESLint about the environment variables provided by Apps Script by doing:

```jsonc
{
  "env": {
    "@browseai/eslint-plugin-appsscript/globals": true
  }
}
```

## Rules


| Rule                                                                         | Description                                                         | Configurations   | Fixable      |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------- | ------------ |
| expect-private-functions                                                     | Enforce using private functions                                     | ![recommended][] | ![fixable][] |
