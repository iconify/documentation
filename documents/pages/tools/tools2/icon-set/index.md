```yaml
title: IconSet Class
types:
  IconifyIcon: '../../../types/iconify-icon.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyInfo: '../../../types/iconify-info.md'
  FullIconifyIcon: '../full-iconify-icon.md'
  IconifyIconName: '../icon-name.md'
  Color: '../../utils/color.md'
  FullIconCustomisations: '../../utils/icon-customisations.md'
  IconCustomisations: '../../utils/icon-customisations.md'
  SVG: '../svg.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
```

# IconSet class

`[type]IconSet` class in [Iconify Tools](../index.md) represents an icon set.

## Usage

To create an instance, use this code to import existing `[type]IconifyJSON` data:

```ts
import { IconSet } from '@iconify/tools/lib/icon-set';

const iconSet = new IconSet({
	prefix: 'codicon',
	icons: {
		'add': {
			body: '<g fill="currentColor"><path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"/></g>',
		},
		'chrome-maximize': {
			body: '<g fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></g>',
		},
		'chrome-minimize': {
			body: '<g fill="currentColor"><path d="M14 8v1H3V8h11z"/></g>',
		},
	},
});
```

or this to create an empty icon set:

```ts
import { blankIconSet } from '@iconify/tools/lib/icon-set';

const iconSet = blankIconSet('some-prefix');
```

## Properties

`[type]IconSet` instance has several properties. Properties that you can change directly:

- `[prop]prefix`, `[type]string`. Icon set prefix.
- `[prop]info`, `[type]IconifyInfo`. Icon set information.

Properties that use internal types, which you can change directly if you want to, but there are methods for working with this data:

- `[prop]entries` contains data for all icons and aliases
- `[prop]categories` contains data for categories.

## Methods

The following methods are available:

- `[func]load(data)` loads data from `[type]IconifyJSON` type. This is identical to creating new `[type]IconSet` instance, but it changes current instance instead of making new one.
- `[func]list()` lists all icons.
- `[func]resolve(name)` returns `[type]ResolvedIconifyIcon` object for icon, `null` on failure.
- `[func]toString(name)` exports icon as SVG string, returns `null` on failure.
- `[func]toSVG(name)` returns `[type]SVG` instance for icon, `null` on failure.
- `[func]export()` exports icon set as `[type]IconifyJSON`.
- `[func]chars()` returns characters map, where key is character (as hexadecimal code) and value is icon name.
- `[func]count()` counts number of icons in icon set. This function excludes aliases and hidden icons.
- `[func]listCategory(category)` lists all icons in category, excluding aliases and hidden icons.
- `[func]exists(name)` checks if icon exists.
- `[func]remove(name)` removes icon. Optional second parameter allows you specify what to do with icon's aliases.
- `[func]rename(oldName, newName)` renames icon.
- `[func]setItem(name, item)` adds/updates item in `[prop]entries` property.
- `[func]setIcon(name, icon)` adds/updates icon, using `[type]IconifyIcon` data.
- `[func]setAlias(name, parent)` creates an alias for icon.
- `[func]setVariation(name, parent, props)` creates a variation (alias with customisations) for icon.
- `[func]fromSVG(name, svg)` adds/updates icon from `[type]SVG` instance.
- `[func]addCharacter(name, char)` adds character to icon. Function verifies that icon is a valid target.
- `[func]addCategory(name, category)` adds category to icon. Function verifies that icon is a valid target.
