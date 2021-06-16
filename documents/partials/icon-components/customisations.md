`[type]IconifyIconCustomisations` type is an object with the following optional properties, split into several categories.

Display mode:

- `[prop]inline`, `[type]boolean`. Inline or block mode. The default value is `false`.

Icon dimensions:

- `[prop]width`, `[type]string | number | null`. Icon width. The default value is `null`.
- `[prop]height`, `[type]string | number | null`. Icon height. The default value is `null`.

If neither of dimensions is set, `[prop]height` defaults to `[str]1em`.

Keyword `[str]auto` sets dimension to original icon's dimensions found in `[attr]viewBox`.

Alignment:

- `[prop]hAlign`. Horizontal alignment: `[str]left`, `[str]center`, `[str]right`. The default value is `[str]center`.
- `[prop]vAlign`. Vertical alignment: `[str]top`, `[str]middle`, `[str]bottom`. The default value is `[str]middle`.
- `[prop]slice`, `[type]boolean`. What to do with incorrectly scaled icon: resize to fit container (`[bool]true`) or display an entire icon (`[bool]false`, the default value).

Alignment matters only if you set both `[prop]width` and `[prop]height` and width to height ratio does not match icon's width to height ratio. Unlike other images, browsers do not stretch SVG.

Transformations:

- `[prop]hFlip`, `[type]boolean`. Flip icon horizontally. The default value is `[bool]false`.
- `[prop]vFlip`, `[type]boolean`. Flip icon vertically. The default value is `[bool]false`.
- `[prop]rotate`, `[type]number`. Rotation in 90 degrees increments. The default value is `[num]0`.
