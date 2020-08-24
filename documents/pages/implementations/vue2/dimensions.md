```yaml
title: Changing Icon Dimensions in Iconify for Vue
replacements:
  - code: '@iconify/vue@1'
    value: '${vue.import-vue2}'
```

# Icon dimensions

This tutorial is part of [Iconify for Vue tutorial](./index.md).

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet or in style, just like icon fonts:

```yaml
src: implementations/vue2/size.vue
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: implementations/common/size.html
demoTitle: 'Demo:'
class: components-size
```

## Units

Size can be a `[type]string` with or without units or a `[type]number`. If value is a `[type]number` or `[type]string` without units, it will be treated by browser as pixels.

Examples of `[num]24px` icon:

```vue
<!-- Number -->
<IconifyIcon :icon="icons.home" :height="24" />
<!-- String without units -->
<IconifyIcon :icon="icons.home" height="24" />
<!-- String with units -->
<IconifyIcon :icon="icons.home" height="24px" />
<!-- String with units, font-size is 16px -->
<IconifyIcon :icon="icons.home" height="1.5em" />
```

## Keyword "auto" {#auto}

Special keyword `[str]auto` sets size to value from `[attr]viewBox`. This makes it easy to render an icon as it was originally designed.

It is enough to set one dimension to `[str]auto`, other dimension will be set to `[str]auto` too, unless you specify otherwise.

For example, if `[attr]viewBox="0 0 24 24"` and `[prop]height` is set to `[str]auto`, `[prop]height` will be set to `[num]24`.

```vue
<IconifyIcon :icon="icons.home" height="auto" />
```

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include implementations/size-one`

### Example

`include implementations/size-example`

## Alignment

`include implementations/align-header`

```yaml
src: implementations/vue2/alignment.vue
demo: implementations/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include implementations/align-behavior`

### Slice

Instead of adding space around icon to fit it in bounding box, browser can also cut parts of icon that do not fit.

To cut parts of icon, add `[attr]align="slice"` to icon or set `[attr]slice` to `[bool]true`:

```yaml
src: implementations/vue2/alignment-slice.vue
hint: Using "align" attribute
demo: implementations/common/alignment-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
extra:
  - src: implementations/vue2/alignment-slice-alt.vue
    hint: Using "slice" attribute
```

### Horizontal alignment {#horizontal}

When...

- icon is too wide...
- icon is too tall and slice is enabled...

...you can align icon horizontally.

To align icon, you can add one of these 3 values to `[attr]align` or `[attr]horizontalAlign` attribute:

- `[str]left`
- `[str]center` (default)
- `[str]right`

Examples of aligning wide icon with slice disabled:

```yaml
src: implementations/vue2/alignment-horizontal.vue
demo: implementations/common/alignment-horizontal.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: implementations/vue2/alignment-horizontal-slice.vue
demo: implementations/common/alignment-horizontal-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

When...

- icon is too tall...
- icon is too wide and slice is enabled...

...you can align icon vertically.

To align icon, you can add one of these 3 values to `[attr]align` or `[attr]verticalAlign` attribute:

- `[str]top`
- `[str]middle` (default)
- `[str]bottom`

Examples of aligning tall icon with slice disabled:

```yaml
src: implementations/vue2/alignment-vertical.vue
demo: implementations/common/alignment-vertical.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: implementations/vue2/alignment-vertical-slice.vue
demo: implementations/common/alignment-vertical-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

You can add both horizontal and vertical alignment to icon.

One of alignments will have no effect. For example, if icon is too tall, horizontal alignment is ignored because icon is already aligned to both left and right sides.

```yaml
src: implementations/vue2/alignment-both.vue
demo: implementations/common/alignment-both.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

## Property names

In other components, properties for alignment are `[attr]hAlign` and `[attr]vAlign`. Vue has special treatment for properties that start with `[attr]v-`, so `[attr]vAlign` (same applies to `[attr]vFlip` attribute) attribute is not available without using tricky syntax.

Because of that, Vue component uses longer property names: `[attr]verticalAlign` instead of `[attr]vAlign` and `[attr]horizontalAlign` instead of `[attr]hAlign` for consistency.
