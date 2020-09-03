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
```

# Iconify for React

In addition to [SVG framework](../svg-framework/index.md), Iconify offers native components for several popular UI frameworks. Iconify for React is one of such components.

Yet another icon component? What are advantages over other icon components?

- One syntax for over 60,000 icons from 80+ icon sets.
- Renders SVG. Many components simply render icon fonts, which look ugly. Iconify renders pixel perfect SVG.

## Component variations

There are two variations of Iconify for React:

- Iconify for React (this documentation).
- [Iconify for React with API](../react-with-api/index.md).

What is the difference?

### Iconify for React

Iconify for React is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

```js
// Import component
import { Icon } from '@iconify/react';

// Import icon data
// You can import icon with any name instead of 'home'
// because exports are not named
import home from '@iconify-icons/mdi-light/home';
```

```jsx
<Icon icon={home} />
```

### Iconify for React with API

[Iconify for React with API](../react-with-api/index.md) is a more advanced component. It works similar to [SVG framework](../svg-framework/index.md). You do not need to provide icon data, you can reference icon by name and component will automatically retrieve icon data from Iconify API.

```js
import { Icon } from '@iconify/react';
```

```jsx
<Icon icon="mdi-light:home" />
```

Downside of such component is it requires internet access to retrieve icon data. You can provide icon data using [icon bundles](../../sources/bundles/index.md) to allow it to work offline.

## Installation

This documentation is for basic component. [Click here](../react-with-api/index.md) for documentation for advanced component.

If you are using NPM:

```bash
npm install --save-dev @iconify/react@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react@2
```

This package does not include icons. Icons are split into separate packages that available at NPM. See below.

## Usage

Install `[npm]@iconify/react@2` and packages for selected icon sets. Import `[var]Icon` from `[npm]@iconify/react` and icon data for icon you want to use:

```js
import { Icon } from '@iconify/react';
import home from '@iconify-icons/mdi-light/home';
```

Then use `[var]Icon` component with icon data as `[prop]icon` parameter:

```jsx
<Icon icon={home} />
```

### String syntax

Version 2 of component supports string syntax. String syntax passes icon name to the component.

With this method the icon needs to be added only once. That means if you have multiple components using `[icon]home` icon, you can add it only in your main component. This makes it easy to swap icons for an entire application.

```jsx
import React from 'react';
import { Icon, addIcon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi-light/home';

addIcon('home', homeIcon);

export function MyComponent() {
	return (
		<div>
			<Icon icon="home" />
		</div>
	);
}
```

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon data or name of icon registered with `[func]addIcon()`.

`include implementations/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like assigning `[prop]onClick` event, setting the inline style, add title and so on.

## Icon

`include implementations/icon-packages`

Examples:

- `[icon]mdi:login-variant` from [Material Design Icons](https://iconify.design/icon-sets/mdi/) can be imported from `[npm]@iconify-icons/mdi/login-variant`.
- `[icon]bi:chat-quote` from [Bootstrap Icons](https://iconify.design/icon-sets/bi/) can be imported from `[npm]@iconify-icons/bi/chat-quote`.
- `[icon]tabler:info-circle` from [Tabler Icons](https://iconify.design/icon-sets/tabler/) can be imported from `[npm]@iconify-icons/tabler/info-circle`.

...and so on.

Variable name in import statement is irrelevant because all exports are default exports.

### CommonJS icon modules {#commonjs}

`include implementations/icon-packages-exports`

## Inline icon

There are two components in Iconify for React: `[var]Icon` and `[var]InlineIcon`.

They are identical, except for one thing: `[var]InlineIcon` adds `[prop]vertical-align` style to `[tag]svg`. This makes icon behave like an icon font.

See [inline icons tutorial](./inline.md) for details.

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to a monotone icon simply change text color.

```jsx
<Icon icon={home} style={{ color: 'red' }} />
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
<Icon icon={home} style={{ fontSize: '24px' }} />
```

For various ways to change icon dimensions and alignment, see [how to change icon dimensions in Iconify for React](./dimensions.md).

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

These are not CSS transformations, transformations are applied inside SVG.

For more details see [how to transform icon in Iconify for React](./transform.md).
