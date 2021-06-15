There are several internal API functions that are exposed. They are intended to be used by implementations that want more control over component, such as Iconify Icon Finder. Use them carefully.

All internal API functions are exposed as properties of `[var]_api` object:

- `[func]getAPI()`. Returns internal API module.
- `[func]getAPIConfig()`. Returns API configuration.
- `[func]setAPIModule(provider)`. Sets API module for provider. This is experimental function intended for custom API providers. API provider functionality is in development.
