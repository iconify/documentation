```yaml
title: iconToSVG() in Iconify Utils
types:
  FullIconCustomisations: './icon-customisations.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
functions:
  validateIcon: './validate-icon.md'
```

# iconToSVG()

This function is part of [Iconify Utils package](./index.md).

Function `[func]iconToSVG()` generates data required to render SVG.

It is used by all [Iconify Icon components](../../icon-components/index.md).

## Usage

Function has the following parameters:

- `[prop]icon`, `[type]FullIconifyIcon`. Icon data.
- `[prop]customisations`, `[type]FullIconCustomisations`. Icon customisations.

Function returns data with type `[type]IconifyIconBuildResult`. See below.

## Result {#build-result}

Result is an object with the following properties:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]attributes`, `[type]object`. Attributes for `[tag]svg` element.
- `[prop]inline`, `[type]boolean`. Optional. If `true`, implementation should add the following style to generated icon: `[css]vertical-align: -0.125em;`.

Result does not include attributes that are common to all `[tag]svg` elements, such as `[prop]xmlns`.

### Examples of result

```json
{
	"attributes": {
		"width": "24",
		"height": "24",
		"preserveAspectRatio": "xMidYMid meet",
		"viewBox": "0 0 24 24"
	},
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
}
```

```json
{
	"attributes": {
		"width": "24",
		"height": "24",
		"preserveAspectRatio": "xMidYMid meet",
		"viewBox": "0 0 24 24"
	},
	"body": "<path d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5z\" fill=\"currentColor\"/>",
	"inline": true
}
```

## Example

```yaml
src: tools/utils/get-icon.ts
title: 'example.ts'
```
