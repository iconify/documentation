```yaml
title: Iconify for Vue 2
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/vue2@1'
    value: '${vue.import-vue2}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
  iconExists: './icon-exists.md'
  listIcons: './list-icons.md'
  loadIcons: './load-icons.md'
  loadIcon: './load-icon.md'
  getIcon: './get-icon.md'
  enableCache: './enable-cache.md'
  disableCache: './disable-cache.md'
  addAPIProvider: './add-api-provider.md'
  replaceIDs: './replace-ids.md'
  buildIcon: './build-icon.md'
  setFetch: './set-fetch.md'
```

# Iconify for Vue 2

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Vue
```

`include notices/vue2`

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/vue2@1
```

If you are using Yarn:

```bash
yarn add --dev @iconify/vue2@1
```

## Usage

Install `[npm]@iconify/vue2@1` and import component from it (component is exported as named export):

```js
import { Icon } from '@iconify/vue2';
```

Then in template use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

### Offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for Vue 2](../../icon-components/bundles/vue2.md) documentation.

### Nuxt.js {#ssr}

Component is compatible with Nuxt.js.

Component does not retrieve icon data until it is mounted. For server side rendering it means HTML will not include SVGs, they will be dynamically added only when hydrating DOM on client side.

If you do want to render SVGs on server side, use either [offline bundle](./offline.md) or provide icon data as parameter instead of icon name.

#### API support in Nuxt.js {#ssr-api}

If you want to use icon component's functions that load icon data from API in Nuxt.js, you need Fetch API.

```yaml
include: icon-components/functions/set-fetch/nodejs
```

How to support API in server side rendering?

```yaml
include: icon-components/functions/set-fetch/component
replacements:
  - search: '@iconify/svelte'
    replace: '@iconify/vue2'
```

```yaml
include: icon-components/functions/set-fetch/bundle
```

## Properties

You can pass any custom properties to component.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

```yaml
include: icon-components/component-optional-props
replacements:
  - search: hAlign
    replace: horizontalAlign
  - search: vAlign
    replace: verticalAlign
  - search: hFlip
    replace: horizontalFlip
  - search: vFlip
    replace: verticalFlip
```

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like setting the inline style, add title, add `[prop]onClick` event and so on.

## Icon

```yaml
include: icon-components/components/intro-icon
```

## Color

```yaml
include: icon-components/components/intro-color
```

```vue
<Icon icon="mdi:home" style="color: red" />
```

For various ways to set color, see [how to change icon color in Iconify for Vue](./color.md).

## Dimensions

```yaml
include: icon-components/components/intro-size
```

```vue
<Icon icon="mdi:home" style="font-size: 24px;" />
```

For various ways to change icon dimensions, see [how to change icon dimensions in Iconify for Vue](./dimensions.md).

## Transformations

```yaml
include: icon-components/components/intro-transform
```

For more details see [how to transform icon in Iconify for Vue](./transform.md).

## onLoad

`include icon-components/components/onload`

## Functions {#functions}

```yaml
include: icon-components/components/functions-list/header
```

### Check available icons {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

### Adding icons {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
```

### Helper functions {#helper}

```yaml
include: icon-components/components/functions-list/helpers
```

### API functions {#api}

```yaml
include: icon-components/components/functions-list/api
```

### Internal API functions {#internal}

```yaml
include: icon-components/components/functions-list/internal
```
