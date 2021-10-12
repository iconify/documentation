```yaml
title: Iconify Utils
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
functions:
  validateIconSet: './validate-icon-set.md'
  getIcons: './get-icons.md'
  getIconData: './get-icon-data.md'
  minifyIconSet: './minify-icon-set.md'
  expandIconSet: './expand-icon-set.md'
  convertIconSetInfo: './convert-info.md'
  parseIconSet: './parse-icon-set.md'
```

Icon sets are stored in `[type]IconifyJSON` format. Functions for working with icon sets:

- `[func]validateIconSet(data)` validates icon set. If you are not sure if source is a valid icon set, run this function. It will convert data to correct `[type]IconifyJSON` - `[func]getIcons(data, icons)` extracts few icons from icon set. Can be used to reduce icon set to few icons that are used by your project.
- `[func]getIconData(data, icon)` extracts data for one icon from icon set.
- `[func]minifyIconSet(data)` minifies icon set, removing redundant data. Used to reduce file size.
- `[func]expandIconSet(data)` is the opposite of function above.
- `[func]convertIconSetInfo(data)` converts legacy icon set format to correct `[type]IconifyInfo` type.
- `[func]parseIconSet(data, callback)` parses icon set, calling `[attr]callback` function for every icon. Can be used to extract all icons from icon set.
  type or throw error.

Functions for working with `[type]IconifyIcon` format that represents one icon:

- `[func]mergeIconData(icon, alias)` merges data for icon and alias. Used by functions that extract icon data from icon set.
- `[func]fullIcon(data)` adds optional properties to `[type]IconifyIcon` object, converting it to `[type]FullIconifyIcon`.
- `[prop]matchName` constant is a regular expression to test parts of icon name.

When rendering icon, customisations can be applied to it. For example, changing dimensions, rotating or flipping icon. They are represented by `[type]IconifyIconCustomisations` type. Functions for working with customisations:

- `[prop]defaults` exported from `[file]lib/customisations` contains default customisations.
- `[func]mergeCustomisations(defaults, custom)` function converts object to `[type]FullIconCustomisations` type. It also validates types, so it can be used to clean up user input.
- `[func]compare(item1, item2)` exported from `[file]lib/customisations/compare` compares customisation objects.
- `[func]toBoolean(name, value, defaultValue)` converts various strings to boolean. Used by icon components to clean up parameters that can be boolean or string.
- `[func]rotateFromString(value)` converts various methods of rotating icon (such as `[str]90deg` or `[str]25%`) to a number.
- `[func]flipFromString(customisations, value)` applies flip string (such as `[attr]flip="horizontal,vertical"`) to customisations.
- `[func]alignmentFromString(customisations, value)` applies alignment string (such as `[attr]align="left,top"`) to customisations.

Functions for rendering icon:

- `[func]iconToSVG(icon, customisations)` generates data needed to render SVG. It does not generate full SVG, only content and list of attributes to add to SVG element, making it easy to use in custom components.
- `[func]calculateSize(size, ratio)` calculates icon dimensions. It is used when building icons using `[func]iconToSVG()`.
- `[func]replaceIDs(content)` replaces IDs in SVG with unique IDs. IDs used in elements like masks and they must be unique, so multiple icons displayed on the same page using same IDs will result in chaos. This function prevents that chaos.

Helper functions:

- `[func]stringToIcon(value)` converts icon name, such as `[str]mdi-light:home` into an `[type]IconifyIconName` object and optionally validates it.
- `[func]validateIcon(icon)` validates `[type]IconifyIconName` object.

There are also reusable functions for working with colors. They do not really belong to this package, however, they are used by few projects and making a separate package just for colors did not make much sense, so these functions were moved to Iconify Utils package:

- `[func]stringToColor(value)` converts string to `[type]Color` object, returns `null` on error. This can be used to validate user input. It supports color keywords, hexadecimal colors, RGB, HSL, LAB and LCH colors. Variables are not supported because this is meant for parsing SVGs, which should not reference any external variables.
- `[func]compareColors(color1, color2)` compares colors. It also converts RGB to HSL if needed.
- `[func]colorToString(color)` converts `[type]Color` object to string. Combined with `[func]stringToColor()`, this can be used to validate and clean up user input.
