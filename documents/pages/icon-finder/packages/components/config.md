```yaml
title: 'Iconify Icon Finder Components: Configuration'
classes:
  Wrapper: ./wrapper.md
```

# Components configuration

This tutorial is part of [Iconify Icon Finder components tutorial](./index.md).

Components configuration is applied during compilation. It is stored in `[prop]components` property of `[file]configurator.json` in projects.

See [build process documentation](../build/index.md) for more information about configuration files and build process.

You can find the latest version of configuration options for components package and list of default values in file `[file]build/config.ts`.

There are several sections of components configuration.

## Language

`[prop]language` property points to the file that contains translation, relative to directory `[file]phrases` of source directory (`[file]packages/components/src/`).

Example:

```json
{
	"components": {
		"language": "de"
	}
}
```

This will cause components package to use `[file]phrases/de.ts` instead of `[file]phrases/en.ts`.

## Collections list

`[prop]collectionsList` property has options for the collections list. It changes how icon sets are rendered.

```json
{
	"components": {
		"collectionsList": {
			"authorLink": false,
			"clickable": false
		}
	}
}
```

If you set `[prop]clickable` to `[bool]true`, an entire block will be clickable. This is useful if you want to display icon sets as small blocks.

Make sure theme supports various icon sets layouts.

## Footer

Properties `[prop]showFooter` and `[prop]footer` change footer block.

### Disabling footer

By setting `[prop]showFooter` to `[bool]false`, an entire footer is disabled and options in `[prop]footer` property become irrelevant. Footer components will not be bundled, reducing bundle size.

```json
{
	"components": {
		"showFooter": false
	}
}
```

Use this option if you want to use custom footer. You can use callback from `[class]Wrapper` instance to track selected icon and render your own footer.

### Components

Components option allow you to swap various footer components. Different components render parts of footer in different ways.

Value for each option is a name of `[file].svelte` file. If component name is in lower case, it will be converted to "CamelCase".

#### Footer component

For example, `[prop]footer.components.footer` points to a container component for footer. Component should be in directory `[file]ui/footer/` of components source.

List of available components can change, at the moment of writing there are 3 options:

- `[str]full`: uses `[file]ui/footer/Full.svelte`. It renders big footer with large sample of the selected icon.
- `[str]simple`: uses `[file]ui/footer/Simple.svelte`. It renders compact footer with small sample of the selected icon.
- `[str]empty`: uses `[file]ui/footer/Empty.svelte`. It renders only footer buttons. No sample, no customisation options.

```json
{
	"components": {
		"footer": {
			"components": {
				"footer": "simple"
			}
		}
	}
}
```

Example of configuration above could be confusing because of duplicate names:

- `[prop]components` refers to components package configuration.
- `[prop]components.footer` refers to footer configuration.
- `[prop]components.footer.components` refers to list of components used in footer.
- `[prop]components.footer.components.footer` refers to component used as footer wrapper.

#### Name component

Property `[prop]footer.components.name` points to a component used to display name of the selected icon. Component should be in directory `[file]ui/footer/parts/name/` of components source code.

List of available components can change, at the moment of writing there are 3 options:

- `[str]block`: uses `[file]ui/footer/parts/name/Block.svelte`. Renders selected icon name as big block, including mini sample.
- `[str]simple`: uses `[file]ui/footer/parts/name/Simple.svelte`. Shows sample separately from block.
- `[str]simple-editable`: uses `[file]ui/footer/parts/name/SimpleEditable.svelte`. Same as `[str]simple`, but selected icon name is an input box. Input is editable and if user's input matches an existing icon, it changes selection.

If icon name is displayed as input box, it will always include full icon name, such as `[icon]line-md:bell`.

If icon name is displayed as simple text and option `[prop]footer.canShortenName` is set to `[bool]true`, selected icon name will be shortened from `[icon]line-md:bell` to `[icon]bell` when viewing icon set, resulting in cleaner UI.

### Customisations

`[prop]footer.customisations` property contains list of icon customisations. You can toggle color picker, icon dimensions, transformations and change components used for those elements.

Changing components works similar to footer components mentioned above. Components for various customisations are in directory `[file]ui/footer/parts/props/` in separate sub-directories for each type of customisation.

### Buttons

`[prop]footer.buttons` property contains list of buttons used in footer.

Buttons will be displayed in exactly the same order as in configuration. In two examples below buttons are identical, but their order will be different:

```json
{
	"components": {
		"footer": {
			"buttons": {
				"submit": {
					"type": "primary",
					"text": "Submit",
					"icon": "line-md:confirm"
				},
				"cancel": {
					"type": "secondary",
					"text": "Cancel",
					"icon": "line-md:close",
					"always": true
				}
			}
		}
	}
}
```

```json
{
	"components": {
		"footer": {
			"buttons": {
				"cancel": {
					"type": "secondary",
					"text": "Cancel",
					"icon": "line-md:close",
					"always": true
				},
				"submit": {
					"type": "primary",
					"text": "Submit",
					"icon": "line-md:confirm"
				}
			}
		}
	}
}
```

Key in each object is used in `[class]Wrapper` callback when button is clicked.

Value contains:

- Button type: `[str]primary`, `[str]secondary` or `[str]destructive`.
- Button title. It is optional if translation for button is available in phrases in `[prop]footerButtons` object. Key in translation is the same as footer key, such as `[str]submit` and `[str]cancel` in examples above.
- Icon is optional name of icon to show for button. You can add custom icons in theme's `[file]theme.json`.
- If optional property `[prop]always` is set to `[bool]true`, button will always be shown, even if there is no selected icon. This is used to display buttons such as close button that should always be visible.

If `[prop]footer.buttons` property is not set, components will render 2 buttons: `[str]Submit` and `[str]Cancel`.

## Other properties

There are more properties available.

See `[file]packages/components/build/config.ts` for list of properties, their descriptions and default values.
