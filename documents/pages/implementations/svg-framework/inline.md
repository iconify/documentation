```yaml
title: Inline Icons in Iconify SVG Framework
replacements:
  - code: '/2/2.0.0/'
    value: '/${iconify2.version.major}/${iconify2.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Inline icons

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

Icons have 2 modes: inline and block. Difference between modes is `[prop]vertical-align` that is added to inline icons.

Inline icons are aligned slightly below baseline, so they look centred compared to text, like glyph fonts.

Block icons do not have alignment, like images, which aligns them to baseline by default.

Alignment option was added to make icons look like continuation of text, behaving like glyph fonts. This should make migration from glyph fonts easier.

```yaml
src: implementations/iconify/inline-block.html
title: 'HTML:'
css: iconify/inline-block.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```

## Syntax

By default, icon is treated as block icon. It has no custom `[prop]vertical-align`, so you can add it as necessary in a stylesheet.

You can change that behaviour by:

- Adding `[str]iconify-inline` to class list (or replacing `[str]iconify` with `[str]iconify-inline`).
- Adding `[attr]data-inline` attribute.

Example:

```yaml
src: implementations/iconify/inline-block2.html
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```
