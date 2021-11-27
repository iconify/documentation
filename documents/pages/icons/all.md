```yaml
title: Iconify Icon Sets Package
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
types:
  IconifyJSON: '../types/iconify-json.md'
  IconifyInfo: '../types/iconify-json-metadata.md'
  LegacyIconifyInfo: '../types/iconify-json-metadata.md'
  IconifyChars: '../types/iconify-json-metadata.md#chars'
  IconifyMetaData: '../types/iconify-json-metadata.md#iconify-categories'
functions:
  exportJSONPackage: '../tools/tools2/export/json-package.md'
```

# Iconify icon sets package

There are several packages available that contain all icons, see [icon sets documentation](./index.md).

This article describes full icons package.

You can get the latest version of package from the following sources:

- From GitHub: [https://github.com/iconify/collections-json](https://github.com/iconify/collections-json)
- From NPM: `[npm]@iconify/json`
- From Packagist: `[packagist]iconify/json`

## Files in big package

Icon sets package contains the following files:

- `[file]collections.json` contains list of available icon sets. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[file]collections.md` contains the same information as `[file]collections.json`, but in easily readable format.
- `[file]json/` directory contains JSON files for each icon set in `[type]IconifyJSON` format, such as `[file]json/mdi.json`.
- `[file]lib/` and `[file]dist/` directories contain simple helper functions for PHP and Node.js. See below.

Icon set files contain all icon set data, including info and metadata. If you want to get minimal version without extra stuff, use small packages instead.

## Maintenance

Package is automatically updated every few days, so it always includes the latest icons. If you want to use the latest icons, all you have to do is keep dependencies in your project up to date.

If you are using [Iconify API](../api/index.md), you do not need to do anything because changes are automatically pushed to API servers within minutes after being published.

## Reading data {#tools}

For reading icon sets, you can use:

- [Iconify Utils](../tools/utils/index.md) for JavaScript.
- [Iconify JSON Tools](../tools/json/index.md) for PHP (also available for JavaScript, but deprecated).

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
src: icons/json/finder.js
title: Node.js (for version 2.x)
extra:
  - src: icons/json/finder-old.js
    title: Node.js (for version 1.x)
  - src: icons/json/finder.php
    title: PHP
```

These helper functions only list and locate icon sets.

For reading icon sets, you can use [Iconify Utils](../tools/utils/index.md) or [Iconify JSON Tools](../tools/json/index.md).

## Adding icon sets {#submit}

Do you know a good open source icon set that is missing in Iconify icon sets? [Open an issue on GitHub](https://github.com/iconify/collections-json/issues) to request to add it to Iconify icon sets.

## Licences

All icon sets available in Iconify collections are released under free or open source licence, which allows redistribution. See each icon set's information block for details.
