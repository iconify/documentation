```yaml
title: Iconify Tools
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: './full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: '../utils/color.md'
  FullIconCustomisations: '../utils/icon-customisations.md'
  IconCustomisations: '../utils/icon-customisations.md'
  SVG: './svg.md'
  IconSet: './icon-set/index.md'
functions:
  mergeIconSets: './icon-set/merge.md'
```

In Iconify Tools there are 2 main classes:

- `[type]SVG` represents one icon. This class is used when icon's elements need to be manipulated.
- `[type]IconSet` represents an icon set with easy to use functions for managing icons.

Everything else is done by separate functions that work with either `[type]SVG` or `[type]IconSet`.

Functions for working with icon sets:

- `[func]mergeIconSets(oldIcons, newIcons)` merges two icon sets. This is used to update icon sets that are imported from some source: import icon set first, then merge it with old data to make sure old icons are still available (but hidden).
