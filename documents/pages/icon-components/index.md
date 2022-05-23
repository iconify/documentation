```yaml
title: Iconify Icon Components
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Iconify icon components

Icon components render icons.

Components are available for multiple frameworks.

## Source independent {#sources}

`include icon-components/sources/heading`

Icon components do not include data for icons.

### API support {#with-api}

`include icon-components/sources/with-api`

### Usage without API {#without-api}

`include icon-components/sources/without-api`

## SVG framework

[Iconify SVG framework](./svg-framework/index.md) was designed as replacement for outdated icon fonts.

It offers all the advantages of icons fonts:

- Syntax is very simple and similar to icon fonts: `[html]<span class="iconify" data-icon="mdi:home"></span>`.
- You can change size and color by changing `[attr]font-size` and `[attr]color` in stylesheet.

It does not have disadvantages of icons fonts:

- SVG framework renders pixel-perfect SVG, not blurred glyphs.
- Only icons that are used on page are loaded. This means no bandwidth wasted on loading icons you do not need. This also made it possible to offer over 60k icons.

For more details, see [Iconify SVG framework](./svg-framework/index.md).

`include notices/web-component/svg-framework`

## Component frameworks

Iconify offers icon components for several popular component frameworks:

`include icon-components/components`

If you are using framework not listed above, you can use [web component](../iconify-icon/index.md) that works with all modern frameworks. Web component is also preferred if you are using server side rendering.

All icon components support loading icon data on demand from [Iconify API](../api/index.md).

If you want to use component offline, all components also support various options to render icons without API: [icon bundles](../icon-components/bundles/index.md), [icon components](../icons/icons.md).

## Components vs SVG Framework

`include icon-components/components-vs-framework`

## Repositories

`include icon-components/github`
