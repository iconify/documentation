```yaml
title: 'Svelte Components for Iconify Icon Finder'
wip: true
```

# Svelte components for Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder packages tutorial](../index.md).

Branch [`[str]"base-svelte"`](https://github.com/iconify/icon-finder/tree/base-svelte) of Iconify Icon Finder contains set of Svelte components and stylesheet.

It contains full set of components you need to build custom icon picker.

## Contents

What is in package?

1. Customisable build scripts.
2. Components that are responsible for displaying data to visitor. They rely on [Icon Finder Core](../core/index.md) to do all the heavy work, such as sending API queries and parsing data.
3. Stylesheet that is built with SASS.

## Examples

Few examples of projects that are based on Icon Finder Svelte components. See [projects based on Iconify Icon Finder Svelte components](./examples.md).

## Build scripts

Build scripts are designed to be easy to customise. You can:

- Change locations and names of built files.
- Completely ignore stylesheet and rely on your own instead.
- Add your own stuff to build, such as bundling it all or script to build a plug-in.

You can find build configuration in `[file]build/config.js`. There you can change various filenames. See comments.

You can add custom build scripts to build process by editing `[file]build/all.js`.

## Components

Components are written in Svelte. Why no React or Vue? Because:

- Svelte is lighter.
- Built package does not have dependencies, making it easier to integrate in any environment, even as Vue or React components.

Some components have multiple versions, which you can swap in configuration files.

See [components configuration documentation](./components-config.md) for details.

## Stylesheet

Stylesheet is a basic SASS stylesheet.

Main entry is `[file]src/style-iconify/style.scss`. You can change it in `[file]build/config.js`.

If you are changing stylesheet, you also need to change components configuration in `[file]src/icon-finder/config/theme.ts`.

See [theme configuration documentation](./components-config.md#theme) for details.
