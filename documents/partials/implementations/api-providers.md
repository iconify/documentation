API providers allow using icons from multiple API in the same document. For example, you can use default Iconify icons and custom icons from IconScout or Icons8 or custom API.

To support providers, syntax for icon names have been extended. Usually, syntax contains prefix and icon name: `[icon]prefix:name`. To specify API provider in icon syntax, add it before prefix with `[str]@` before provider ID: `[icon]@provider:prefix:name`.
