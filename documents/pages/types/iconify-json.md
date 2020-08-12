```yaml
title: Iconify JSON Type
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
```

# IconifyJSON type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article explains `[type]IconifyJSON` type.

## Structure

Type `[type]IconifyJSON` is an object that has the following required properties.

### Required properties

- `[prop]prefix`, `[type]string`. Prefix for icons in JSON file. All icons in an icon set have the same prefix and icon set cannot include icons from other icon sets.
- `[prop]icons`, `[type]Record<string, IconifyIcon>`. List of icons. Key is icon name, value is `[type]IconifyIcon` icon data.

Example:

```json
{
	"prefix": "mdi",
	"icons": {
		"home": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	}
}
```

Other properties are optional:

### Alias

- `[prop]aliases`, `[type]Record<string, IconifyAlias>`. List of aliases. Key is alias name, value is `[type]IconifyAlias` alias data.

Examples:

```json
{
	"prefix": "mdi",
	"icons": {
		"house": {
			"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
			"width": 24,
			"height": 24
		}
	},
	"aliases": {
		"home": {
			"parent": "house"
		}
	}
}
```

```json
{
	"prefix": "bi",
	"icons": {
		"arrow-left": {
			"body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z\"/><path fill-rule=\"evenodd\" d=\"M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z\"/></g>",
			"width": 16,
			"height": 16
		}
	},
	"aliases": {
		"arrow-right": {
			"parent": "arrow-left",
			"hFlip": true
		}
	}
}
```

### Default values

Also, `[type]IconifyJSON` object might include any of the optional properties:

`include types/iconify-optional`

They are used as default values for icons that do not have those properties.

Example:

```yaml
src: types/json-defaults-source.json
title: 'With default values:'
extra:
  - src: types/json-defaults-merged.json
    title: 'Without default values:'
    hint: 'Both examples are identical, first example has default values, second example does not.'
```

## Metadata

`[type]IconifyJSON` can also contain additional data that is used for displaying icons list.

This is optional data that has no effect on rendering icons, so it was moved to a separate document.

See [IconifyJSON metadata](./iconify-json-metadata.md) for details.
