Some implementations support [Iconify API](/sources/api/index.md).

They fetch icons as needed from API, so developers do not need to create icon bundles. Because of this, such implementations are very easy to use. Developers do not need to keep track of icons used in project.

There are several downsides to using API:

- API requires visitor to be online. [Iconify API](/sources/api/index.md) software is available, so organizations can mitigate it by hosting Iconify API on internal servers. You can also create [icon bundles](/sources/bundles/index.md).
- Code is a bit bigger because it includes API support. Difference isn't big, just about 10-15kb, depending on implementation.
