```yaml
title: Iconify Icon Sets
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-json-metadata.md'
  LegacyIconifyInfo: '../../types/iconify-json-metadata.md'
  IconifyChars: '../../types/iconify-json-metadata.md#chars'
  IconifyMetaData: '../../types/iconify-json-metadata.md#iconify-categories'
functions:
  exportJSONPackage: '../../tools/tools2/export/json-package.md'
```

# Iconify icon sets

All icon sets available with [Iconify API](../api/index.md) are available for developers to use with their own tools and projects.

Iconify is designed to be used with any icons. To make things easier, Iconify offers collection of the most popular icon sets as a package. There are over 60,000 icons from more than 80 icon sets.

## Sources

There are two types of icon set packages:

- Packages that contains one icon set.
- Package that contains all icon sets.

Difference is in size. If you want to get all icon sets, download big package. If you want to save disc space, download individual packages that you need.

### Big package

Big package contains:

- List of icon sets.
- One file per icon set, in `[type]IconifyJSON` format.

You can get the latest version of package from the following sources:

- From NPM: `[npm]@iconify/json`
- From GitHub: [https://github.com/iconify/collections-json](https://github.com/iconify/collections-json)
- From Packagist: `[packagist]iconify/json`

#### Files in big package

Icon sets package contains the following files:

- `[file]collections.json` contains list of available icon sets. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[file]collections.md` contains the same information as `[file]collections.json`, but in easily readable format.
- `[file]json/` directory contains JSON files for each icon set in `[type]IconifyJSON` format, such as `[file]json/mdi.json`.
- `[file]lib/` and `[file]dist/` directories contain simple helper functions for PHP and Node.js. See below.

Icon set files contain all icon set data, including info and metadata. If you want to get minimal version without extra stuff, use small packages instead.

### Small packages

Small packages contain one icon set, split in several files:

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

#### Creating packages

If you want to create a package for your icon set, see `[func]exportJSONPackage()` of [Iconify Tools](../../tools/tools2/index.md).

#### Collections list

Small packages contain only one icon set. How to know which icon sets are available?

List of icon sets is available in `[npm]@iconify/collections` package.

Package contains `[file]collections.json` with list of all icon sets, same as `[file]collections.json` in `[npm]@iconify/json` package.

You can import collections list directly from `[file]@iconify/collections/collections.json` as default import or use named import:

```js
import { collections } from '@iconify/collections';
```

## Maintenance

Package is automatically updated every few days, so it always includes the latest icons. If you want to use the latest icons, all you have to do is keep dependencies in your project up to date.

If you are using [Iconify API](../api/index.md), you do not need to do anything because changes are automatically pushed to API servers within minutes after being published.

## Reading data {#tools}

For reading icon sets, you can use:

- [Iconify Utils](../../tools/utils/index.md) for JavaScript.
- [Iconify JSON Tools](../../tools/json/index.md) for PHP (also available for JavaScript, but deprecated).

## Helper functions {#helpers}

Package contains simple helper functions for Node.js and PHP.

### Node.js functions for version 1 {#functions-legacy}

Versions 1 of `[npm]@iconify/json` contain synchronous functions:

- `[func]collections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set in `[type]LegacyIconifyInfo` format.
- `[func]locate(prefix)` returns location of JSON file for an icon set.

### Node.js functions for version 2 {#functions-node}

In versions 2 of `[npm]@iconify/json` functions are asynchronous:

- `[func]lookupCollections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[func]lookupCollection(prefix)` loads an icon set. Result is `[type]IconifyJSON` object.

All functions listed above are asynchronous and require using `[func]await` before function name (see example below).

There are also few synchronous functions:

- `[func]locate(prefix)` returns location of JSON file for an icon set.

### PHP functions

PHP is a synchronous language, so functions for PHP are identical for versions 1 and 2.

Use `[prop]Iconify\IconsJSON\Finder` class that has the following static functions:

- `[func]collections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set. For version 1 data is in `[type]LegacyIconifyInfo` format, for version 2 data is in `[type]IconifyInfo` format.
- `[func]locate(prefix)` returns location of JSON file for an icon set.
- `[func]rootDir()` returns location of root directory of package.

### Example

Example:

```yaml
src: sources/json/finder.js
title: Node.js (for version 2.x)
extra:
  - src: sources/json/finder-old.js
    title: Node.js (for version 1.x)
  - src: sources/json/finder.php
    title: PHP
```

These helper functions only list and locate icon sets.

For reading icon sets, you can use [Iconify Utils](../../tools/utils/index.md) or [Iconify JSON Tools](../../tools/json/index.md).

## Adding icon sets {#submit}

Do you know a good open source icon set that is missing in Iconify icon sets? [Open an issue on GitHub](https://github.com/iconify/collections-json/issues) to request to add it to Iconify icon sets.

## Licences

All icon sets available in Iconify collections are released under free or open source licence, which allows redistribution. See each icon set's information block for details.
