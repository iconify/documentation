```yaml
title: Changing Icon Dimensions in Iconify for React with API
```

# Icon dimensions

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API tutorial](./index.md).

```yaml
include: implementations/components/size-intro
```

```yaml
src: implementations/react-with-api/size.jsx
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: implementations/common/size.html
demoTitle: 'Demo:'
class: components-size
```

## Units

```yaml
include: implementations/components/size-units
```

```jsx
// Number
<Icon icon="mdi:home" height={24} />
// String without units
<Icon icon="mdi:home" height="24" />
// String with units
<Icon icon="mdi:home" height="24px" />
// String with units, font-size is 16px
<Icon icon="mdi:home" height="1.5em" />
```

## Keyword "auto" {#auto}

```yaml
include: implementations/components/size-auto
```

```jsx
<Icon icon="mdi:home" height="auto" />
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
demo: implementations/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include implementations/align-behavior`

### Slice

`include implementations/components/size-slice`

```yaml
src: implementations/common/alignment-slice.jsx
hint: Using "align" attribute
demo: implementations/common/alignment-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
extra:
  - src: implementations/common/alignment-slice-alt.jsx
    hint: Using "slice" attribute
```

### Horizontal alignment {#horizontal}

```yaml
include: implementations/components/size-halign
```

Examples of aligning wide icon with slice disabled:

```yaml
src: implementations/common/alignment-horizontal.jsx
demo: implementations/common/alignment-horizontal.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: implementations/common/alignment-horizontal-slice.jsx
demo: implementations/common/alignment-horizontal-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

```yaml
include: implementations/components/size-valign
```

Examples of aligning tall icon with slice disabled:

```yaml
src: implementations/common/alignment-vertical.jsx
demo: implementations/common/alignment-vertical.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: implementations/common/alignment-vertical-slice.jsx
demo: implementations/common/alignment-vertical-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

```yaml
include: implementations/components/size-align-both
```

```yaml
src: implementations/common/alignment-both.jsx
demo: implementations/common/alignment-both.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
