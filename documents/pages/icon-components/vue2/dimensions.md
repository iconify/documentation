```yaml
title: Changing Icon Dimensions in Iconify for Vue 2
```

# Icon dimensions

This tutorial is part of [Iconify for Vue 2 tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/common/size.vue
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: icon-components/common/size.html
demoTitle: 'Demo:'
class: components-size
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

## Units

```yaml
include: icon-components/components/size-units
```

```vue
<!-- Number -->
<Icon icon="mdi:home" :height="24" />
<!-- String without units -->
<Icon icon="mdi:home" height="24" />
<!-- String with units -->
<Icon icon="mdi:home" height="24px" />
<!-- String with units, font-size is 16px -->
<Icon icon="mdi:home" height="1.5em" />
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
demo: icon-components/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
replacements:
  - search: iconify/vue
    replace: iconify/vue2
```

`include icon-components/align-behavior`
