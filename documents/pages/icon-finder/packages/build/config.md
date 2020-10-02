```yaml
title: 'Iconify Icon Finder Build: Configuration'
```

# Building Iconify Icon Finder: configuration

This tutorial is part of [Iconify Icon Finder build process tutorial](./index.md).

Your project must have custom configuration in `[file]configurator.json`.

You can change config name to something else. To use custom config file, add the following parameter to configurator script: `[bash]--config-file config.json`.

## Structure

Config file is a simple JSON file.

It contains:

- Common options, used by configurator. Some options are passed to components.
- Components package options, specific to components package.

Only options that you have customized should be included in configuration. If option value matches the default value, you do not need to include it in config.

Examples:

```json
{
	"common": {
		"theme": {
			"name": "iconify"
		}
	},
	"components": {
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
}
```

```json
{
	"common": {
		"theme": {
			"name": "figma"
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
		}
	},
	"components": {
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
}
```

## Common section

Common section contains global configuration:

- Names of packages for theme and components, name of theme and source directory for custom components.
- Configuration for API providers.

You can find the latest version of configuration options and list of default values in file `[file]src/config/common.ts` of configurator package (`[file]packages/configurator/src/config/common.ts`).

### Theme

If theme package has multiple themes, such as the default themes package, theme name option is required.

Configurator uses the following data from the theme:

- From `[file]rotation.json` it gets the number of colors used in rotation. This makes it possible to have unique backgrounds for various icon sets, categories, prefixes. See [color rotation in themes](../themes/color-rotation.md) for details.
- From `[file]theme.json` it gets list of icons and few other options.

## Components section

Components section is specific to components package.

It contains list of options used by components, such as name of language pack, footer buttons, list of enabled customization options.

These options are applied during compilation, resulting in bundle containing only files that you need.

You can find the latest version of configuration options for components package and list of default values in file `[file]build/config.ts` of the components package (`[file]packages/components/build/config.ts`).
