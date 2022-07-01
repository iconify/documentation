```yaml
title: parseIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  IconifyIcon: '../../types/iconify-icon.md'
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
- `[prop]callback`, `[type]function`. Callback, called for each icon found in icon set.

Function returns list of parsed icons as `[type]string[]`.

### Callback

Callback function has 2 parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]data`, `[type]IconifyIcon | null`. Icon data, `null` if icon is invalid.

Callback is called for each entry in icon set: all icons and all aliases.

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
