```yaml
title: Iconify Documentation
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: './types/iconify-json.md'
```

# Iconify documentation

Iconify is the most versatile icon framework. It was originally designed to replace outdated icon fonts with [modern SVG framework](./icon-components/svg-framework/index.md), while offering ease of use that icon fonts are famous for. Since then Iconify has evolved. It offers more icons than any other solution and various native components for web app frameworks.

This documentation is split into several parts.

## Icons

There is no standard for designing or publishing icons. Each icon set is different. Some use stroke for colors, some use fill, some use hardcoded palette. Usually icons contain a lot of unnecessary code. Every icon set has its own way of using icons.

Iconify attempts to streamline that, by parsing icons and converting them to the same easy to use format.

Iconify offers more than 80 open source icon sets with over 60,000 icons. All icons are pre-processed and stored in `[type]IconifyJSON` format.

See [icons section](./icons/index.md) for list of various packages and formats.

[Browse icons](https://icon-sets.iconify.design) to see what is available.

## API

In addition to offering packages, Iconify has public API.

API is used to:

- provide icon data on demand for [Iconify icon components](./icon-components/components/index.md).
- search icons for [Iconify plug-ins](./design/index.md).

With API you can create search for icons, dynamically load icon data for icon components. It can be used to create icon pickers for projects like website customisers.

## Components

`include develop/components`

In addition to icon components, [Icon Finder](./icon-finder/index.md) is in development.

## Plugins

Iconify offers plug-ins for popular software:

`include design/plugins`

Plugins are based on upcoming [Icon Finder](./icon-finder/index.md) and they use [Iconify API](./api/index.md) to search for icons and to dynamically load icon data.

## Libraries

Libraries section contains documentation for various tools that are used to develop and maintain Iconify:

- [Iconify Types](./types/index.md) describes various formats used in Iconify projects.
- [Iconify Tools](./tools/tools2/index.md) is a library that can import icons from various sources, process them and export to multiple formats.
- [Iconify Utils](./tools/utils/index.md) is a set of reusable functions for working with icon sets and icon data.
