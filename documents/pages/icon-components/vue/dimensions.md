```yaml
title: Changing Icon Dimensions in Iconify for Vue
```

# Icon dimensions

This tutorial is part of [Iconify for Vue tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.vue
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: components-size
```

## Units

```yaml
include: icon-components/components/size-units
```

```vue
<Icon icon="mdi:home" :height="24" />
<Icon icon="mdi:home" height="24" />
<Icon icon="mdi:home" height="24px" />
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<Icon icon="mdi:home" height="auto" />
```

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/common/alignment.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`
