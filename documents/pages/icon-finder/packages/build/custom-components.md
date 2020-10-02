```yaml
title: 'Iconify Icon Finder Build: Custom Components'
```

# Building Iconify Icon Finder: custom components

This tutorial is part of [Iconify Icon Finder build process tutorial](./index.md).

Build process can swap files when building components. If you set option `[prop]common.components.customDir` [in configuration](./config.md), build script will look for files from that directory. Directory is relative to your UI package.

Example:

```json
{
	"common": {
		"components": {
			"customDir": "src/components"
		}
	}
}
```

If you have a file `[file]src/components/ui/Container.svelte`, build script will use it instead of `[file]@iconify/search-components/src/ui/Container.svelte` to build `[file]@iconify/search-components/lib/ui/Container.svelte`.

This applies to all files used by components: `[file].svelte` and `[file].ts`.

## Examples

For examples of how it is done, look in Iconify for Figma plug-in code (see `[file]ui/figma` of Icon Finder repository).
