If you want to make sure icon data is always available, do not rely on Iconify API. Even though Iconify API servers have redundancies built in to provide as stable experience as possible, internet is never 100% reliable.

Implementations without API support rely on developer providing icon data. They are a bit harder to work with because you need to bundle icon data with package. These components get icon data from [icon components](/sources/npm/index.md).

Implementations with API support can also function without API. They do support [icon bundles](/sources/bundles/index.md) and [icon components](/sources/npm/index.md).
