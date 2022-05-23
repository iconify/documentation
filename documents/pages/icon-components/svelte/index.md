```yaml
title: Iconify for Svelte
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/svelte@2'
    value: '${svelte.import}'
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

# Iconify for Svelte

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Svelte
```

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/svelte@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/svelte@2
```

## Usage

Install `[npm]@iconify/svelte@2` and import component from it (component is exported as default export):

```js
import Icon from '@iconify/svelte';
```

Then in template use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

### Offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for Svelte](../../icon-components/bundles/svelte.md) documentation.

### Sapper / SvelteKit {#sapper}

Component is compatible with Sapper and SvelteKit. Syntax is the same as with Svelte.

Component does not retrieve icon data until it is mounted. For server side rendering it means HTML will not include SVGs, they will be dynamically added only when hydrating DOM on client side.

If you do want to render SVGs on server side, use either [offline bundle](./offline.md) or provide icon data as parameter instead of icon name.

#### API support in SSR {#ssr-api}

If you want to use icon component's functions that load icon data from API in Sapper / SvelteKit, you need Fetch API.

```yaml
include: icon-components/functions/set-fetch/nodejs
```

How to support API in server side rendering?

```yaml
include: icon-components/functions/set-fetch/component
replacements:
  - search: '@iconify/svelte'
    replace: '@iconify/react'
```

```yaml
include: icon-components/functions/set-fetch/bundle
```

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

`include icon-components/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties. All other properties will be passed to generated SVG element, so you can do stuff like setting the inline style, add title and so on.

Unlike React component, Svelte component does not support events.

## Icon

```yaml
include: icon-components/components/intro-icon
```

## Color

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style="color: red" />
```

For various ways to set color, see [how to change icon color in Iconify for Svelte](./color.md).

## Dimensions

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style="font-size: 24px;" />
```

For various ways to change icon dimensions, see [how to change icon dimensions in Iconify for Svelte](./dimensions.md).

## Transformations

```yaml
include: icon-components/components/intro-transform
```

For more details see [how to transform icon in Iconify for Svelte](./transform.md).

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
