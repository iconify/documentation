```yaml
title: Icon Bundles for Iconify for Vue
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify for Vue

```yaml
include: sources/bundles/component-intro
replacements:
  - search: Iconify for React
    replace: Iconify for Vue
  - search: '/react/'
    replace: '/vue/'
```

## Generating data

```yaml
include: sources/bundles/component-intro2
replacements:
  - search: Iconify for React
    replace: Iconify for Vue
  - search: '/react/'
    replace: '/vue/'
```

## Difference with SVG framework {#difference}

```yaml
include: sources/bundles/component-differences
replacements:
  - search: React
    replace: Vue
```

## Bundle example

```yaml
include: sources/bundles/component-bundle
replacements:
  - search: iconify/react
    replace: iconify/vue
```

Example above is for Vue 3 component.

Vue 2 component doesn't use named exports, so code is a bit different: first line should be replaced with this:

```js
import IconifyIcon from '@iconify/react';

const addCollection = IconifyIcon.addCollection;
```

## How to automate build process? {#automation}

```yaml
include: sources/bundles/automation
```
