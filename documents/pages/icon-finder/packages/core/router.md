```yaml
title: Router in Iconify Icon Finder Core
types:
  PartialRoute: ./routes.md
  Route: ./routes.md
  IconsList: ./types.md#icons-list
  Icon: ./types.md#icon
```

# Router in Iconify Icon Finder Core

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

Every view has a route associated with it. Route makes it easy to save and restore Icon Finder state, so visitor can continue browsing page from the previous session.

A route is a simple object of type `[type]PartialRoute` describing the current view. It has a route type, set of parameters and optional parent route. For more details about route types and parameters, see [routes documentation](./routes.md).

Routes are handled by `[type]Router` instance. To access `[type]Router` instance, use `[prop]router` property of `[type]IconFinderCore` instance or `[prop]router` property of `[type]Registry` instance:

```js
const router = core.router;
```

```js
const router = registry.router;
```

`[class]Router` has the following methods and properties:

- `[prop]route`, `[type]PartialRoute`. Current route. You can change route by changing value.
- `[prop]defaultProvider`, `[type]string`. You can use this to set default API provider when navigating to home page.
- `[func]home()`. Navigates to home page.
- `[func]action()`. Run action on the currently visible view.
- `[func]setCustomIcons()`. Set icons list for a custom view. Works only if a custom view is currently visible or is being loaded. It is intended to be used to manipulate icons list while custom view is active.
- `[func]getCustomIcons()`. Same as `[func]setCustomIcons()`, but returns current data instead of setting new data.

Functions and properties that are meant for internal use:

- `[func]render()`. Renders visible view, the same as the data sent to the render callback, so it is a bit redundant.
- `[func]createChildView()`. Creates new child view from route.
- `[func]setParentView()`. Navigate few levels up in parent views tree. Identical to `[js]action('parent', 1)`.

## route

Property `[prop]route` can access or change current route. See [routes documentation](./routes.md) for details.

## defaultProvider

Property `[prop]defaultProvider` is used to set default API provider. It affects only `[func]home()` function.

## home

Function `[func]home()` is used to navigate to home route. Home route [is set in configuration](./config.md) and is affected by `[prop]defaultProvider`.

By default, home route is:

```json
{
	"type": "collections"
}
```

## action

Runs an action on the currently visible view. It has 2 parameters:

- `[prop]action`, `[type]string`. Action name.
- `[prop]value`. Value, type is specific to action.

For more information, see [actions documentation](./actions.md).

## setCustomIcons

Updates list of icons in a custom view. Custom view must be visible or pending or function will fail.

It has 2 parameters:

- `[prop]customType`, `[type]string`. Custom view type, such as `[str]recent`.
- `[prop]icons`, `[type]IconsList`. List of icons.

For more details about custom views, see [custom views documentation](./custom-view.md).

## getCustomIcons

Same as `[func]setCustomIcons()` above, but has only `[prop]customType` parameter.

Returns list of icons as array of `[type]Icon` objects.

## render

Returns list of blocks for the current view, same as first parameter of the render callback.

This function is redundant because you already have all data available from render callback and is meant to be used internally when calling render callback.

For more details, check out [IconFinderCore documentation](./core.md), [render callback documentation](./render.md), [blocks documentation](./blocks.md).

## createChildView

Creates a child view. It has 2 parameters:

- `[prop]route`, `[type]PartialRoute`. Route for child view.
- `[prop]parentLevels`, `[type]number`. Optional number of levels to go up the parent routes tree before adding new child view. If set and is above `[num]0`, this would be identical to going up the parent views tree few levels up then adding a new child view.

## setParentView

Navigates few levels up the parent routes tree. Optional parameter is the number of levels to go up, the default value is `[num]1`.
