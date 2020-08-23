```yaml
title: Iconify for Vue 2
wip: true
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/vue@1'
    value: '${vue.import-vue2}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for Vue

In addition to [SVG framework](../svg-framework/index.md), Iconify offers native components for several popular UI frameworks. Iconify for Vue is one of such components.

Yet another icon component? What are advantages over other icon components?

- One syntax for over 60,000 icons from 80+ icon sets.
- Renders SVG. Many components simply render icon fonts, which look ugly. Iconify renders pixel perfect SVG.

`include notices/vue2`

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/vue@1
```

If you are using Yarn:

```bash
yarn add --dev @iconify/vue@1
```

This package does not include icons. Icons are split into separate packages that available at NPM. See below.

## Usage

Iconify for Vue is a basic component. It works offline and does not have any dependencies. Icon data is provided as parameter to component.

Install `[npm]@iconify/vue@1` and packages for selected icon sets. Import component from `[npm]@iconify/vue@1` and icon data for icon you want to use:

```js
import IconifyIcon from '@iconify/vue';
import home from '@iconify-icons/mdi-light/home';
```

Then use `[var]IconifyIcon` component with icon data as `[prop]icon` parameter:

```vue
<template>
	<IconifyIcon :icon="icons.home" />
</template>

<script>
import IconifyIcon from '@iconify/vue';
import home from '@iconify-icons/mdi-light/home';

export default {
	components: {
		IconifyIcon,
	},
	data() {
		return {
			// Returns icons data that can be used in template
			icons: {
				home: home,
			},
		};
	},
};
</script>
```

## Properties

TODO...
