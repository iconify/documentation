```yaml
title: parseIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  IconSetValidationOptions: './validate-icon-set.md#options'
functions:
  validateIconSet: './validate-icon-set.md'
  quicklyValidateIconSet: './quickly-validate-icon-set.md'
```

# parseIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]parseIconSet()` parses icon set, calling custom function for every icon.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.
- `[prop]callback`, `[type]string`. Icon name.
- `[prop]options`. Optional options, see below.

Function returns list of parsed icons as `[type]string[]`.

## Options

Options object has the following properties:

- `[prop]aliases`, `[type]ParseIconSetAliases`. Defines how to parse icon aliases. Default value is `[str]all`. See below.

## Parsing icon aliases

`[prop]options.aliases` defines how to parse icon aliases:

- `[str]none` icon aliases will not be parsed.
- `[str]variations` parses only icon aliases that have transformation. This is useful to count actual icons in icon set because it excludes simple aliases.
- `[str]all` parses all aliases.

## Example

Exporting all icons from icon set:

```yaml
src: tools/utils/parse.ts
title: 'usage.ts'
```

Counting icons in icon set:

```yaml
src: tools/utils/count.ts
title: 'count.ts'
```

Code used in example above should be used to count icons in icon set when calculating number of icons for `[type]IconifyInfo` data. It counts all icons, excluding hidden icons and basic aliases.

### Validation

Function does not check icon set for errors. Before using it, validate icon set using `[func]validateIconSet()` or `[func]quicklyValidateIconSet()`.

### JSON Modules

When using ES modules, examples above might require running node with `[str]--experimental-json-modules` flag.

Until JSON modules support in Node.js becomes stable, you can avoid using flag by replacing `[func]import` with `[func]require()` because `[func]require()` supports JSON files:

```js
const { icons } = require('@iconify-json/codicon');
```
