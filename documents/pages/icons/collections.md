```yaml
title: Icon Sets List
types:
  IconifyInfo: '../types/iconify-json-metadata.md'
```

# Available icon sets list

[Small icon set packages](./json.md) contain only one icon set. How to know which icon sets are available?

List of icon sets is available in `[npm]@iconify/collections` package.

Package contains `[file]collections.json` with list of all icon sets, same as `[file]collections.json` in `[npm]@iconify/json` package.

## Structure

Contents of `[file]collections.json` is an object, where key is icon set prefix, value is icon set information in `[type]IconifyInfo` format.

## Import

You can import collections list directly from `[file]@iconify/collections/collections.json` as default import or use named import:

```js
import { collections } from '@iconify/collections';
```

Code above uses JSON modules. It works fine when using bundlers or when using CommonJS. When using ES modules, importing JSON files requires running script with `[str]--experimental-json-modules` flag.

Alternative is to use `[func]require()`:

```js
const collections = require('@iconify/collections/collections.json');
```
