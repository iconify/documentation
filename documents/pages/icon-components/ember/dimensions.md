```yaml
title: Changing Icon Dimensions in Iconify for Ember
```

# Icon dimensions

This tutorial is part of [Iconify for Ember tutorial](./index.md).

```yaml
include: icon-components/components/size-intro
```

```yaml
src: icon-components/ember/size.hbs
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

```hbs
<!-- Number -->
<IconifyIcon @icon='mdi:home' @height={{24}} />
<!-- String without units -->
<IconifyIcon @icon='mdi:home' @height='24' />
<!-- String with units -->
<IconifyIcon @icon='mdi:home' @height='24px' />
<!-- String with units, font-size is 16px -->
<IconifyIcon @icon='mdi:home' @height='1.5em' />
```

## Keyword "auto" {#auto}

```yaml
include: icon-components/components/size-auto
```

```vue
<IconifyIcon @icon="mdi: home;" height="auto" />
```

## Setting only width or height

In an example above, all icons only use `[prop]height`.

`include icon-components/size-one`

### Example

`include icon-components/size-example`

## Alignment

`include icon-components/align-header`

```yaml
src: icon-components/ember/alignment.hbs
demo: icon-components/common/alignment.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

`include icon-components/align-behavior`

### Slice

`include icon-components/components/size-slice`

```yaml
src: icon-components/ember/alignment-slice.hbs
hint: Using "align" attribute
demo: icon-components/common/alignment-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
extra:
  - src: icon-components/ember/alignment-slice-alt.hbs
    hint: Using "slice" attribute
```

### Horizontal alignment {#horizontal}

```yaml
include: icon-components/components/size-halign
```

Examples of aligning wide icon with slice disabled:

```yaml
src: icon-components/ember/alignment-horizontal.hbs
demo: icon-components/common/alignment-horizontal.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: icon-components/ember/alignment-horizontal-slice.hbs
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
src: icon-components/ember/alignment-vertical.hbs
demo: icon-components/common/alignment-vertical.vue
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: icon-components/ember/alignment-vertical-slice.hbs
demo: icon-components/common/alignment-vertical-slice.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

```yaml
include: icon-components/components/size-align-both
```

```yaml
src: icon-components/ember/alignment-both.hbs
demo: icon-components/common/alignment-both.html
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
