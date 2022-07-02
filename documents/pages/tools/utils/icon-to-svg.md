```yaml
title: iconToSVG() in Iconify Utils
types:
  IconifyIconCustomisations: './icon-customisations.md'
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
```

# iconToSVG()

This function is part of [Iconify Utils package](./index.md).

Function `[func]iconToSVG()` generates data required to render SVG.

It is used by all [Iconify Icon components](../../icon-components/index.md).

## Usage

Function has the following parameters:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.
- `[prop]customisations`, `[type]IconifyIconCustomisations`. Icon customisations. Optional.

Function returns data with type `[type]IconifyIconBuildResult`. See below.

## Result {#build-result}

Result is an object with the following properties:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]attributes`, `[type]object`. Attributes for `[tag]svg` element.

Result does not include attributes that are common to all `[tag]svg` elements, such as `[prop]xmlns`.

### Examples of result

```json
{
	"attributes": {
		"width": "24",
		"height": "24",
		"viewBox": "0 0 24 24"
	},
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>"
}
```

## Example

```yaml
src: tools/utils/get-icon.ts
title: 'example.ts'
```
