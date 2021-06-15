```yaml
title: Iconify for React
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/react@2'
    value: '${react.import}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
  iconExists: './icon-exists.md'
  listIcons: './list-icons.md'
  loadIcons: './load-icons.md'
  getIcon: './get-icon.md'
  enableCache: './enable-cache.md'
  disableCache: './disable-cache.md'
  addAPIProvider: './add-api-provider.md'
```

# Iconify for React

```yaml
include: implementations/components/intro
```

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/react@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react@2
```

## Usage

Install `[npm]@iconify/react@2` and import `[var]Icon` component from it:

```js
import { Icon } from '@iconify/react';
```

Then use `[var]Icon` component with icon name or data as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

```yaml
include: implementations/components/intro-online
```

### Offline use

```yaml
include: implementations/components/intro-offline
```

See [icon bundles for Iconify for React](../../sources/bundles/react.md) documentation.

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

`include implementations/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like assigning `[prop]onClick` event, setting the inline style, add title and so on.

## Icon

```yaml
include: implementations/components/intro-icon
```

## Color

```yaml
include: implementations/components/intro-color
```

```jsx
<Icon icon="mdi:home" style={{ color: 'red' }} />
```

For various ways to set color, see [how to change icon color in Iconify for React](./color.md).

## Dimensions and alignment

```yaml
include: implementations/components/intro-size
```

```jsx
<Icon icon="mdi:home" style={{ fontSize: '24px' }} />
```

For various ways to change icon dimensions and alignment, see [how to change icon dimensions in Iconify for React](./dimensions.md).

## Transformations

```yaml
include: implementations/components/intro-transform
```

For more details see [how to transform icon in Iconify for React](./transform.md).

## Functions {#functions}

```yaml
include: implementations/components/functions-list/header
```

### Check available icons {#getting-icons}

```yaml
include: implementations/components/functions-list/getting-icons
```

### Adding icons {#adding-icons}

```yaml
include: implementations/components/functions-list/adding-icons
```

### Helper functions {#helper}

```yaml
include: implementations/components/functions-list/helpers
```

### API functions {#api}

```yaml
include: implementations/components/functions-list/api
```

### Internal API functions {#internal}

```yaml
include: implementations/components/functions-list/internal
```
