```yaml
title: Inline Icons in Iconify for Vue
replacements:
  - code: '@iconify/vue@2'
    value: '${vue.import-vue3}'
```

# Inline icons

This tutorial is part of [Iconify for Vue tutorial](./index.md).

`include icon-components/inline-intro`

```yaml
src: icon-components/common/inline-block.vue
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
src: icon-components/common/inline-block2.vue
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
class: iconify-inline-block
```
