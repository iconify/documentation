```yaml
title: Changing Icon Color in Iconify for Vue
replacements:
  - code: '@iconify/vue@1'
    value: '${vue.import-vue2}'
```

# Icon color

This tutorial is part of [Iconify for Vue tutorial](./index.md).

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To change color of a monotone icon simply change text color or use `[prop]color` attribute.

```yaml
src: implementations/vue2/color.vue
title: 'Vue:'
css: components/color.scss
cssTitle: 'Stylesheet:'
demo: implementations/common/color.html
demoTitle: 'Demo:'
class: components-color
```

Color only works for icons that do not have a palette. Color in icons that do have a palette, like paintbrush icon in an example above, cannot be changed.

You can change color the same way as you would for text.

## RGBA and HSLA colors {#opacity}

`include implementations/color-rgba`

## fill and stroke

`include implementations/color-fill`
