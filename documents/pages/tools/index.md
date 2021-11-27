```yaml
title: Tools for Developers
types:
  IconifyJSON: '../types/iconify-json.md'
```

# Tools for developers

Iconify offers several libraries that help with converting icons, manipulating icon sets and generating icons.

Available libraries:

## Utils

[Iconify Utils](./utils/index.md) is a set of reusable functions used by icon components and other packages. Its main purpose is to read `[type]IconifyJSON` icon sets and extract data from it.

Utils package contains the following functions:

- Reading `[type]IconifyJSON` icon sets.
- Extracting subsets of icons or single icons.
- Generating SVG.
- Validating icon names used by icon components, such as `[icon]mdi:home`.

Additionally, it contains functions for:

- Parsing and validating colors. This can used by color input in icon picker.

Package works in any environment: node, browser, deno, and closed JavaScript environment.

## Tools

[Iconify Tools](./tools2/index.md) is a large package, its main purpose is to retrieve icons from various sources, validate them, clean them up and generate `[type]IconifyJSON` icon sets as well as various NPM packages.

Tools package contains the following functions:

- Importing icons from SVG icon sets, Figma documents.
- Validating icons, cleaning up content, optimising icons.
- Exporting icons to `[type]IconifyJSON` icon sets and several NPM packages.

This package works only in node environment, not usable for browser oriented packages.

Main purpose is to generate [Iconify icon sets](../icons/index.md). Tools are used to retrieve icons from various sources, clean them up, then export icon set, then it can be used by various components with help of [Iconify Utils](./utils/index.md).

## Old libraries

[Iconify JSON Tools](./json/index.md) is similar to [Iconify Utils](./utils/index.md), but has been deprecated. Switch to [Iconify Utils](./utils/index.md).

[Iconify Tools v1](./node/index.md) is an older version of [Iconify Tools](./tools2/index.md).
