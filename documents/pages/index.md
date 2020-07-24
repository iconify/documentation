```yaml
title: Iconify Documentation
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
wip: true
```

# Iconify documentation

Iconify is the most versatile icon framework available. It was originally designed to replace outdated icon fonts with [modern SVG framework](./implementations/svg-framework/index.md), while offering ease of use that icon fonts are famous for. Since then Iconify has evolved. It offers more icons than any other solution and various components for web app frameworks.

This documentation is split into several parts.

## Iconify for developers {#for-developers}

[Iconify for developers section](./develop/index.md) explains how to use Iconify icons in your project. Iconify is designed to be very flexible.

Developers section is split into two parts: [sources](./sources/index.md) and [implementations](./implementations/index.md). Source provides icon data. Implementation renders icon data.

Most of the documentation assumes you have some familiarity with Iconify. If you are not familiar with Iconify, you are probably looking for [Iconify SVG framework documentation](./implementations/svg-framework/index.md).

### Sources

You can use Iconify with any icons.

By default, Iconify includes over 60k free icons from various icon sets, including the most popular icon sets: Material Design Icons, FontAwesome, Bootstrap Icons, EmojiOne, Noto Emoji and many other icon sets. You can browse all icons by [clicking "Browse Icons" link in navigation](https://iconify.design/icon-sets/).

[Sources section](./sources/index.md) explains where implementations (such as SVG framework or React component) get icon data, show various ways to retrieve icon data.

Sources are split into several parts:

- [Iconify API](./sources/api/index.md). It is used by [SVG framework](./implementations/svg-framework/index.md), [Icon Finder](./icon-finder/index.md) and some components.
- [Bundled icons](./sources/bundles/index.md). You can create icon bundles, making it easy to use Iconify implementations offline.
- [Icon components](./sources/npm/index.md). Similar to icon bundles, but uses different approach. This is used by most components, such as [React](./implementations/react/index.md), [Svelte](./implementations/svelte/index.md) and [Vue](./implementations/vue/index.md) components.

### Implementations

[Implementations](./implementations/index.md) are responsible for rendering icons.

[Iconify SVG framework](./implementations/svg-framework/index.md) is a modern replacement for icon fonts.

In addition to SVG framework, Iconify offers components for several popular frameworks:

`include implementations/components`

## Iconify for designers {#for-designers}

[For designers section](./design/index.md) is for UI designers.

Iconify offers plug-ins for popular software:

`include design/plugins`

## Integration

Integration section is in development.

It will include documentation for [Iconify Icon Finder](./icon-finder/index.md) and related tools that can help integrate Iconify into other projects.

## Code

Code section contains documentation that should help developers create custom solutions.

It covers several topics:

`include code/sections`
