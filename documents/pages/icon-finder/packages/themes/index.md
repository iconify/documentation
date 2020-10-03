```yaml
title: 'Iconify Icon Finder: Themes Package'
types:
  IconifyJSON: ../../../types/iconify-json.md
```

# Iconify Icon Finder: themes package

This tutorial is part of [Iconify Icon Finder build process tutorial](../index.md).

Themes package contains several sets of stylesheets, designed to be use with Svelte components from [components package](../components/index.md).

Themes package can be found in directory `[file]packages/themes` of [Icon Finder source code](http://github.com/iconify/icon-finder).

All themes are using SASS syntax with few changes:

- Each theme has color rotation in JSON file, which is converted to SASS file by build script.
- Build script supports themes tree. Each theme can have a parent theme, which is used as include path for SASS files.

## Main files

Each theme must have two files:

- `[file]theme.json` that contains configuration.
- `[file]theme.scss` that is main entry.

## Rotation

Theme must also have `[file]rotation.json`, however it is not required if one of parent themes has it. See [themes tree](#themes-tree).

File `[file]rotation.json` contains color rotation as array. It can be imported as variable `[var]$rotation` in SASS files.

Why is it stored as JSON file, not SASS file? Because build script in components package needs to know the number of elements in the color rotation of current theme, but without parsing SASS files, so it extracts it from JSON file.

Example:

```scss
// Import $rotation
@import 'rotation';

// Get length of rotation
$rotation-total: length($rotation);
```

Values in rotation array are colors. If you want to use strings, such as indexes of function, add quotes.

Examples:

```json
[
	// purple
	"#6f53fe",
	// desaturated green
	"#588542",
	// pink
	"#c600c6",
	// cyan
	"#009e9e",
	// brown
	"#824e00",
	// dark red
	"#c6006b",
	// desaturated blue
	"#6786ab",
	// green
	"#00ad64",
	// blue 2
	"#275cc6",
	// orange
	"#ca8706"
]
```

Importing such `[file]rotation.json` will be identical to this:

```scss
$rotation: (
	// purple
	#6f53fe,
	// desaturated green
	#588542,
	// pink
	#c600c6,
	// cyan
	#009e9e,
	// brown
	#824e00,
	// dark red
	#c6006b,
	// desaturated blue
	#6786ab,
	// green
	#00ad64,
	// blue 2
	#275cc6,
	// orange
	#ca8706
);
```

Example with strings:

```json
[
	// Palettes, imported as strings to be used in palette() mixin
	"'purple'",
	"'teal'",
	"'orange'",
	"'blue-gray'",
	"'green'",
	"'indigo'",
	"'brown'",
	"'deep-purple'",
	"'pink'",
	"'cyan'",
	"'light-green'",
	"'red'"
]
```

Importing such `[file]rotation.json` will be identical to this:

```scss
$rotation: (
	// Palettes, imported as strings to be used in palette() mixin
	'purple',
	'teal',
	'orange',
	'blue-gray',
	'green',
	'indigo',
	'brown',
	'deep-purple',
	'pink',
	'cyan',
	'light-green',
	'red'
);
```

## Config

File `[file]theme.json` contains theme configuration:

- `[prop]parent`, `[type]string`. Name of parent theme, if theme has a parent theme. See [themes tree](#themes-tree).
- `[prop]icons`. List of icons. Icons are rendered in HTML as SVG, so they are used in components, not in theme. However, because icons must match theme, icons configuration is stored in theme, not in components.

### Icons

Property `[prop]icons` of `[file]theme.json` has several properties, all are optional:

- `[prop]class`, `[type]string`. Class to add to all icons.
- `[prop]custom`, `[type]IconifyJSON`. Custom icons in JSON format.
- `[prop]names`. List of icons used for each action. Key is action, value is name of icon.

## Themes tree {#themes-tree}

Themes tree makes it easy to duplicate theme with minor changes without duplicating all files.

When file is missing in a theme, compiler will look in parent theme's directory. If parent theme does not have requested file, but it has a parent theme, compiler will look in parent theme's parent theme's directory... and so on.

That means if you want to create a new theme based on another theme, but with few changes, all you have to do is mention parent theme in `[file]theme.json` instead of copying all files and only copy files that you want to change.

## Building

To build a theme, run `[bash]node build theme-name`, where `[str]theme-name` is name of theme.

To build all themes, run `[bash]node build --all`.

Build script will generate `[file].css` and `[file].json` files for each theme in directory `[file]dist`. Names of files will match name of the theme.

You can also re-build theme from implementation by adding `[attr]--rebuild-theme` (or `[attr]--rebuild-all` to rebuild all packages) to build script's command line.
