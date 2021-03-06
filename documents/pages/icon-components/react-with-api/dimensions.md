```yaml
title: Changing Icon Dimensions in Iconify for React with API
```

# Icon dimensions

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/react-with-api/size.jsx
title: 'JSX:'
css: components/size.scss
cssTitle: 'Stylesheet:'
demo: icon-components/common/size.html
demoTitle: 'Demo:'
class: components-size
```

## Units

```yaml
include: icon-components/components/size-units
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
include: icon-components/components/size-auto
```

```jsx
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
src: icon-components/common/alignment.jsx
demo: icon-components/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

### Slice

`include icon-components/components/size-slice`

```yaml
src: icon-components/common/alignment-slice.jsx
hint: Using "align" attribute
demo: icon-components/common/alignment-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
extra:
  - src: icon-components/common/alignment-slice-alt.jsx
    hint: Using "slice" attribute
```

### Horizontal alignment {#horizontal}

```yaml
include: icon-components/components/size-halign
```

Examples of aligning wide icon with slice disabled:

```yaml
src: icon-components/common/alignment-horizontal.jsx
demo: icon-components/common/alignment-horizontal.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: icon-components/common/alignment-horizontal-slice.jsx
demo: icon-components/common/alignment-horizontal-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

```yaml
include: icon-components/components/size-valign
```

Examples of aligning tall icon with slice disabled:

```yaml
src: icon-components/common/alignment-vertical.jsx
demo: icon-components/common/alignment-vertical.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: icon-components/common/alignment-vertical-slice.jsx
demo: icon-components/common/alignment-vertical-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

```yaml
include: icon-components/components/size-align-both
```

```yaml
src: icon-components/common/alignment-both.jsx
demo: icon-components/common/alignment-both.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
