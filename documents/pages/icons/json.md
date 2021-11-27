```yaml
title: Individual Icon Sets
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyInfo: '../types/iconify-json-metadata.md'
  IconifyChars: '../types/iconify-json-metadata.md#chars'
  IconifyMetaData: '../types/iconify-json-metadata.md#iconify-categories'
functions:
  exportJSONPackage: '../tools/tools2/export/json-package.md'
```

# Individual icon sets

There are several packages available that contain all icons, see [icon sets documentation](./index.md).

This article describes individual icons packages.

## Packages

Each icon set is available as a separate NPM package. Package name is `[npm]@iconify-json/{prefix}`, where `[str]{prefix}` is icon set prefix.

These packages are available only on NPM. They are automatically generated from [big icon sets package](./all.md) whenever it is updated.

## Contents

Each package contains one icon set, split in several files:

- `[file]icons.json` contains icon set in `[type]IconifyJSON` format, without any metadata.
- `[file]info.json` contains icon set information in `[type]IconifyInfo` format.
- `[file]chars.json` contains characters map, if exists in `[type]IconifyChars` format. File might not exist in some icon sets.
- `[file]metadata.json` contains metadata in `[type]IconifyMetaData` format: categories, themes. File might not exist in some icon sets.

You can import icon set using named import from package, like this:

```js
import { icons as mdiIcons } from '@iconify-json/mdi';
import { icons as mdiLightIcons } from '@iconify-json/mdi-light';
```

However, code above uses JSON modules. It works fine when using bundlers or when using CommonJS. When using ES modules, importing JSON files requires running script with `[str]--experimental-json-modules` flag.

Alternative is to use `[func]require()`:

```js
const mdiIcons = require('@iconify-json/mdi/icons.json');
const mdiLightIcons = require('@iconify-json/mdi-light/icons.json');
```

## Creating packages

If you want to create a package for your icon set, see `[func]exportJSONPackage()` of [Iconify Tools](../tools/tools2/index.md).

## Difference from big icon sets package

In [big icon sets package](./all.md), all JSON files contain an entire icon set: icon data, information, metadata (categories, themes), characters map.

In small packages that data is split into several files, as described above. If you only want icon data, it is better to read `[file]icons.json` from multiple small packages because they are smaller.

## Collections list

Small packages contain only one icon set. How to know which icon sets are available?

List of icon sets is available in `[npm]@iconify/collections` package.

Package contains `[file]collections.json` with list of all icon sets, same as `[file]collections.json` in `[npm]@iconify/json` package.

You can import collections list directly from `[file]@iconify/collections/collections.json` as default import or use named import:

```js
import { collections } from '@iconify/collections';
```

## Reading data {#tools}

For reading icon sets, you can use:

- [Iconify Utils](../tools/utils/index.md) for JavaScript.
- [Iconify JSON Tools](../tools/json/index.md) for PHP (also available for JavaScript, but deprecated).
