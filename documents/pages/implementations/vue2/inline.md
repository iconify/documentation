```yaml
title: Inline Icons in Iconify for Vue
replacements:
  - code: '@iconify/vue@1'
    value: '${vue.import-vue2}'
```

# Inline icons

This tutorial is part of [Iconify for Vue tutorial](./index.md).

`include implementations/inline-intro`

```yaml
src: implementations/vue2/inline-block.vue
title: 'HTML:'
css: iconify/inline-block.scss
cssTitle: 'Stylesheet:'
demo: implementations/common/inline-block.html
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
src: implementations/vue2/inline-block2.vue
title: 'HTML:'
demo: implementations/common/inline-block2.html
demoTitle: 'Demo:'
class: iconify-inline-block
```
