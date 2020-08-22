Icons in icon packages are ES modules.

Sometimes you might need CommonJS module, for example, when importing icon data in Node.js.

There are alternative icon packages that use CommonJS modules: `[npm]@iconify/icons-*`. Icons are identical, the only difference is export method. To swap from ES package to CommonJS package, use `[str]@iconify/icons-` before icon set prefix in package name instead of `[str]@iconify-icons/`.

For example, Material Design Icons are available as `[npm]@iconify-icons/mdi` with ES exports, as `[npm]@iconify/icons-mdi` with CommonJS exports.
