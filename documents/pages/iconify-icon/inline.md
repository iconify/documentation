```yaml
title: Inline Icons in Iconify Icon Web Component
```

# Inline icons

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

`include icon-components/inline-intro`

```yaml
src: icon-components/icon/inline-block.html
title: 'HTML:'
css: iconify/inline-block.scss
cssTitle: 'Stylesheet:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-inline-block
```

## Syntax

By default, icon is treated as block icon. It has no custom `[prop]vertical-align`, so you can add it as necessary in a stylesheet.

You can change that behaviour by:

- Adding `[attr]inline` attribute.
- Adding `[prop]vertical-align` style with value `[num]-0.125em`.

Example:

```yaml
src: icon-components/icon/inline-block2.html
title: 'HTML:'
demo: true
demoFirst: false
demoTitle: 'Demo:'
class: iconify-inline-block
```
