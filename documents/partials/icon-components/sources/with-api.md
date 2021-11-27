All icon components rely on [Iconify API](/api/index.md) to dynamically load icon data as needed.

They fetch icons as needed from Iconify API, so developers do not need to create icon bundles and visitors don't need to load icons that are not rendered. Because of this, Iconify icon components are very easy to use. Developers do not need to keep track of icons used in project.

There are several downsides to using API:

- API requires visitor to be online. [Iconify API](/api/index.md) software is available, so organizations can mitigate it by hosting Iconify API on internal servers. You can also create [icon bundles](/icon-components/bundles/index.md).
- Code is a bit bigger because it includes API support. Difference isn't big, just about 10-15kb.
