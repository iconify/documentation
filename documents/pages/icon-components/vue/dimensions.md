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
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

### Slice

`include icon-components/components/size-slice`

```yaml
src: icon-components/common/alignment-slice.vue
hint: Using "align" attribute
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
extra:
  - src: icon-components/common/alignment-slice-alt.vue
    hint: Using "slice" attribute
```

### Horizontal alignment {#horizontal}

```yaml
include: icon-components/components/size-halign
replacements:
  - search: hAlign
    replace: horizontalAlign
```

Examples of aligning wide icon with slice disabled:

```yaml
src: icon-components/common/alignment-horizontal.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: icon-components/common/alignment-horizontal-slice.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

```yaml
include: icon-components/components/size-valign
replacements:
  - search: vAlign
    replace: verticalAlign
```

Examples of aligning tall icon with slice disabled:

```yaml
src: icon-components/common/alignment-vertical.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: icon-components/common/alignment-vertical-slice.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

```yaml
include: icon-components/components/size-align-both
```

```yaml
src: icon-components/common/alignment-both.vue
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

## Property names

In other components, properties for alignment are `[attr]hAlign` and `[attr]vAlign`. Vue has special treatment for properties that start with `[attr]v-`, so `[attr]vAlign` (same applies to `[attr]vFlip` attribute) attribute is not available without using tricky syntax.

Because of that, Vue component uses longer property names: `[attr]verticalAlign` instead of `[attr]vAlign` and `[attr]horizontalAlign` instead of `[attr]hAlign` for consistency.
