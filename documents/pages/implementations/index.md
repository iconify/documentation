```yaml
title: Iconify Implementations
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Iconify implementations

Implementations render icons.

## Source independent {#sources}

`include implementations/sources/heading`

### Implementations with API support {#with-api}

`include implementations/sources/with-api`

### Implementations without API support {#without-api}

`include implementations/sources/without-api`

## SVG framework

[Iconify SVG framework](./svg-framework/index.md) is a modern replacement for outdated icon fonts.

It offers all the advantages of icons fonts:

- Syntax is very simple and similar to icon fonts: `[html]<span class="iconify" data-icon="mdi:home"></span>`.
- You can change size and color by changing `[attr]font-size` and `[attr]color` in stylesheet.

It does not have disadvantages of icons fonts:

- Framework renders pixel-perfect SVG, not blurred glyphs.
- Only icons that are used on page are loaded. This means no bandwidth wasted on loading icons you do not need. This also made it possible to offer over 60k icons.

For more details, see [Iconify SVG framework](./svg-framework/index.md).

## Components

Iconify offers components for several popular frameworks:

`include implementations/components`

`include implementations/components-types`

## Components vs SVG Framework

`include implementations/components-vs-framework`

## Repositories

`include implementations/github`
