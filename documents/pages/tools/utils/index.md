```yaml
title: Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify Utils

Iconify Utils is a set of reusable functions for working with icon sets and icon data.

Library is written in TypeScript, is available as ES modules for modern development and CommonJS for older scripts.

## Installation

To install library run:

```sh
npm install @iconify/utils@next --save
```

## Examples

Documentation for each function below includes code samples.

In addition to that, [there are several bigger code samples for specific commonly used tasks](./examples/index.md) to help you figure out what functions to use.

## Functions

`include tools/utils/functions-list`

## Advanced usage {#advanced}

Iconify Utils is a basic package that parses `[type]IconifyJSON` and `[type]IconifyIcon` data. It is not meant for more complex stuff.

For more complex stuff, such as importing icons, validating icon code, changing palette, cleaning up, exporting to various formats, see [Iconify Tools package](../tools2/index.md).
