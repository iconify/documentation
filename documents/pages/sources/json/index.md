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
```

# Iconify icon sets

All icon sets available with [Iconify API](../api/index.md) are available for developers to use with their own tools and projects.

Iconify is designed to be used with any icons. To make things easier, Iconify offers collection of the most popular icon sets as a package. There are over 60,000 icons from more than 80 icon sets.

## Licences

All icon sets available in Iconify collections are released under free or open source licence, which allows redistribution. See each icon set's information block for details.

## Sources

You can get the latest version of icon sets from the following sources:

- From GitHub: [https://github.com/iconify/collections-json](https://github.com/iconify/collections-json)
- From NPM: `[npm]@iconify/json`
- From Packagist: `[packagist]iconify/json`

## Files

Icon sets package contains the following files:

- `[file]collections.json` contains list of available icon sets. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[file]collections.md` contains the same information as `[file]collections.json`, but in easily readable format.
- `[file]json/` directory contains JSON files for each icon set in `[type]IconifyJSON` format.
- `[file]lib/` directory contains simple helper functions for PHP and Node.js. See below.

## Maintenance

Package is automatically updated every few days, so it always includes the latest icons. If you want to use the latest icons, all you have to do is keep dependencies in your project up to date.

If you are using [Iconify API](../api/index.md), you do not need to do anything because changes are automatically pushed to API servers within minutes after being published.

## Reading data {#tools}

For reading icon sets, you can use [Iconify JSON Tools](../../tools/json/index.md).

Library is available for Node.js and PHP.

## Helper functions {#helpers}

Package contains simple helper functions for Node.js and PHP:

- `[func]collections()` returns list of collections. It is a simple object, where key is prefix, value is information about icon set in `[type]IconifyInfo` format.
- `[func]locate(prefix)` returns location of JSON file for an icon set.

Example:

```yaml
src: sources/json/finder.js
title: Node.js
extra:
  - src: sources/json/finder.php
    title: PHP
```

These helper functions only list and locate icon sets. For reading icon sets, you can use [Iconify JSON Tools](../../tools/json/index.md).

## Adding icon sets {#submit}

Do you know a good open source icon set that is missing in Iconify icon sets? [Open an issue on GitHub](https://github.com/iconify/collections-json/issues) to request to add it to Iconify icon sets.
