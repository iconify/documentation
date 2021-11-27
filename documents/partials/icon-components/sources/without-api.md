If you want to make sure icon data is always available and component is usable offline, do not rely on Iconify API. Even though Iconify API servers have redundancies built in to provide as stable experience as possible, internet is never 100% reliable.

SVG framework and all components have alternative bundles without API support. They rely on developer providing icon data. They are a bit harder to work with because you need to bundle icon data with package. These components get icon data from [individual icon packages](/icons/icons.md) and [icon bundles](/icon-components/bundles/index.md).
