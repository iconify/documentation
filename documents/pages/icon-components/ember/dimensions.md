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
