```yaml
title: Iconify Icon Bundles
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '../../types/iconify-json.md'
wip: true
```

# Icon bundles

`include visual-blocks/bundle`

## Offline use

Icon bundles is the easiest way to make Iconify implementations that rely on API, such as [SVG framework](../../implementations/svg-framework/index.md) and [React component](../../implementations/react-with-api/index.md), work without internet access. Instead of loading icon data from API, you can provide icon by loading icon bundle.

## Speed up loading

Icon bundles can be used to speed up loading.

[Iconify implementation](../../implementations/index.md) queries API for icon data when it needs to render that icon. Even though loading icon data from API is very fast, it is not instant. By providing icon data for most used icons, you guarantee that icon data is ready when a component needs it, rendering icon instantly.

## How to create icons bundle? {#create}

You need to:

1. Generate JSON icon data for bundles.
2. Wrap JSON in function that loads icon data or assign it to a variable.

Icon data is a `[type]IconifyJSON` object, like this:

```yaml
src: sources/api/mdi.json
```

You need to wrap that data in a function or assign it to a variable. This part is different for different [Iconify implementations](../../implementations/index.md). For example, for [Iconify SVG framework](../../implementations/svg-framework/index.md) callback is `[func]Iconify.addCollection`:

```yaml
src: sources/api/mdi.js
```

Each set of data can include only icons from one icon set. If you want to bundle icons from multiple icon sets, you need to repeat same process for each icon set. The only exception is using `[var]IconifyPreload` for SVG framework, which can be used with an array of data sets (see below).

```yaml
src: sources/api/mix.js
```

## Generating icon bundle data {#data}

There are several ways to generate data for icon bundles:

- [Using Iconify API to generate bundle](./api.md).
- [Using Iconify JSON Tools to generate bundle](./json-tools.md).

## Wrapping data in callback {#callbacks}

You need to make sure icon bundle is loaded before implementation attempts to render an icon. Otherwise, implementation might send a redundant API query to retrieve icon data.

### SVG framework

SVG framework has 2 ways of adding icon bundles:

- Loading bundles before loading Iconify.
- Loading bundles after loading Iconify.

See [bundles for SVG framework](./svg-framework.md) for details.

### Components

Components that support Iconify API, expose method `[func]addCollection()`. You need to use that method to import icon bundles.

See [bundles for React component](./react.md) for details.

## Examples

Check out [code examples](./examples.md) for full examples.
