```yaml
title: Iconify Documentation
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
  - code: '80 open source'
    value: '${counters.sets} open source'
types:
  IconifyJSON: './types/iconify-json.md'
```

# Iconify documentation

Iconify is the most versatile icon framework. It was originally designed to replace outdated icon fonts with [modern SVG framework](./icon-components/svg-framework/index.md), while offering ease of use that icon fonts are famous for. Since then Iconify has evolved. It offers more icons than any other solution and various native components for web app frameworks.

This documentation is split into several parts.

## Icons

Iconify offers more than 80 open source icon sets with over 60,000 icons. All icons are pre-processed and stored in `[type]IconifyJSON` format.

Data for icons is open source and is available for everyone as big package that contains everything or small packages.

You can use it in your own icon components, to export raw SVG.

See [icons section](./icons/index.md) for list of various packages and formats.

[Browse icons](https://icon-sets.iconify.design) to see what is available.

If you have designed an icon set, [consider adding it to Iconify](./articles/add-icon-set/index.md).

## API

In addition to offering open source icon data as packages, Iconify has public API.

API is used to:

- provide icon data on demand, which is used by [Iconify icon components](./icon-components/components/index.md).
- browse and search icons, which is used by [Iconify plug-ins](./design/index.md).

## Components

Having 60k+ icons is not really helpful without ability to use them in your projects.

There are various ways to use icons:

`include icon-components/list/main`

Iconify is supported by a growing community. In addition to Iconify icon components, there are now more ways to use icons, created by amazing open source developers:

`include icon-components/list/community`

Want to create your own icon component? See "Libraries" section below. Most components listed above use functions from [Iconify Utils](./tools/utils/index.md) to generate icons.

In addition to icon components, [Icon Finder](./icon-finder/index.md) is in development.

## Plugins

In addition to icon data and components, Iconify offers plug-ins for popular software for UI design:

`include design/plugins`

Plugins are based on upcoming [Icon Finder](./icon-finder/index.md) and they use [Iconify API](./api/index.md) to search for icons and to dynamically load icon data.

## Libraries

Libraries section contains documentation for various tools that are used to develop and maintain Iconify:

- [Iconify Types](./types/index.md) describes various formats used in Iconify projects.
- [Iconify Tools](./tools/tools2/index.md) is a library that can import icons from various sources, process them and export to multiple formats.
- [Iconify Utils](./tools/utils/index.md) is a set of reusable functions for working with icon sets and icon data.
