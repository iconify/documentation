```yaml
title: 'Icon Bundle Examples: SVG Framework'
navigation: ./index.md
standalone: true
replacements:
  - code: '/2/2.0.0/'
    value: '/${iconify2.version.major}/${iconify2.version.full}/'
  - code: '@iconify/iconify@2'
    value: '${iconify2.import}'
types:
  IconifyJSON: '../../../types/iconify-json.md'
```

# Bundling everything for SVG Framework

This article is a part of [Iconify icon bundles code examples](./index.md).

This is the most advanced example, that shows how to create icon bundles from various sources. It is easy to configure.

It bundles:

- Iconify SVG framework.
- Icons from Iconify icon sets.
- Icons from custom icon sets.
- Custom JSON files.
- Custom SVG files.

You need to configure script before running it.

## Instructions

Installation:

```bash
npm install --save-dev @iconify/tools @iconify/json-tools @iconify/json @iconify/iconify@2
```

Usage:

- Change variable `[var]target` to correct location of bundle.
- Change sources configuration in variable `[var]sources`.

## Sources

This bundle script can import icons from multiple sources.

Comment out sources that you do not need.

Available sources:

### iconify

This option bundles Iconify SVG framework.

If you want to bundle entire Iconify SVG framework, use this configuration:

```js
const sources = {
	iconify: require.resolve('@iconify/iconify'),

	// ...
};
```

If you want to make sure API is not available, bundle Iconify SVG framework without API:

```js
const sources = {
	iconify: require.resolve('@iconify/iconify/dist/iconify.without-api.min'),

	// ...
};
```

Build script will also copy TypeScript definitions file to target location. This makes it easy to use bundle with TypeScript and code completion in tools like VSCode.

If you do not want to bundle Iconify SVG framework, comment out `[prop]iconify` property:

```js
const sources = {
	// iconify: require.resolve('@iconify/iconify/dist/iconify.without-api.min'),
};
```

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

If you have icon `[file]svg/home.svg`, after importing it, that icon in SVG framework will have name `[icon]custom:home`:

```html
<span class="iconify" data-icon="custom:home"></span>
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

This option bundles icons from Iconify icon sets. It is similar to [basic importer example](./svg-framework-simple.md).

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
src: sources/bundles/bundle-svg-full.js
```

```yaml
title: 'async/await syntax'
src: sources/bundles/bundle-svg-full-async.js
```

Part of code is taken from [Iconify Tools import examples](../../../tools/node/import-mdi.md).

## Importing bundle

If you are using Iconify SVG framework in scripts and import it, you can import bundle instead. Bundle has all the same exports as SVG framework and TypeScript definitions file.

Before bundle:

```js
import Iconify from '@iconify/iconify';

// do stuff...
```

With bundle:

```js
import Iconify from './iconify-bundle';

// do stuff...
```

## Usage in HTML

If you bundle Iconify SVG framework, you only need to include full file. You can link to a script using `[tag]script` tag or you can import it.

If you do not bundle Iconify SVG framework, generated bundle must be included after SVG framework:

```yaml
src: sources/bundles/svg-framework-head-after.html
hint: Loading bundle after SVG framework in head section.
```
