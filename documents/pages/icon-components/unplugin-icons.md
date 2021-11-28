```yaml
title: Unplugin Icons
```

# Unplugin Icons

unplugin-icons is an alternative to [Iconify icon components](./index.md), developed by Anthony Fu.

It uses [Iconify icon packages](../icons/all.md) for source, just like Iconify icon components.

Latest documentation is available at [unplugin-icons GitHub repository](https://github.com/antfu/unplugin-icons).

## Difference

What is the difference from Iconify icon components?

unplugin-icons does not load icon data from API. It detects icons that you are using in your project and bundles them during build process.

It is very easy to use.

## Usage

unplugin-icons works with multiple frameworks: React, Vue, Svelte, Solid.

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
