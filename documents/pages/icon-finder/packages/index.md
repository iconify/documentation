```yaml
title: Iconify Icon Finder Packages
```

# Iconify Icon Finder packages

This document explains structure of packages in [Icon Finder source](http://github.com/iconify/icon-finder). It is for developers that want to create custom Icon Finder forks.

Icon Finder is designed to be flexible. It can be used to create custom icon search applications. Icon Finder is available as a basic set of:

- Svelte components, which you can configure.
- Theme written in SASS that you can customize.
- Flexible build process that you can customize.

## Requirements {#main-requirements}

This tutorial is very technical. To understand it, you need to:

- Have some knowledge of Node.js and ability to execute commands.
- Understand basics of monorepo and Lerna. You can learn basic concepts in just few minutes.

## Branches

Icon Finder repository is split into multiple branches of the [Icon Finder repository](https://github.com/iconify/icon-finder). You should clone repository or branch, customize it, build Icon Finder and publish it in your own GitHub repository. This makes it easy to keep your code up to date and to customize everything.

Branches:

- [Core](#core) does all the heavy parsing: sending API queries, parsing results.
- [Svelte](#base-svelte) package contains base set of Svelte components and Iconify theme.

## Core {#core}

Core package is the main part of Icon Finder. It handles all actions, sends API requests, parses and organizes data and tells UI what to display.

By default, code flow is completely asynchronous. When something changes, events are used send data to components package to render.

Package is written in TypeScript for strict type checking and has a lot of unit tests to make sure it all works correctly.

Core package can be used in the following environments:

- Browser. It uses Fetch API to send API queries.
- Node.js. It can use Axios to send API queries ([see documentation](./core/node-js.md)).

You can also code custom module that sends API queries for any other environment.

For more details, see [documentation for Icon Finder Core](./core/index.md).

## Svelte components {#base-svelte}

Branch [`[str]"base-svelte"`](https://github.com/iconify/icon-finder/tree/base-svelte) contains set of Svelte components and stylesheet.

Components are responsible for displaying data to visitor. They rely on the core package to do all the heavy work, such as sending API queries and parsing data.

UI is written in Svelte. Why no React or Vue? Because Svelte is lighter and does not have dependencies.

For more details, see [documentation for Icon Finder Svelte components](./base-svelte/index.md).
