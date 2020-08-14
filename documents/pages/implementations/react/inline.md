```yaml
title: Inline Icons in Iconify for React
```

# Inline icons

This tutorial is part of [Iconify for React tutorial](./index.md).

`include implementations/inline-intro`

```yaml
src: implementations/common/inline-block.jsx
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

- Swapping `[var]Icon` component with `[var]InlineIcon`.
- Adding `[attr]inline` attribute.
- Adding `[prop]vertical-align` style with value `[num]-0.125em`.

Example:

```yaml
src: implementations/common/inline-block2.jsx
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```
