```yaml
title: Icon Bundles for Iconify for React
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify for React

This tutorial is a part of [Iconify icon bundles tutorial](./index.md) and [Iconify for React with API documentation](../../implementations/react-with-api/index.md).

Icon bundles make it easy to:

- Use icons offline.
- Preload frequently used icons, so icon data is available immediately and icons render instantly.

## Generating data

If you came here from [Iconify for React with API documentation](../../implementations/react-with-api/index.md), you need to read [icon bundles tutorial](./index.md) first to understand what icon bundles are.

## Difference with SVG framework {#difference}

Usage is almost identical to [using icon bundles in SVG framework](./svg-framework.md) with one major difference: bundle requires importing React component.

That one difference completely changes how bundle behaves. While in SVG framework bundle can be in a separately included script, in React component bundle is similar to any other part of your application that uses React component. That is, it must be bundled with your application.

## Bundle example

This is an example of icon bundle:

```jsx
import { addCollection } from '@iconify/react-with-api';

// Load icons
addCollection({
	prefix: 'mdi-light',
	icons: {
		account: {
			body:
				'<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
		},
		home: {
			body:
				'<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

You can add that code in any file that is bundled in your application, or you can create a new bundle file that you import somewhere in your application:

```js
import './bundle.js';
```

## How to automate build process? {#automation}

Manually creating files with icon data is tedious. Good news, it is easy to automate.

You need to create a simple script that does the following:

1. Get icon data.
2. Wrap it in a necessary code (import `[func]addCollection` from component, wrap data in `[func]addCollection` calls).
3. Save it to a file, which is imported in your application.

See [examples](./examples/index.md) for scripts you can use.
