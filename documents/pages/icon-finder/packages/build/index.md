```yaml
title: Iconify Icon Finder Build
```

# Building Iconify Icon Finder

This documentation explains Iconify Icon Finder build process.

Building is a very complex process that mixes code from multiple packages. Why does it need to be complex? To make Icon Finder code flexible.

## Interaction between packages {#packages}

Code is split into multiple separate packages to separate functionality. See [packages documentation](../index.md).

Components package re-uses data from other packages:

- It uses core package to do all API stuff.
- It uses theme package for configuration. Components take icons and color rotation from theme.
- Components can be swapped with custom components from Icon Finder implementation. See [custom components](./custom-components.md) tutorial.

Configurator does all the building and replacing, then prepares components package, so you can just include `[file]Container.svelte` in your project.

## How is it done? {#process}

Building has 2 steps:

- Creating configuration.
- Applying configuration.

### Creating configuration

Configuration is stored in file `[file]configurator.json` in your project. It contains:

- Global configuration:
  - Names of theme and components packages. This makes it possible to use custom theme and components when building stuff, but only as long as they are stored in the same monorepo.
  - Theme name within theme package, if theme package has multiple themes.
  - Configuration for custom Iconify API providers, making it possible to use Icon Finder with third party API.
  - Directory with custom component files, making it possible to change some components without altering components package.
- Configuration for components package that change layout.

For more details [see configuration documentation](./config.md).

Configurator package does the following:

- Generates configuration by
  - Merging your custom `[file]configurator.json` with the default configuration.
  - Merges it with configuration from the selected theme.
- Extracts list of replacements and custom files for the components package.
- Saves it to `[file]config/current.json` in the components package.

### Applying configuration

Configuration is used by components package build process to swap or customize components.

#### Modifying Svelte files

In the first step, components build script prepares all files.

Sources:

- Directory `[file]src` of components package.
- Your [custom components](./custom-components.md).

Target: directory `[file]src-configured` of components package.

Build script scans those directories, copies all files to target directory, modifying contents.

This step is where configuration is applied to components. If you open component files, you'll notice code like this:

```js
// @iconify-replacement: 'canShowProviders = true'
const canShowProviders = true;
```

and this:

```js
// @iconify-replacement: '/footer/Simple.svelte'
import Footer from './footer/Simple.svelte';
```

Those are replacements that depend on configuration. Build script finds them and replaces code on next line.

For example, if your project has option `[prop]common.providers.show` set to `[bool]false`, first example will be replaced with this:

```js
const canShowProviders = false;
```

If you set footer component in `[prop]components.footer.components.footer` option to `[str]full`, second example will be replaced with this:

```js
import Footer from './footer/Full.svelte';
```

Why is it done? To make components flexible. Replacing import statements make it possible to set components during compilation instead of including tons of unused components, so compiled package includes only components that are used.

#### Compiling

After build script generates `[file]src-configured`, it runs TypeScript to compile files to directory `[file]lib`.

All these actions are done inside components package, not in your project's directories.

#### Result

As a result, you get prepared components in directory `[file]lib` of components package. They are configured, merged with your custom components and are ready to be used in your project.

When including main component, you should import `[prop]Container` from `[file]@iconify/search-components/lib/ui/Container.svelte`. You should not import any other components.

Compiled TypeScript files do have matching `[file].d.ts` files, so you can import types from `[file]@iconify/search-components/lib/` directory.

### Building

Building final result should be done in your project's build process. You can look in various projects in `[file]ui` directory for examples. Most projects use Rollup to build everything.

Make sure your project has the following development dependencies in `[file]package.json`:

```json
{
	"devDependencies": {
		"@iconify/search-components": "0.0.0-dev",
		"@iconify/search-configurator": "0.0.0-dev",
		"@iconify/search-core": "0.0.0-dev",
		"@iconify/search-themes": "0.0.0-dev"
	}
}
```

Those dependencies cannot be installed because they are private. Add lines to your `[file]package.json` then run `[bash]npm run bootstrap` in root directory of repository to install them. Lerna will create symbolic links to those packages.

See README.md in [Icon Finder repository](https://github.com/iconify/icon-finder) to understand how to use big monorepo.
