# Next Define Config

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fnext-define-config)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fnext-define-config)
![ESM](https://img.shields.io/badge/ESM-fe0)
![Provenance](https://img.shields.io/badge/Provenance-fo0)
![CodeQL](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/codeql.yaml?label=CodeQL)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/next-define-config/remark.yaml?label=Remark)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```shell
# bun
bun i -D @archoleat/next-define-config
```

```shell
# pnpm
pnpm i -D @archoleat/next-define-config
```

```shell
# npm
npm i -D @archoleat/next-define-config
```

```shell
# yarn
yarn add -D @archoleat/next-define-config
```

## Usage

See [Next Configuration](https://nextjs.org/docs/app/api-reference/next-config-js).

Instead of this:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

Use this:

```js
// next.config.js or next.config.mjs
import { defineConfig } from '@archoleat/next-define-config';

export default defineConfig({
  // Your options
})
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).
