This is a basic component, it cannot retrieve icon data from Iconify API. That means you need to provide icon data yourself.

All icons available with Iconify components and Iconify SVG framework can be imported from NPM packages.

Each icon set has its own package that you need to install. Package names start with `[npm]@iconify-icons/`, followed by icon set prefix, such as `[npm]@iconify-icons/mdi`.

Each icon is stored in a separate file, so only icons you import are bundled. To import an icon, combine package name and icon name in import statement.
