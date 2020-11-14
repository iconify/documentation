```yaml
title: 'Examples of Iconify Icon Finder Forks'
replacements:
  - code: 'https://github.com/iconify/iconify-figma/tree/dev3'
    value: '${links.figma3-repo}'
```

# Examples of customised Iconify Icon Finder forks

This tutorial is part of [Svelte Components for Iconify Icon Finder tutorial](./index.md).

Few examples of projects that are based on Icon Finder Svelte components.

Forking one base project makes it easy to maintain multiple seemingly unrelated projects. Even though projects have different purpose, they share a lot of code.

## Material Line Icons {#line-md}

[Material Line Icons](https://github.com/cyberalien/line-md) is based on this package.

Package has different configuration, customised components and stylesheet.

Additionally, the following changes were applied to the build script:

- Output directory was changed from `[file]dist` to `[file]assets` in `[file]build/config.js`.
- Custom build scripts for generating SVG and for generating custom stylesheet were added to `[file]build/all.js` as well as new build files.

## Iconify for Figma plug-in {#figma}

[Iconify for Figma](https://github.com/iconify/iconify-figma/tree/dev3) version 3 is also based on this package.

At the moment of writing this documentation, version 3 of plug-in is in development.

Package has different configuration, heavily customised components and a completely different stylesheet.

Build process will also be changed to build plug-in after building Icon Finder.
