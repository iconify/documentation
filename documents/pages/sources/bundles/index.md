```yaml
title: Iconify Icon Bundles
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles

`include visual-blocks/bundle`

## Offline use

Icon bundle is the easiest way to make Iconify implementations that rely on API, such as [SVG framework](../../implementations/svg-framework/index.md) and [React component](../../implementations/react-with-api/index.md), work without the internet access. Instead of loading icon data from API, you can provide icon by loading icon bundle.

## Smaller bundle size

For components that do not rely on API, such as [basic React component](../../implementations/react/index.md) and [Vue component](../../implementations/vue/index.md), you can use bundles to import multiple icons at the same time instead of importing icons one by one.

## Speed up loading

Icon bundles can be used to speed up loading for [SVG framework](../../implementations/svg-framework/index.md) and [React component](../../implementations/react-with-api/index.md).

[Iconify implementation](../../implementations/index.md) queries API for icon data when it needs to render that icon. Even though loading icon data from API is very fast, it is not instant. By providing icon data for most used icons, you guarantee that icon data is ready when a component needs it, rendering icon instantly.

## How to create icons bundle? {#create}

You need to:

1. Generate icon data for bundle. This is done by extracting data for a few icons from a big icon set.
2. Wrap data in a function that loads icon data or assign it to a variable.

Icon data is a `[type]IconifyJSON` object, like this:

```yaml
src: sources/api/mdi.json
```

This is the same format that is used to store an icon set, but without metadata and contains only icons that you need.

You need to wrap that data in a function or assign it to a variable. This step is different for different [Iconify implementations](../../implementations/index.md). For example, in bundles for [SVG framework](./svg-framework.md) function name is `[func]Iconify.addCollection`:

```yaml
src: sources/api/mdi.js
```

Each set of data can include only icons from one icon set. If you want to bundle icons from multiple icon sets, you need to repeat same process for each icon set. The only exception is using `[var]IconifyPreload` for SVG framework, which can be used with an array of data sets (see below).

```yaml
src: sources/bundles/mix.js
```

## Generating icon bundle data {#data}

There are several ways to generate data for icon bundles:

- [Using Iconify API to generate bundle](./api.md).
- [Using Iconify JSON Tools to generate bundle](./json-tools.md).

## Wrapping data in callback {#callbacks}

You need to make sure icon bundle is loaded before implementation attempts to render an icon. Otherwise, implementation might send a redundant API query to retrieve icon data.

### SVG framework

SVG framework supports 2 ways of adding icon bundles:

- Loading icon bundles before loading Iconify.
- Loading icon bundles after loading Iconify.

See [bundles for SVG framework](./svg-framework.md) for details.

### Components

Most components expose method `[func]addCollection()`. You need to use that method to import icon bundles.

See [bundles for React component](./react.md) for details.

## Examples

Check out [code examples](./examples/index.md) for full examples.
