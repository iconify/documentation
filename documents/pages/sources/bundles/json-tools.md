```yaml
title: Generating Iconify Icon Bundles with JSON Tools
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Generating icon bundles with JSON Tools

This tutorial is a part of [Iconify icon bundles tutorial](./index.md).

You can use [Iconify JSON Tools](../../tools/json/index.md) to generate data for icon bundles. This method requires some coding, but it can be used to automate bundle creation.

[Iconify JSON Tools](../../tools/json/index.md) library is available in Node.js and PHP, so you can choose which programming language to use. See [Iconify JSON Tools](../../tools/json/index.md) for installation instructions.

## Steps

Logic of creating bundle with Iconify JSON Tools:

1. Load icon set.
2. Filter icons.
3. Export to JSON string.
4. Wrap in a callback, see [icon bundles tutorial](./index.md#use) for details.

## Loading icon set {#load}

To load an icon set, use functions `[func]loadFromFile` or `[func]loadIconifyCollection`.

Documentation for functions:

- [loadFromFile() documentation](../../tools/json/collection.md#load-from-file).
- [loadIconifyCollection() documentation](../../tools/json/collection.md#load-iconify).

```yaml
src: sources/bundles/load-iconify.js
title: Node.js
extra:
  - src: sources/bundles/load-iconify.php
    title: PHP
```

## Filter icons {#filter}

After loading icon set, you need to filter icon data.

Use `[func]getIcons` function. See [getIcons() documentation](../../tools/json/collection.md#get-icons).

```yaml
src: sources/bundles/get-icons.js
title: Node.js
extra:
  - src: sources/bundles/get-icons.php
    title: PHP
```

Variable `[var]data` contains `[type]IconifyJSON` object.

## Export to JSON string {#json}

Then convert `[type]IconifyJSON` to `[type]string`:

```yaml
src: sources/bundles/json-encode.js
title: Node.js
extra:
  - src: sources/bundles/json-encode.php
    title: PHP
```

## Wrap in a callback {#callback}

This step is different for different Iconify icon components. See [icon bundles tutorial](./index.md#callbacks) for details.

Also check out [code examples](./examples/index.md) for full examples.
