```yaml
title: Iconify for Svelte
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for Svelte

In addition to [SVG framework](../svg-framework/index.md), Iconify offers native components for several popular UI frameworks. Iconify for Svelte is one of such components.

Yet another icon component? What are advantages over other icon components?

- One syntax for over 60,000 icons from 80+ icon sets.
- Renders SVG. Many components simply render icon fonts, which look ugly. Iconify renders pixel perfect SVG.

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/svelte
```

If you are using Yarn:

```bash
yarn add --dev @iconify/svelte
```

This package does not include icons. Icons are split into separate packages that available at NPM. See below.

## Usage

Iconify for Svelte is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

Install `[npm]@iconify/svelte` and packages for selected icon sets. Import component from `[npm]@iconify/svelte` and icon data for icon you want to use:

```js
// Import component
import IconifyIcon from '@iconify/svelte';

// Import icon data
// You can import icon with any name instead of 'home'
// because exports are not named
import home from '@iconify-icons/mdi-light/home';
```

Then use `[var]IconifyIcon` component with imported icon's data as `[prop]icon` parameter:

```jsx
<IconifyIcon icon={home} />
```

## Sapper

Component is compatible with Sapper. Syntax is the same as with Svelte.

## Properties

You can pass any custom properties to component.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon data.

`include implementations/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties. All other properties will be passed to generated SVG element, so you can do stuff like setting the inline style, add title and so on.

In Svelte it is not possible to pass events to child components, so component does not handle any events. If you need to make an icon clickable, wrap it in a button or a link and assign an event to that button or link.

## Icon

`include implementations/icon-packages`

Examples:

- `[icon]mdi-light:login` from [Material Design Light Icons](https://iconify.design/icon-sets/mdi-light/) can be imported from `[npm]@iconify-icons/mdi-light/login`.
- `[icon]ri:login-circle-fill` from [Remix Icons](https://iconify.design/icon-sets/ri/) can be imported from `[npm]@iconify-icons/ri/login-circle-fill`.
- `[icon]tabler:barcode` from [Tabler Icons](https://iconify.design/icon-sets/tabler/) can be imported from `[npm]@iconify-icons/tabler/barcode`.

...and so on.

Variable name in import statement is irrelevant because all exports are default exports.

### CommonJS icon modules {#commonjs}

`include implementations/icon-packages-exports`

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to a monotone icon simply change text color.

```jsx
<IconifyIcon icon={home} style="color: red" />
```

For various ways to set color, see [how to change icon color in Iconify for Svelte](./color.md).

## Dimensions and alignment

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio. This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet, just like icon fonts.

There are several ways to change icon dimensions:

- Setting `[prop]font-size` in style.
- Setting `[prop]width` and/or `[prop]height` property.

Values for `[prop]width` and `[prop]height` can be numbers or strings.

If you set only one dimension, another dimension will be calculated using the icon's width to height ratio. For example, if the icon size is 16 x 24, you set the height to 48, the width will be set to 32. Calculations work not only with numbers, but also with string values.

```jsx
<Icon icon={home} style="font-size: 24px;" />
```

For various ways to change icon dimensions and alignment, see [how to change icon dimensions in Iconify for Svelte](./dimensions.md).

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

These are not CSS transformations, transformations are applied inside SVG.

For more details see [how to transform icon in Iconify for Svelte](./transform.md).
