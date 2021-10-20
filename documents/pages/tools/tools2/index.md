```yaml
title: Iconify Tools 2
wip: true
replacements:
  - code: '@iconify/tools@2'
    value: '${tools.import-tools2}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: '../utils/color.md'
  FullIconCustomisations: '../utils/icon-customisations.md'
  IconCustomisations: '../utils/icon-customisations.md'
  SVG: './svg/index.md'
  IconSet: './icon-set/index.md'
functions:
  mergeIconSets: './icon-set/merge.md'
  setIcon: './icon-set/set-icon.md'
```

# Iconify Tools

Iconify Tools is a set of reusable functions for importing, exporting and parsing icons.

Library is written in TypeScript, is available as ES modules for modern development and CommonJS for older scripts.

## Installation

To install library run:

```sh
npm install @iconify/tools@2 --save
```

## Classes

`include tools/tools2/main-classes`

## Import

To start working with icon set, you can either create blank icon set or import icon set from some source.

Documentation from importing icons:

- [Importing Iconify JSON data](./import/json.md).
- [Importing SVG](./import/svg.md).
- [Importing all SVG in directory](./import/directory.md).
