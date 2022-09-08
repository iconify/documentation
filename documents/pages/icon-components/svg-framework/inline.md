```yaml
title: Inline Icons in Iconify SVG Framework
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Inline icons

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

`include icon-components/inline-intro`

```yaml
src: icon-components/common/inline-block.html
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
- Adding `[prop]vertical-align` style with value `[num]-0.125em`.

Example:

```yaml
src: icon-components/common/inline-block2.html
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```
