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

Implementation renders icon, using data provided by source.

## Sources

There are 3 types of icon sources:

- [Iconify API](../sources/api/index.md) is used to load icon data on demand, however it requires visitors to be online to be able to access API.
- [Bundled icons](../sources/bundles/index.md) are bundles of icon data, which should be bundled with your application, allowing to render icons without internet access. Unlike API, bundles are usable for offline applications. Downside is it requires a bit more work for developers and you need to know which icons your application renders.
- [Icon packages](../sources/npm/index.md) are NPM packages that contain one icon set per package, where icon data is split by one icon per file. They are similar to bundles, but are easier to use.

All icon sources offer over 60k icons.

See [icon sources](../sources/index.md) for more information.

## Implementations

Main implementation is [Iconify SVG Framework](../implementations/svg-framework/index.md). It was designed to be a modern replacement for outdated icon fonts.

Additionally, various components are available:

`include implementations/components`

See [Iconify implementations](../implementations/index.md) for more information.

All implementations can dynamically retrieve icon data from [Iconify API](../sources/api/index.md), can use [bundled icons](../sources/bundles/index.md) and [icon packages](../sources/npm/index.md).
