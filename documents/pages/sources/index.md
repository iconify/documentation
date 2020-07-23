```yaml
title: Icon Sources
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Icon sources

You can use Iconify with any icons.

By default, Iconify includes over 60k free icons from various icon sets, including the most popular icon sets: Material Design Icons, FontAwesome, Bootstrap Icons, EmojiOne, Noto Emoji and many other icon sets.

You can also use Iconify with your own icons or premium icons. Iconify offers [various tools](../tools/index.md) for importing, manipulating and exporting icon sets. There are [several examples](../tools/node/examples.md) showing how to import some popular icon sets, such as [FontAwesome Pro](../tools/node/import-fa-pro.md).

## Iconify API {#api}

[Iconify API](./api/index.md) makes it easy to use thousands of icons without creating any icon bundles. Icons are loaded on demand. Loading icons on demand has massive advantages over bundles:

- No need to pre-package icons. Icons are loaded dynamically when needed. That makes it very easy to use.
- Only the icons used on web pages are loaded. That means:
  - Huge choice of icons. Icons that are not used are not loaded, so there is no limit on how many icons can be served by API.
  - Developers are no longer limited to one icon set. Developers can mix icons from Material Design Icons, FontAwesome, Unicons and many other icon sets on the same page.

By using [Iconify API](./api/index.md), you are relying on uptime of third party servers. Sometimes it is not desirable.

### Custom API

[API software is open source](https://github.com/iconify/api.js), which means you can host your own API on your servers. That allows you to have full control over servers or to host your own icon sets.

## Bundled icons

Iconify API requires the visitor to be online. Sometimes that is a bad thing, but do not worry, there are alternative solutions.

The easiest solution is to create [icon bundles](./bundles/index.md). This requires a bit of coding. Icon sets are available on NPM and Packagist, making it easy to use with Node.js and PHP build tools.

## Icon components

Most of the [Iconify components](../implementations/components/index.md) rely on [icon components](./npm/index.md) to provide icon data.

[Icon components](./npm/index.md) are very easy to use: import icon component and pass data to Iconify implementation.

Unlike [icon bundles](./bundles/index.md) that bundle several icons in one file, [icon components](./npm/index.md) use separate files for each icon.
