```yaml
title: IconSet Functions
types:
  IconifyIcon: '../../../types/iconify-icon.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyInfo: '../../../types/iconify-info.md'
  FullIconifyIcon: '../../utils/full-iconify-icon.md'
  IconifyIconName: '../icon-name.md'
  Color: '../../utils/color.md'
  FullIconCustomisations: '../../utils/icon-customisations.md'
  IconCustomisations: '../../utils/icon-customisations.md'
  SVG: '../svg.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
functions:
  validateIconSet: '../../utils/validate-icon-set.md'
  load: './load.md'
  list: './list.md'
  resolve: './resolve.md'
  toString: './to-string.md'
  toSVG: './to-svg.md'
  export: './export.md'
  chars: './chars.md'
  count: './count.md'
  listCategory: './list-category.md'
  toggleCategory: './toggle-category.md'
  fromSVG: './from-svg.md'
  toggleCharacter: './toggle-character.md'
```

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
- `[func]toggleCharacter(name, char, add)` adds or removes character for icon. Function verifies that icon is a valid target.
- `[func]toggleCategory(name, category, add)` adds or removes category for icon. Function verifies that icon is a valid target.
- `[func]checkTheme()` checks prefixes or suffixes, returning list of icons that belong to each theme and list of icons that do not belong to any theme. Function excludes aliases and hidden icons.
