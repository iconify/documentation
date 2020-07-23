```yaml
standalone: true
theme: design
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
```

# MD Test

This is a test document to see style and stuff.

Heading below should have id set to `[str]h2`.

## H2

Iconify has several parts:

- Icon sources
- Implementations
- Integrations

## Icon sources

You can use Iconify with any icons. By default, Iconify includes over 60k free icons from various icon sets, including the most popular icon sets.

[Icon sources](../sources/index.md) are split into 2 parts:

- [Iconify API](../sources/api/index.md): icons are loaded on demand from API, requires internet connection.
- [Bundled icons](../sources/bundles/index.md): icons are bundled during the build process, can be used offline.

## Code samples

### Blocks {#h3}

Heading above should have id `[str]h3`.

Code samples inside Markdown files:

```html
<script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
```

```yaml
src: iconify1/script.html
hint: You can add this script tag in head section or in footer.
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Your page title</title>
		<script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
		<!-- the rest of your header here -->
	</head>
	<body>
		<!-- page content here -->
	</body>
</html>
```

```js
Iconify.addCollection({
	prefix: 'custom',
	icons: {
		icon1: {
			body:
				'<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
		},
	},
	width: 24,
	height: 24,
});
```

### External files

```yaml
title: functions-ready.js
src: iconify1/functions-ready.js
```

```yaml
src: iconify/index-color.scss
```

Sample with code, stylesheet and demo:

```yaml
src: iconify1/index-size-fail.html
css: iconify1/index-size-fail.scss
demo: true
class: iconify1-index-size-fail
```

Same, with hints

```yaml
src: iconify1/index-size-fail.html
hint: Simple HTML code, see <a href="#">some link</a>
css: iconify1/index-size-fail.scss
cssTitle: Stylesheet
cssHint: This stylesheet is very basic!
demo: true
demoTitle: Preview
demoHint: Demo is actually full of bugs
class: iconify1-index-size-fail
```

Same, with titles

```yaml
src: iconify1/index-size-fail.html
title: Sample
hint: Basic sample
css: iconify1/index-size-fail.scss
cssTitle: Stylesheet
demo: true
demoTitle: Preview
class: iconify1-index-size-fail
```

## Inline code

The various types of inline code:

- attr: `[attr]foo="bar"`, `[attr]foo`, used for HTML attributes.
- key, prop: `[key]key`, used for properties (aka array keys).
- var: `[var]Iconify`, used for variables.
- tag: `[tag]svg`, `[tag]<svg />`, used for tags.
- type: `[type]IconifyIcon`, used for types.
- class, func: `[class]Collection`, used for class names and functions.
- icon: `[icon]mdi:home`, used for icon name.
- str: `[str]string`, `[str]"string"`, used for strings.
- bool: `[bool]true`, used for boolean values.
- num, number: `[num]123456`, used for numbers.
- js, bash, json, php: `[js]console.log('Test!');`, used to highlight inline code.
- npm: `[npm]@iconify/json`, used for NPM packages.
- url: `[url]https://iconify.design/`, `[url]iconify.dev`, used for URLs and domains.
- file: `[file]src/parse/md/inline-code.ts`, used for filenames.

See `[file]src/parse/md/inline-code.ts`.
