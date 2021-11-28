```yaml
title: Available Icons
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
  - code: '80 open source'
    value: '${counters.sets} open source'
types:
  IconifyJSON: '../types/iconify-json.md'
```

# Available icons

Iconify is a universal framework that can work with any icon set.

Iconify offers more than 80 open source icon sets with over 60,000 icons. All icons are validated, cleaned up, optimised and ready for use. Few examples:

`include icons/examples`

Then there are several sets of emojis:

`include icons/examples-emoji`

and many other icon sets. See [icon sets list](https://icon-sets.iconify.design/).

## One standard

There is no standard for designing or publishing icons. Each icon set is different. Some use stroke for colors, some use fill, some use hardcoded palette. Usually icons contain a lot of unnecessary code. Every icon set has its own way of using icons. Iconify attempts to streamline that, by parsing icons and converting them to the same easy to use format.

All icons available with Iconify are pre-processed:

- Icons without hardcoded palette use `[str]currentColor` for color. That makes it easy to style all icons, regardless of what method it uses, by changing `[prop]color` in style.
- All icons are cleaned up and optimised, so they do not contain unnecessary code.
- All icons are validated to make sure there are no scripts, raster images or fonts.
- Icons do not set any attributes on `[tag]svg` element, making it easy to generate `[tag]svg` for all icons.
- All icon names are streamlined to use similar naming scheme. Allowed characters are `[str]a-z`, numbers and `[str]-`.

All icon sets are stored in `[type]IconifyJSON` format.

## Sources

All icon sets are stored in one [public GitHub repository](https://github.com/iconify/collections-json).

That repository is main source of icon sets. There are other ways to get icon data, all are generated from that repository:

### Packages

Contents of GitHub repository are also available as:

- NPM package `[npm]@iconify/json` for Node.js developers.
- Packagist package `[packagist]iconify/json` for PHP developers.

See [full icon sets packages](./all.md).

### API

[Iconify API](../api/index.md) provides:

- Easy access to data for few icons. It is used by [Iconify icon components](../icon-components/index.md) to load icon data on demand.
- Search engine for icons. It is used by [icon finder](../icon-finder/index.md) and [various plugins](../design/index.md).

API sends data for icons on demand. Loading icons on demand has big advantages over other methods:

- No need to pre-package icons. Icons are loaded dynamically when needed. That makes it very easy to use.
- Only the icons used on web pages are loaded. No need to waste bandwidth on loading icons that are not displayed.

Disadvantage of using API is API must be reachable. This means your applications must have access to internet. If you need to use icons offline, use one of other methods.

By default, using API means relying on third party service. However, [API software is open source](https://github.com/iconify/api.js), which means you can host your own API on your servers. That allows you to have full control over servers instead of relying on third party service.

### Individual icon sets {#json}

Each icon set is also published as a separate NPM package `[npm]@iconify-json/{prefix}` (where `[str]{prefix}` is icon set prefix), where an entire icon set is stored in one file in `[type]IconifyJSON` format.

See [split icon sets packages](./json.md).

### Individual icons {#icons}

There are also packages for each icon set `[npm]@iconify-icons/{prefix}`, where each icon is stored in a separate file `[npm]@iconify-icons/{prefix}/{name}` (where `[str]{prefix}` is icon set prefix, `[str]{name}` is icon name) in `[type]IconifyIcon` format.

This makes it easy to bundle data for individual icons.

See [individual icon packages](./icons.md).

### Icon set list {#collections}

Additionally, list of available icon sets is available as NPM package `[npm]@iconify/collections`.

See [icon sets list](./collections.md).

## What to use? {#usage}

With so many options, what to use?

If you want to load icon data on demand, best option is to use [Iconify API](../api/index.md).

If you are using data to generate on server side or when bundling your application, best choice is [full icon sets packages](./all.md). However, if you are using only few icon sets, using [split icon sets packages](./json.md) might be a better idea.

If you need data for only few icons without retrieving it from API, use [individual icon packages](./icons.md).

## Bundled icons

It is also worth mentioning [icon bundles](../icon-components/bundles/index.md).

Icon bundles are sets of icon data used by icon components, similar to individual icon sets mentioned above. When generating icon bundle, you can filter icons you want to use and bundle them with icon component.

This requires a bit of coding.

## Custom icons

You can use Iconify with any icons.

All default icon sets are open source, but you are not limited to open source icons. You can use Iconify with custom icons, with premium icon sets.

Iconify offers [various tools](../tools/index.md) for importing, manipulating and exporting icon sets. You can generate custom icon packages from [sets of SVG files](../tools/tools2/import/directory.md), [from Figma documents](../tools/tools2/import/figma/index.md).

There are [several examples](../tools/tools2/examples/index.md) showing how to import some popular icon sets, such as [FontAwesome Pro](../tools/tools2/examples/import-fa-pro.md).
