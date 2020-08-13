```yaml
title: Changing Icon Dimensions in Iconify for React
```

# Icon dimensions

This tutorial is part of [Iconify for React tutorial](./index.md).

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet or in style, just like icon fonts:

```yaml
src: implementations/common/size.jsx
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: components-size
```

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include implementations/size-one`

### Example

`include implementations/size-example`

## Alignment

`include implementations/align-header`

```yaml
src: implementations/common/alignment.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include implementations/align-behavior`

### Slice

Instead of adding space around icon to fit it in bounding box, browser can also cut parts of icon that do not fit.

To cut parts of icon, add `[attr]align="slice"` to icon:

```yaml
src: implementations/common/alignment-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Horizontal alignment {#horizontal}

When...

- icon is too wide...
- icon is too tall and slice is enabled...

...you can align icon horizontally.

To align icon, you can add one of these 3 values to `[attr]align` or `[attr]hAlign` attribute:

- `[str]left`
- `[str]center` (default)
- `[str]right`

Examples of aligning wide icon with slice disabled:

```yaml
src: implementations/common/alignment-horizontal.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: implementations/common/alignment-horizontal-slice.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

When...

- icon is too tall...
- icon is too wide and slice is enabled...

...you can align icon vertically.

To align icon, you can add one of these 3 values to `[attr]align` or `[attr]vAlign` attribute:

- `[str]top`
- `[str]middle` (default)
- `[str]bottom`

Examples of aligning tall icon with slice disabled:

```yaml
src: implementations/common/alignment-vertical.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: implementations/common/alignment-vertical-slice.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

You can add both horizontal and vertical alignment to icon.

One of alignments will have no effect. For example, if icon is too tall, horizontal alignment is ignored because icon is already aligned to both left and right sides.

```yaml
src: implementations/common/alignment-both.jsx
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
