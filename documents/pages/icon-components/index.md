```yaml
title: Icon Components
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Icon components

Icon components render icons.

## Source independent {#sources}

`include icon-components/sources/heading`

Icon components do not include data for icons.

### API support {#with-api}

`include icon-components/sources/with-api`

### Usage without API {#without-api}

`include icon-components/sources/without-api`

## SVG framework

[Iconify SVG framework](./svg-framework/index.md) is a modern replacement for outdated icon fonts.

It offers all the advantages of icons fonts:

- Syntax is very simple and similar to icon fonts: `[html]<span class="iconify" data-icon="mdi:home"></span>`.
- You can change size and color by changing `[attr]font-size` and `[attr]color` in stylesheet.

It does not have disadvantages of icons fonts:

- Framework renders pixel-perfect SVG, not blurred glyphs.
- Only icons that are used on page are loaded. This means no bandwidth wasted on loading icons you do not need. This also made it possible to offer over 60k icons.

For more details, see [Iconify SVG framework](./svg-framework/index.md).

## Component frameworks

Iconify offers components for several popular component frameworks:

`include icon-components/components`

All icon components support loading icon data on demand from [Iconify API](../api/index.md).

If you want to use component offline, all components also support various options to render icons without API: [icon bundles](../icon-components/bundles/index.md), [icon components](../icons/icons.md).

## Components vs SVG Framework

`include icon-components/components-vs-framework`

## Repositories

`include icon-components/github`
