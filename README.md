# `@browseai/eslint-plugin-appsscript`
ESLint plugin for Google Apps Script.

## Installation

```bash
$ npm i -D eslint @browseai/eslint-plugin-appsscript
```

**Note**: If you installed ESLint globally then you must also install `@browseai/eslint-plugin-appsscript` globally.

## Usage

Add `@browseai/appsscript` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```jsonc
{
  "plugins": ["@browseai/appsscript"]
}
```

Then configure the rules you want to use under the rules section.

```jsonc
{
  "rules": {
    "@browseai/appsscript/expect-private-functions": "error"
  }
}
```

You can also tell ESLint about the environment variables provided by Apps Script by doing:

```jsonc
{
  "env": {
    "@browseai/appsscript/globals": true
  }
}
```

## Rules


| Rule                                                                         | Description                                                         | Configurations   | Fixable      |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------- | ------------ |
| expect-private-functions                                                     | Enforce using private functions                                     | ![recommended][] | ![fixable][] |
