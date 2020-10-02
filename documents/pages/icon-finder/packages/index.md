```yaml
title: Iconify Icon Finder Packages
```

# Iconify Icon Finder packages

This document explains structure of packages in Icon Finder source. It is for developers that want to create custom Icon Finder implementations.

Icon Finder is designed to be flexible. It can be used to create custom icon search applications.

How is it achieved?

- Components have options that can be customised during build process.
- Implementations can override components with their own, adding custom functionality.

Those features make build process flexible, but also very complex. To make code easier to organize, core is split into several packages. All packages are stored in the same monorepo.

This tutorial is written to help you understand package structure.

## Requirements {#main-requirements}

This tutorial is very technical. To understand it, you need to:

- Have some knowledge of Node.js and ability to execute commands.
- Understand basics of monorepo and Lerna. You can learn basic concepts in just few minutes.

## Packages

Icon Finder packages are found in `[file]packages` directory of the [Icon Finder repository](https://github.com/iconify/icon-finder).

Packages:

- [Core](#core) does all the heavy parsing: sending API queries, parsing results.
- [Themes](#themes) package contains stylesheets and configuration for multiple themes.
- [Components](#components) package contains customizable Svelte components that are used to build UI.
- [Configurator](#configurator) package configures and builds other packages. It is used in the build process.

Those are packages that most Icon Finder implementations are based on. For examples of how they are implemented, look in `[file]ui` directory of Icon Finder repository.

### Dependencies

All packages, except for [the components package](#components) do not depend on other packages. They can be compiled and tested separately.

However, [components package](#components) uses other packages:

- [Core package](#core) is used by components to do all API stuff.
- [Theme configuration](#themes) is used by components for list of icons and colors rotation.

[Configurator package](#configurator) puts it all together. It compiles configuration for implementation, then runs build processes of other packages to build them according to implementation specification.

## Core {#core}

Core package is main part of Icon Finder. It handles all actions, sends API requests, parses and organizes data and tells UI what to display.

Code is completely asynchronous, it uses callbacks to send data to components package to render. Package is written in TypeScript for strict type checking.

Core package can be used in the following environments:

- Browser. It uses Fetch API to send API queries.
- Node.js. It uses Axios to send API queries.

You can also code custom module that sends API queries for any other environment.

For more details, see [core package documentation](./core/index.md).

## Themes {#themes}

Themes package contains stylesheet.

However, it is not a simple stylesheet. Themes have configuration files, which contain the following data:

- Color rotations. It is used by components to set different colors for different icon sets, categories, prefixes, etc...
- Various toggles that define what theme supports.
- List of icons that should be used by components.

Configuration is used by the components package.

## Components {#components}

Components package is responsible for displaying data to visitor. It relies on the core package to do all the heavy work, such as sending API queries and parsing data and uses configuration from themes package.

UI is written in Svelte. Why no React or Vue? Because Svelte is lighter and does not have dependencies.

### Phrases {#phrases}

Phrases are a part of components package.

It is easy to swap language pack during compilation by changing `[prop]components.language` property in `[file]configurator.json`.

See [phrases documentation](./components/phrases.md) and [build process documentation](./build/index.md).

### Requirements {#components-requirements}

Components documentation is more technical. In addition to requirements for this tutorial, you need:

- Good JavaScript knowledge.
- Basic Svelte knowledge. If you are familiar with React or Vue, Svelte will not be hard to understand.
- Basic TypeScript knowledge. Many files are written in TypeScript.
- Understanding of asynchronous development.

## Configurator {#configurator}

Configurator is a script that builds it all.

It reads `[file]configurator.json` file in implementation, merges it with default values to build custom configuration. Then it (re)builds core, theme and components.

## Building

Packages mentioned above are parts that are used to build Icon Finder.

Other packages are implementations that use all mentioned above packages to build various Icon Finder implementations.

Build process is documented in the [build process documentation](./build/index.md).
