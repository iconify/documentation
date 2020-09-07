In TypeScript info is represented by type `[type]IconifyInfo` that can be imported from `[npm]@iconify/types`.

This is a simple object with various properties. Required properties are:

- `[prop]name`.
- `[prop]author.name`.
- `[prop]license.title`.
- `[prop]samples`.
- `[prop]palette`.

All other properties are optional.

List of properties:

- `[prop]name`, `[type]string`: icon set name.
- `[prop]total`, `[type]number`: number of icons. It counts all icons + aliases that have transformations. Aliases that do not have any transformations should not be counted.
- `[prop]version`, `[type]string`: icon set version.
- `[prop]author`, `[type]object`: icon set author information:
  - `[prop]name`, `[type]string`: author name.
  - `[prop]url`, `[type]string`: link to author's website or icon set repository.
- `[prop]license`, `[type]object` licence information:
  - `[prop]title`, `[type]string`: licence as human-readable text.
  - `[prop]spdx`, `[type]string`: SPDX identifier.
  - `[prop]url`, `[type]string`: link to licence text.
- `[prop]samples`, `[type]string[]`: list of icons that should be used for samples. List should contain 3 icons.
- `[prop]height`, `[type]number or number[]`: icon grid as number or array of numbers.
- `[prop]displayHeight`, `[type]number`: display height for samples: 16-24. If `[prop]height` is a number and within 16-24 range, you can skip `[prop]displayHeight`.
- `[prop]category`, `[type]string`: category this icon set belongs to in icon sets list.
- `[prop]palette`, `[type]boolean` icon set palette. All icons in an icon set must be either monotone (must use `[str]currentColor` for fill and stroke) or with predefined palette that cannot be modified. Set to `[bool]true` if icons have predefined palette, to `[bool]false` if icons use `[str]currentColor`.

Example:

```json
{
	"info": {
		"name": "Dashicons",
		"total": 343,
		"author": {
			"name": "WordPress",
			"url": "https://github.com/WordPress/dashicons"
		},
		"license": {
			"title": "GPL 2.0",
			"spdx": "GPL-2.0-only",
			"url": "http://www.gnu.org/licenses/gpl-2.0.html"
		},
		"version": "0.9.0",
		"samples": ["shortcode", "businessperson", "editor-expand"],
		"height": 20,
		"category": "General",
		"palette": false
	}
}
```
