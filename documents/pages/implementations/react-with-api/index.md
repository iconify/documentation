```yaml
title: Iconify for React with API
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
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

# Iconify for React with API

In addition to [SVG framework](../svg-framework/index.md), Iconify offers native components for several popular UI frameworks. Iconify for React is one of such components.

Yet another icon component? What are advantages over other icon components?

- One syntax for over 60,000 icons from 80+ icon sets.
- Renders SVG. Many components simply render icon fonts, which look ugly. Iconify renders pixel perfect SVG.
- Loads icons on demand. No need to bundle icons, component will automatically load icon data for icons that you use from Iconify API.

## Component variations

There are two variations of Iconify for React:

- [Iconify for React](../react/index.md).
- Iconify for React with API (this documentation).

What is the difference?

### Iconify for React

[Iconify for React](../react/index.md) is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

```js
import { Icon } from '@iconify/react';
import home from '@iconify/icons-mdi-light/home';
```

```jsx
<Icon icon={home} />
```

### Iconify for React with API

Iconify for React with API is a more advanced component. It works similar to [SVG framework](../svg-framework/index.md). You do not need to provide icon data, you can reference icon by name and component will automatically retrieve icon data from Iconify API.

```js
import { Icon } from '@iconify/react-with-api';
```

```jsx
<Icon icon="mdi-light:home" />
```

Downside of such component is it requires internet access to retrieve icon data. You can provide icon data using [icon bundles](../../sources/bundles/index.md) to allow it to work offline.

## Installation

This documentation is for advanced component. [Click here](../react/index.md) for documentation for basic component.

If you are using NPM:

```bash
npm install --save-dev @iconify/react-with-api
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react-with-api
```

## Usage

Install `[npm]@iconify/react-with-api` and import `[var]Icon` component from it:

```js
import { Icon } from '@iconify/react-with-api';
```

Then use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

Component will automatically retrieve data for `[icon]mdi-light:home` from Iconify API and render it. There are over 60,000 icons available on Iconify API from various free and open source icon sets, including all the most popular icon sets.

### Offline use

Retrieving icon data from Iconify API requires visitor to be online. What if you want to use component offline or on local network?

There are several options:

- You can create [icon bundles](../../sources/bundles/index.md) for icons that you use.
- You can install local copy of [Iconify API](../../sources/api/index.md) instead of relying on Iconify public API servers.
- You can also use [icon components](../../sources/npm/index.md), similar to [basic React component](../react/index.md).

See [icon bundles for Iconify for React](../../sources/bundles/react.md) documentation.

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

`include implementations/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like assigning `[prop]onClick` event, setting the inline style, add title and so on.

## Icon

Icon name syntax is `[attr]icon="prefix:icon-name"` or `[attr]icon="prefix-icon-name"`. Second syntax can be used if prefix does not contain `[str]"-"`, it is kept for compatibility with icon fonts.

For example, `[attr]icon="fa-arrow-left"` and `[attr]icon="fa:arrow-left"` are identical (both have a prefix `[str]"fa"`), but `[attr]icon="flat-color-icons:voice-presentation"` and `[attr]icon="flat-color-icons-voice-presentation"` are not the same (first has a prefix `[str]"flat-color-icons"`, second has a prefix `[str]"flat"` that does not exist).

There are over 60,000 icons available from 80+ icon sets. [Browse icons sets](https://iconify.design/icon-sets/) to see all available icons.

## Inline icon

There are two components in Iconify for React: `[var]Icon` and `[var]InlineIcon`.

They are identical, except for one thing: `[var]InlineIcon` adds `[prop]vertical-align` style to `[tag]svg`. This makes icon behave like an icon font.

See [inline icons tutorial](./inline.md) for details.

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to a monotone icon simply change text color.

```jsx
<Icon icon="mdi:home" style={{ color: 'red' }} />
```

For various ways to set color, see [how to change icon color in Iconify for React](./color.md).

## Dimensions and alignment

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio. This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet, just like icon fonts.

There are several ways to change icon dimensions:

- Setting `[prop]font-size` in style (or `[prop]fontSize` if you are using inline style).
- Setting `[prop]width` and/or `[prop]height` property.

Values for `[prop]width` and `[prop]height` can be numbers or strings.

If you set only one dimension, another dimension will be calculated using the icon's width to height ratio. For example, if the icon size is 16 x 24, you set the height to 48, the width will be set to 32. Calculations work not only with numbers, but also with string values.

```jsx
<Icon icon="mdi:home" style={{ fontSize: '24px' }} />
```

For various ways to change icon dimensions and alignment, see [how to change icon dimensions in Iconify for React](./dimensions.md).

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

These are not CSS transformations, transformations are applied inside SVG.

For more details see [how to transform icon in Iconify for React](./transform.md).

## Functions {#functions}

This component offers functions, which developers can use to control icons.

Functions are split in several groups (click function name to see more details and examples):

### Check available icons {#getting-icons}

There are several functions in this section:

- `[func]iconExists(name)`. Checks if an icon exists, returns `[type]boolean`.
- `[func]listIcons()`. Lists available icons, returns `[type]string[]`.
- `[func]getIcon(name)`. Returns icon data, returns `[type]IconifyIcon` object.

### Adding icons {#adding-icons}

Functions for adding icons to component:

- `[func]addIcon()`. Adds one icon.
- `[func]addCollection()`. Adds an icon set.

Note: icons added to component with these functions are not stored in cache. Component caches only icons retrieved from API.

### Helper functions {#helper}

- `[func]replaceIDs(html)`. Randomizes IDs in generated string. This should be used when rendering icon based on data returned by `[func]getIcon()` to make sure elements inside each icon have unique IDs.
- `[func]calculateSize()`. Calculates icon size. It is used to calculate `[attr]width` if only `[attr]height` is set and vice versa.

### API functions {#api}

- `[func]loadIcons(icons, callback?)`. Loads icons from API, calls optional callback when either all or part of icons have been loaded.
- `[func]enableCache()`. Enables caching in `[prop]localStorage` and `[prop]sessionStorage`.
- `[func]disableCache()`. Disables caching in `[prop]localStorage` and `[prop]sessionStorage`.
- `[func]addAPIProvider()`. Adds custom API provider. This is experimental function. API provider functionality is in development.

### Internal API functions {#internal}

There are several internal API functions that are exposed. They are intended to be used by implementations that want more control over component, such as Iconify Icon Finder. Use them carefully.

All internal API functions are exposed as properties of `[var]_api` object:

- `[func]getAPI()`. Returns internal API module.
- `[func]getAPIConfig()`. Returns API configuration.
- `[func]setAPIModule(provider)`. Sets API module for provider. This is experimental function intended for custom API providers. API provider functionality is in development.
