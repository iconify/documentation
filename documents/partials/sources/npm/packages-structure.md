Putting so many files in one package would result in massive package, so icons are split into several NPM packages, two packages per icon set:

- One package that uses modern ES6 `[func]export` syntax: `[npm]@iconify-icons/{prefix}`.
- One package that uses CommonJS `[func]module.exports` syntax, which is used by Node.js: `[npm]@iconify/icons-{prefix}`.

where `[str]{prefix}` is icon set prefix.

To import an icon, add icon name after package, for example, icon `[icon]mdi-light:home` can be imported from `[str]'@iconify-icons/mdi-light/home'` (ES module) or `[str]'@iconify/icons-mdi-light/home'` (CommonJS module)

It is recommended that you use ES6 module, recent versions of Node.js do support it. CommonJS are packages for people that use outdated bundler software.
