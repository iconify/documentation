```yaml
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70 icon sets'
    value: '${counters.sets} icon sets'
```

# Iconify API

Iconify API sends icon data on demand to [SVG Framework](../icon-components/svg-framework/index.md) or one of [Iconify components](../icon-components/components/index.md).

## How does it work? {#concept}

`include process/api`

## Thousands of icons

When you are using an icon font, font contains all icons, even ones you do not need. That limits number of icons that a font can have.

When you are using [Iconify icon component](../icon-components/index.md) that relies on Iconify API, icon component requests data only for icons that are used on the current page. Iconify API sends only data for icons that icon component has requested.

Because icon components do not load icons they do not need, Iconify API can host many icons. Visitors do not waste bandwidth loading icons they do not see.

### Iconify public API

By default, Iconify icon components use Iconify public API.

Iconify public API offers over 70 icon sets that include over 60k icons. All icons are from free icon sets.

To improve loading times, API is hosted on multiple servers in different parts of the world. Icons are usually loaded within 1/10 of a second. Iconify icon components also cache loaded icons in browser cache and/or browser storage, so icon data needs to be loaded only once.

### Custom API

[API is open source](https://github.com/iconify/api.js), which means you can host your own API on your servers. That allows you to have full control over servers or to host your own icon sets.

All icons available on Iconify public API are available on GitHub, which means you can easily setup your own Iconify API instead of relying on third party servers.

You can also use Iconify API software to host custom or premium icon sets.

## Documentation

Available documentation for Iconify API:

- [Hosting Iconify API](./hosting.md) explains how to setup API on your server.
- [Iconify API providers](./providers.md) explains how to use multiple API servers for more icon choices.
