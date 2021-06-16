```yaml
title: Changing Icon Dimensions in Iconify SVG Framework
```

# Icon dimensions

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet or in style, just like icon fonts:

```yaml
src: icon-components/iconify/size-demo.html
title: 'HTML:'
css: iconify/size-demo.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: iconify2-size-demo
```

## data- attributes {#data}

You can also set dimensions by using `[attr]data-width` and `[attr]data-height` attributes. Then `[prop]font-size` will not have effect on icon, unless you set height in units that are relative to `[prop]font-size`, such as `[str]em`.

```yaml
src: icon-components/iconify/size-demo-data.html
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
```

In this example, first icon has height of `[num]24px`, second icon has height of `[num]36px` (`[num]2 * 18px`), third icon has height `[num]72px`.

## Setting only width or height

In examples above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/common/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

### Slice

Instead of adding space around icon to fit it in bounding box, browser can also cut parts of icon that do not fit.

To cut parts of icon, add `[attr]data-align="slice"` to icon:

```yaml
src: icon-components/common/alignment-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Horizontal alignment {#horizontal}

When...

- icon is too wide...
- icon is too tall and slice is enabled...

...you can align icon horizontally.

To align icon, you can add one of these 3 values to `[attr]data-align` attribute:

- `[str]left`
- `[str]center` (default)
- `[str]right`

Examples of aligning wide icon with slice disabled:

```yaml
src: icon-components/common/alignment-horizontal.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: icon-components/common/alignment-horizontal-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

When...

- icon is too tall...
- icon is too wide and slice is enabled...

...you can align icon vertically.

To align icon, you can add one of these 3 values to `[attr]data-align` attribute:

- `[str]top`
- `[str]middle` (default)
- `[str]bottom`

Examples of aligning tall icon with slice disabled:

```yaml
src: icon-components/common/alignment-vertical.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: icon-components/common/alignment-vertical-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

You can add both horizontal and vertical alignment to icon.

One of alignments will have no effect. For example, if icon is too tall, horizontal alignment is ignored because icon is already aligned to both left and right sides.

```yaml
src: icon-components/common/alignment-both.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
