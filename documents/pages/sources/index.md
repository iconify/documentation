```yaml
title: Icon Sources
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Icon sources

To display an icon, [Iconify icon component](../icon-components/index.md) must have data for that icon.

There are multiple ways to provide data for icons, each has its advantages and disadvantages.

## Iconify API {#api}

[Iconify API](./api/index.md) is the main source of icons.

API sends data for icons on demand. Loading icons on demand has massive advantages over other methods:

- No need to pre-package icons. Icons are loaded dynamically when needed. That makes it very easy to use.
- Only the icons used on web pages are loaded. No need to waste bandwidth on loading icons that are not displayed.
- Tools can be developed that allow users choose any icon available on Iconify API. There are over 60k icons to choose from with public Iconify API and you can add [custom API providers](./api/providers.md) for even more icons.

Disadvantage of using API is API must be reachable. This means your applications must have access to internet. If you need to use icons offline, use one of other methods.

By default, using API means relying on third party service. However, [API software is open source](https://github.com/iconify/api.js), which means you can host your own API on your servers. That allows you to have full control over servers instead of relying on third party service.

## Bundled icons

[Icon bundles](./bundles/index.md) are sets of icon data. You can build icon bundles for icons that are used in your application, making icon data available offline.

This requires a bit of coding. Icon sets are available on NPM and Packagist, making it easy to use with Node.js and PHP build tools.

## Icon packages

[Icon packages](./npm/index.md) are similar to bundles, but provide icon data for one icon at a time.

Icon packages are very easy to use: import icon data from icon package and pass data to Iconify icon component.

## Available Icons

All sources listed above are not tied to only icons available with Iconify.

You can use Iconify with any icons. Iconify offers [various tools](../tools/index.md) for importing, manipulating and exporting icon sets. There are [several examples](../tools/tools2/examples/index.md) showing how to import some popular icon sets, such as [FontAwesome Pro](../tools/tools2/examples/import-fa-pro.md).
