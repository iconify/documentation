```yaml
title: Iconify for Vue
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/vue@2'
    value: '${vue.import-vue3}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for Vue

In addition to [SVG framework](../svg-framework/index.md), Iconify offers native components for several popular UI frameworks. Iconify for Vue is one of such components.

Yet another icon component? What are advantages over other icon components?

- One syntax for over 60,000 icons from 80+ icon sets.
- Renders SVG. Many components simply render icon fonts, which look ugly. Iconify renders pixel perfect SVG.

`include notices/vue3`

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/vue@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/vue@2
```

This package does not include icons. Icons are split into separate packages that available at NPM. See below.

## Usage

Iconify for Vue is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

Install `[npm]@iconify/vue@2` and packages for selected icon sets. Import component from `[npm]@iconify/vue@2` and icon data for icon you want to use:

```bash
# Installs component and Material Design Light icons
npm install --save-dev @iconify/vue@2 @iconify-icons/mdi-light
```

Then use `[var]Icon` component with icon data as `[prop]icon` parameter:

```vue
<template>
	<!-- icon points to variable returned by "data()" method -->
	<Icon :icon="icons.home" />
</template>

<script>
// Import component
import { Icon } from '@iconify/vue';

// Import icon data.
// You can import icon with any name instead of 'homeIcon'
// because exports are not named
import homeIcon from '@iconify-icons/mdi-light/home';

export default {
	components: {
		// Add Icon to list of used components
		Icon,
	},
	data() {
		return {
			// Returns icons data that can be used in template
			icons: {
				// Assign homeIcon to icons.home
				home: homeIcon,
			},
		};
	},
};
</script>
```

### String syntax

Using icon data in Vue requires creating `[func]data()` method in your component.

However, there is an easier way: assigning a name to icon and calling icon by name.

As a bonus, with this method the icon needs to be added only once. That means if you have multiple components using `[icon]home` icon, you can add it only in your main component. This makes it easy to swap icons for an entire application.

```vue
<template>
	<!-- icon value is the same as first parameter in addIcon() -->
	<Icon icon="home" />
</template>

<script>
// Import component and addIcon function
import { Icon, addIcon } from '@iconify/vue';

// Import icon data.
// You can import icon with any name instead of 'homeIconData'
// because exports are not named
import homeIconData from '@iconify-icons/mdi-light/home';

// Assign name 'home' to icon
addIcon('home', homeIconData);

export default {
	components: {
		// Add Icon to list of used components
		Icon,
	},
};
</script>
```

## Properties

You can pass any custom properties to component.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon data.

`include implementations/component-optional-props-vue`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like setting the inline style, add title, add `[prop]onClick` event and so on.

## Icon

`include implementations/icon-packages`

Examples:

- `[icon]mdi:image-edit` from [Material Design Icons](https://iconify.design/icon-sets/mdi/) can be imported from `[npm]@iconify-icons/mdi/image-edit`.
- `[icon]la:envelope-open` from [Line Awesome](https://iconify.design/icon-sets/la/) can be imported from `[npm]@iconify-icons/la/envelope-open`.
- `[icon]tabler:shield-check` from [Tabler Icons](https://iconify.design/icon-sets/tabler/) can be imported from `[npm]@iconify-icons/tabler/shield-check`.

...and so on.

Variable name in import statement is irrelevant because all exports are default exports.

### CommonJS icon modules {#commonjs}

`include implementations/icon-packages-exports`

## Inline icon

There are two components in Iconify for Vue: `[var]Icon` and `[var]InlineIcon`.

They are identical, except for one thing: `[var]InlineIcon` adds `[prop]vertical-align` style to `[tag]svg`. This makes icon behave like an icon font.

See [inline icons tutorial](./inline.md) for details.

## Color

You can only change color of monotone icons. Some icons, such as emoji, have a hardcoded palette that cannot be changed.

To add color to a monotone icon simply change text color.

```vue
<Icon icon="home" style="color: red" />
```

For various ways to set color, see [how to change icon color in Iconify for Vue](./color.md).

## Dimensions and alignment

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio. This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet, just like icon fonts.

There are several ways to change icon dimensions:

- Setting `[prop]font-size` in style.
- Setting `[prop]width` and/or `[prop]height` property.

Values for `[prop]width` and `[prop]height` can be numbers or strings.

If you set only one dimension, another dimension will be calculated using the icon's width to height ratio. For example, if the icon size is 16 x 24, you set the height to 48, the width will be set to 32. Calculations work not only with numbers, but also with string values.

```vue
<Icon icon="home" style="font-size: 24px;" />
```

For various ways to change icon dimensions and alignment, see [how to change icon dimensions in Iconify for Vue](./dimensions.md).

## Transformations

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

These are not CSS transformations, transformations are applied inside SVG.

For more details see [how to transform icon in Iconify for Vue](./transform.md).
