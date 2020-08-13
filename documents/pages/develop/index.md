```yaml
title: Iconify for Developers
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
```

# Iconify for developers

Iconify is the most versatile icon framework available. It was originally designed to replace outdated icon fonts with modern SVG framework, while offering ease of use that icon fonts are famous for. Since then Iconify has evolved. It offers more icons than any other solution and various components for web app frameworks.

This section of documentation covers various ways to add icons to HTML documents and web applications.

This documentation assumes you have some familiarity with Iconify. If you are not familiar with Iconify, you are probably looking for [Iconify SVG framework documentation](../implementations/svg-framework/index.md).

## Sources and implementations

Iconify is designed to be very flexible. Logically it is split into two parts: [sources](../sources/index.md) and [implementations](../implementations/index.md).

Source provides icon data.

Implementation renders icon data.

## Sources

There are 3 types of icon sources:

- [Iconify API](../sources/api/index.md) is used to load icon data on demand, however it requires visitors to be online to be able to access API.
- [Bundled icons](../sources/bundles/index.md) can work without internet access, so they are usable for offline applications. Downside is it requires a bit more work for developers.
- [Icon components](../sources/npm/index.md) are icon packages that contain one icon per packages. They are designed to be imported in [Iconify components](../implementations/components/index.md).

All icon sources offer over 60k icons. SVG framework and some components support all icon sources, however few icon components only support [icon components](../sources/npm/index.md).

See [icon sources](../sources/index.md) for more information.

## Implementations

Main implementation is [Iconify SVG Framework](../implementations/svg-framework/index.md). It was designed to be a modern replacement for outdated icon fonts. It works with [Iconify API](../sources/api/index.md), [bundled icons](../sources/bundles/index.md) and [icon components](../sources/npm/index.md).

Additionally, various components are available:

`include implementations/components`

See [Iconify implementations](../implementations/index.md) for more information.
