```yaml
title: 'Iconify Icon Finder Build: Configuration'
wip: true
```

# Building Iconify Icon Finder: configuration

This tutorial is part of [Iconify Icon Finder build process tutorial](./index.md).

Your project must have custom configuration in `[file]configurator.json`.

You can change config name to something else. To use custom config file, add the following parameter to configurator script: `[bash]--config-file config.json`.

## Structure

Config file is a simple JSON file.

It contains:

- Name of theme that your project uses.
- Options that are customized. If option value matches the default value, you do not need to include it in config.

Examples:

```json
{
	"theme": "iconify",
	"footer": {
		"components": {
			"footer": "full",
			"name": "simple-editable"
		},
		"customisations": {
			"color": {
				"defaultColor": "#f80"
			}
		}
	}
}
```

```json
{
	"theme": "figma",
	"layout": {
		"canShortenName": false
	},
	"providers": {
		"show": true,
		"default": "local",
		"canAdd": true,
		"custom": {
			"local": {
				"api": "http://localhost:3100",
				"title": "Local Test"
			}
		}
	},
	"footer": {
		"buttons": {
			"submit": {
				"type": "primary",
				"text": "Submit",
				"icon": "@local:line-md:confirm"
			},
			"cancel": {
				"type": "secondary",
				"text": "Cancel",
				"icon": "@local:clarity:check-line"
			},
			"close": {
				"type": "destructive",
				"text": "Close"
			}
		}
	}
}
```

## Theme

Theme is required, even if you are not using actual theme. Why? Because of theme configuration.

Configurator uses the following data from theme:

- From `[file]rotation.json` it gets the number of colors used in rotation. This makes it possible to have unique backgrounds for various icon sets, categories, prefixes. See [color rotation in themes](../themes/color-rotation.md) for details.
- From `[file]theme.json` it gets list of icons and few other options.
