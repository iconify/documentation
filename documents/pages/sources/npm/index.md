```yaml
title: Icon Packages
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80 icon sets'
    value: '${counters.sets} icon sets'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addIcon: ../../icon-components/svg-framework/add-icon.md
```

# Icon packages

Icon packages are NPM packages that contain data for icons from one icon set, one icon per file. Data is `[type]IconifyIcon` object:

```json
{
	"body": "<path d=\"M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7m-8-5V5h10v10H7z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
}
```

For more information about `[type]IconifyIcon` type see [IconifyIcon documentation](../../types/iconify-icon.md).

## Usage

Icon data can be used in Iconify components, providing icon data instead of icon name:

`include icon-components/components`

Icon data is passed as parameter to Iconify icon component, like this (example for React component):

```jsx
// Import React
import React from 'react';

// Import Iconify component
import { Icon } from '@iconify/react';

// Import icon data
import homeIcon from '@iconify-icons/mdi-light/home';

// Sample functional component
export function MyComponent() {
	return (
		<div>
			<Icon icon={homeIcon} />
		</div>
	);
}
```

### addIcon

It can also be used with `[func]addIcon()` function.

In [SVG framework](../../icon-components/svg-framework/index.md) you cannot pass icon data as parameter, but you can use `[func]addIcon()` to set a name for icon:

```js
Iconify.addIcon('custom-icon', {
	body: '<path d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7m-8-5V5h10v10H7z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

then refer to icon by name:

```html
<span class="iconify" data-icon="custom-icon"></span>
```

Function `[func]addIcon()` is also available in all components.

```vue
<template>
	<Icon icon="demo" />
</template>

<script>
import { Icon, addIcon } from '@iconify/vue';
import demoIcon from '@iconify-icons/dashicons/info-outline';

addIcon('demo', demoIcon);

export default {
	components: {
		Icon,
	},
};
</script>
```

In example above, `[func]addIcon` is used in same file as component. If you are using the same icon in multiple components, you need to add it only once in any file that is executed before your application renders components.

## Available icons

`include sources/npm/packages-intro`

## Packages

`include sources/npm/packages-structure`

## TypeScript support

All icons in ES6 and CommonJS packages have `[file].d.ts` files, so they can be used with TypeScript.

## Examples

Few examples of icon names:

- `[icon]mdi:login-variant` from [Material Design Icons](https://icon-sets.iconify.design/mdi/) can be imported from `[npm]@iconify-icons/mdi/login-variant` (ES6) or `[npm]@iconify/icons-mdi/login-variant` (CommonJS).
- `[icon]bi:chat-quote` from [Bootstrap Icons](https://icon-sets.iconify.design/bi/) can be imported from `[npm]@iconify-icons/bi/chat-quote` (ES6) or `[npm]@iconify/icons-bi/chat-quote` (CommonJS).
- `[icon]tabler:info-circle` from [Tabler Icons](https://icon-sets.iconify.design/tabler/) can be imported from `[npm]@iconify-icons/tabler/info-circle` (ES6) or `[npm]@iconify-icons/tabler/info-circle` (CommonJS).

See Iconify components for usage:

`include icon-components/components-offline`
