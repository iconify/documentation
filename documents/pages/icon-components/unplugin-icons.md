```yaml
title: Unplugin Icons
```

# Unplugin Icons

`[npm]unplugin-icons` is an alternative to [Iconify icon components](./index.md), developed by Anthony Fu.

It generates icon components on demand for multiple frameworks and supports all popular build tools.

Latest documentation is available at [unplugin-icons GitHub repository](https://github.com/antfu/unplugin-icons).

## Difference

What is the difference from Iconify icon components?

`[npm]unplugin-icons` does not load icon data from API. It detects icons that you are using in your project and bundles them during build process.

It is very easy to use.

## Usage

`[npm]unplugin-icons` generates icon components for the following frameworks:

`include icon-components/unplugin-icons-frameworks`

Usage example for React:

```jsx
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';

function App() {
	return (
		<div>
			<IconAccessibility />
			<IconAccountBox style={{ fontSize: '2em', color: 'red' }} />
		</div>
	);
}
```

See [unplugin-icons GitHub repository](https://github.com/antfu/unplugin-icons) for more information.

## Custom icons

You can use `[npm]unplugin-icons` with custom icons. During build process you can import, clean up and optimise icons using [Iconify Tools](../tools/tools2/index.md).

See [demo from Iconify Tools package](https://github.com/iconify/tools/tree/main/%40iconify-demo/unplugin-svelte). Configuration is in `[file]svelte.config.js`.
