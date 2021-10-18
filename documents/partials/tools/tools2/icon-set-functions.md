```yaml
types:
  SVG: './svg.md'
  IconSet: './icon-set/index.md'
functions:
  mergeIconSets: './icon-set/merge.md'
```

Other functions for working with `[type]IconSet` instances:

- `[func]mergeIconSets(oldIcons, newIcons)` merges two icon sets. This is used to update icon sets that are imported from some source: import icon set first, then merge it with old data to make sure old icons are still available (but hidden).
