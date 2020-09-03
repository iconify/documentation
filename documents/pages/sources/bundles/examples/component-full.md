```yaml
title: 'Icon Bundle Examples: Components'
navigation: ./index.md
standalone: true
types:
  IconifyJSON: '../../../types/iconify-json.md'
```

# Bundling everything for Iconify components

This article is a part of [Iconify icon bundles code examples](./index.md).

This is the most advanced example, that shows how to create icon bundles from various sources. It is easy to configure.

It bundles:

- Icons from Iconify icon sets.
- Icons from custom icon sets.
- Custom JSON files.
- Custom SVG files.

You need to configure script before running it.

## Instructions

Installation:

```bash
npm install --save-dev @iconify/tools @iconify/json-tools @iconify/json
```

Usage:

- Change value of `[var]component` to correct component. See below.
- Change value of `[var]target` to correct location of bundle.
- Change sources configuration in variable `[var]sources`.

### Components

```yaml
include: sources/bundles/example-components
```

## Sources

This bundle script can import icons from multiple sources.

Comment out sources that you do not need.

Available sources:

### svg

This option bundles custom SVG files. It converts SVG files to `[type]IconifyJSON` format, then bundles it.

This method is used on Iconify documentation website to render custom icons and logo.

Value is array of objects. Each object has the following properties:

- `[prop]dir`: directory where SVG files are stored. Sub-directories are not parsed.
- `[prop]monotone`: `[bool]true` if icons are monotone, `[bool]false` if not. This affects how icons are cleaned up. If you have different icons, it is better to split them into 2 directories and make separate entries for monotone and colored icons.
- `[prop]prefix`: Icon set prefix. It does not have to be unique, you can re-use same prefix for multiple sources, just make sure icon names are different.

Icons will imported from custom SVG directories can be used by name `[str]prefix:name`, where `[str]prefix` is prefix you have configured, `[str]name` is icon name.

For example:

```js
const sources = {
    svg: [
        dir: __dirname + '/svg',
        monotone: true,
        prefix: 'custom'
    ]
}
```

If you have icon `[file]svg/home.svg`, after importing it, that icon in component will have the name `[icon]custom:home`:

```jsx
<Icon icon="custom:home" />
```

If you do not want to import SVG, comment out that section of configuration:

```js
const sources = {
	// ...
	/*
	svg: [
		{
			dir: __dirname + '/svg',
			monotone: true,
			prefix: 'custom',
		},
		{
			dir: __dirname + '/emojis',
			monotone: false,
			prefix: 'emoji',
		},
	],
*/
	// ...
};
```

### iconifyIcons

This option bundles icons from Iconify icon sets. It is similar to [basic importer example](./component-simple.md).

If you do not want to bundle any icons, comment out section or change value to an empty array:

```js
const sources = {
	// ...
	/*
	iconifyIcons: [
		'mdi:home',
		'mdi:account',
		'mdi:login',
		'mdi:logout',
		'octicon:book-24',
		'octicon:code-square-24',
	],
*/
	// ...
};
```

### json

This option will bundle entire Iconify JSON files.

Use this if you want to use Iconify offline with full icon sets.

To bundle custom JSON file, point to location of that file. To bundle Iconify icon set, use `[func]require.resolve()` to get its location:

```js
const sources = {
	// ...

	json: [
		// Custom JSON file
		__dirname + '/json/gg.json',
		// Iconify JSON file (@iconify/json is a package name, /json/ is directory where files are, then filename)
		require.resolve('@iconify/json/json/tabler.json'),
	],

	// ...
};
```

For example, to bundle Material Design Icons, use `[js]require.resolve('@iconify/json/json/mdi.json')`.

If you do not want to bundle any JSON files, comment out section or change value to an empty array:

```js
const sources = {
	// ...
	/*
	json: [
		// Custom JSON file
		__dirname + '/json/gg.json',
		// Iconify JSON file (@iconify/json is a package name, /json/ is directory where files are, then filename)
		require.resolve('@iconify/json/json/tabler.json'),
	],
    */
	// ...
};
```

### customIcons

This option bundles icons from custom JSON files.

This is similar to previous option, but instead of loading Iconify icon sets, you specify location of JSON file.

Value is array of entries, each entry is an object with the following properties:

- `[prop]json`: location of JSON file.
- `[prop]icons`: list of icons to get from that JSON file.

If you do not want to bundle any icons from custom JSON files, comment out section or change value to an empty array:

```js
const sources = {
	// ...
	/*
	customIcons: [
		{
			json: __dirname + '/json/line-md.json',
			icons: [
				'home-twotone-alt',
				'github',
				'document-list',
				'document-code',
				'image-twotone',
			],
		},
	],
    */
};
```

## Code

Below are two versions of the same code.

First version uses `[func]Promise` syntax, second version uses `[func]async` and `[func]await` syntax.

```yaml
title: 'Promise syntax'
src: sources/bundles/bundle-component-full.js
```

```yaml
title: 'async/await syntax'
src: sources/bundles/bundle-component-full-async.js
```

Part of code is taken from [Iconify Tools import examples](../../../tools/node/import-mdi.md).

## Importing bundle

Bundle generated by script above must be imported in your application:

```js
import './icons-bundle.js';
```
