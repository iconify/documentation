```yaml
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
wip: true
```

# Iconify Documentation

Iconify is a complex platform that is designed to make using icons as easy as possible.

Iconify has several parts:

- Icon sources
- Implementations
- Integrations

## Icon sources

You can use Iconify with any icons. By default, Iconify includes over 60k free icons from various icon sets, including the most popular icon sets.

[Icon sources](../sources/index.md) are split into 2 parts:

- [Iconify API](../sources/api/index.md): icons are loaded on demand from API, requires internet connection.
- [Bundled icons](../sources/bundles/index.md): icons are bundled during the build process, can be used offline.

### Iconify API

`[str]include sources/api/index-short`

`[str]include sources/api/index-documentation`

### Bundled icons

`[str]include sources/bundles/index-short`

## Implementations

Implementations are responsible for rendering icons in documents.

There are two types of implementations:

- Implementations that support Iconify API. There packages support both API and icon bundles.
- Implementations that work without Iconify API. These are minimalist packages that do not include code for dynamically loading icons and rely on icon bundles.

## Integrations

Integrations make it easy to use Iconify when designing websites. They are built on top of the Icon Finder package.

Icon Finder is a script for searching icons. It can be used to find and import icons, which is used in Figma, Sketch and Adobe XD plug-ins. It can be used icon picker, which can be used in various website builders and theme customizers.
