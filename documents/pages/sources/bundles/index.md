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

Icon bundle is the easiest way to make Iconify [SVG framework](../../implementations/svg-framework/index.md) and [various component](../../implementations/components/index.md) work without the internet access. Instead of loading icon data from Iconify API, you can provide icon by loading icon bundle.

## Smaller bundle size

For components that do have support for Iconify API, such as [React offline component](../../implementations/react/offline.md), you can use bundles to import multiple icons at the same time instead of importing icons one by one. This reduces bundle size.

## Speed up loading

Icon bundles can be used to speed up loading for [SVG framework](../../implementations/svg-framework/index.md) and [various components](../../implementations/components/index.md).

When you tell Iconify component to render an icon, if icon data is not available, component attempts to load data for icon from Iconify API. Even though loading icon data from API is very fast, it is not instant and it requires internet access. By providing icon data for most used icons, you guarantee that icon data is ready when a component needs it, rendering icon instantly and it can be used offline.

## How to create icons bundle? {#create}

You need to:

1. Generate icon data for bundle. This is done by extracting data for a few icons from a big icon set.
2. Wrap data in a function that loads icon data or assign it to a variable.

Icon data is a `[type]IconifyJSON` object, like this:

```yaml
src: sources/api/mdi.json
```

This is the same format that is used to store an icon set, but without metadata and contains only icons that you need.

You need to wrap that data in a function or assign it to a variable. For [SVG framework](./svg-framework.md) function name is `[func]Iconify.addCollection`:

```yaml
src: sources/api/mdi.js
```

For [various components](../../implementations/components/index.md), you need to import function `[func]addCollection` from component package:

```yaml
src: sources/api/mdi-component.js
```

Each set of data can include only icons from one icon set. If you want to bundle icons from multiple icon sets, you need to call `[func]addCollection` for each icon set.

```yaml
src: sources/bundles/mix.js
```

## Generating icon bundle data {#data}

There are several ways to generate data for icon bundles:

- [Using Iconify API to generate bundle](./api.md).
- [Using Iconify JSON Tools to generate bundle](./json-tools.md).

## Wrapping data in callback {#callbacks}

You need to make sure icon bundle is loaded before icon component attempts to render an icon. Otherwise, component might send a redundant API query to retrieve icon data.

If you are using component, most likely icon data will be bundled with component in same JavaScript file, so it is done automatically.

If you are using SVG framework and are linking to SVG framework JavaScript file separately, it gets a bit more complex. See [bundles for SVG framework](./svg-framework.md) for solutions.

## Examples

Check out [code examples](./examples/index.md) for full examples.
