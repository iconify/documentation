```yaml
title: Routes in Iconify Icon Finder
types:
  Router: ./router.md
```

# Routes in Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder Core tutorial](../index.md).

Every view has a route associated with it. Route makes it easy to save and restore Icon Finder state, so visitor can continue browsing page from the previous session.

A route is a simple object of type `[type]PartialRoute` describing the current view. It has a route type, set of parameters and optional parent route.

For example, this route represents collections list:

```json
{
	"type": "collections"
}
```

Each route can have parameters object, which is optional for icon sets list but is required for other route types.

For example, this route represents displaying second page (pages start with 0) of collection `[str]mdi`:

```json
{
	"type": "collection",
	"params": {
		"prefix": "mdi",
		"page": 1
	}
}
```

In this example route represents searching collection `[str]mdi` for icons that contain `[str]arrow` and are part of the `[str]Account / User` category:

```json
{
	"type": "collection",
	"params": {
		"prefix": "mdi",
		"filter": "arrow",
		"tag": "Account / User"
	}
}
```

Each route can have the parent route. For example, this is what route looks like if you browsed collections list, then searched for `[str]home`, then from search results selected `[str]ant-design` collection to show only icons that belong to that collection:

```json
{
	"type": "collection",
	"params": {
		"prefix": "ant-design",
		"filter": "home"
	},
	"parent": {
		"type": "search",
		"params": {
			"keyword": "home"
		},
		"parent": {
			"type": "collections"
		}
	}
}
```

## Types

There are 5 types of routes. Almost all of them have required parameters:

- `[str]collections`: Shows list of collections. No required parameters.
- `[str]collection`: Shows one collection. Required parameter: `[prop]prefix` that matches icon set prefix.
- `[str]search`: Shows search results. Required parameter: `[prop]keyword` that contains a phrase to search for. Search is case-insensitive.
- `[str]custom`: Shows custom icons list (more about custom views below). Required parameter: `[prop]customType`.
- `[str]empty`: Shows empty content. This is used if you want UI to display only the footer. No parameters.

### Collections

Collections list route is represented by type `[type]CollectionsRoute` and has the following optional parameters:

- `[prop]filter`, `[type]string`. Used for searching collections list. The default value is an empty string `[str]""`.
- `[prop]category`, `[type]string | null`. Used to show icon sets only from one category. The default value is `null`.

### Collection

Collection route is represented by type `[type]CollectionRoute` and has one required parameter:

- `[prop]prefix`, `[type]string`. Icon set prefix.

It also has the following optional parameters:

- `[prop]filter`, `[type]string`. Keyword to filter icons. The default value is an empty string `[str]""`.
- `[prop]page`, `[type]number`. Current page number. The default value is `[num]0`.
- `[prop]tag`, `[type]string | null`. Tag filter. If not `null`, only icons that include tag will be shown. Value could be an empty string to show icons that do not have any tag. The default value is `null`.
- `[prop]themePrefix`, `[type]string | null`. Theme prefix. Value is a theme name, not an actual prefix. See the [Prefixes and Suffixes](#prefixes-suffixes) section below. The default value is `null`.
- `[prop]themeSuffix`, `[type]string | null`. Same as above, but for the suffix.

### Search

Search results route is represented by type `[type]SearchRoute` and has one required parameter:

- `[prop]search`, `[type]string`. Search keyword. Value is case-insensitive and cannot be empty.

It also has the following optional parameters:

- `[prop]page`, `[type]number`. Current page number. The default value is `[num]0`.
- `[prop]mode`, `[type]boolean`. `[bool]True` if more results are available. The default value is `true` for pages `[num]0` and `[num]1`, `false` for other pages.

By default, Icon Finder will retrieve only the first 2 pages of results from API. This is done to reduce the load on API because often visitors don't look further than the first page. Additional results can be retrieved by changing the current page to 2 (or higher).

### Custom

Custom icons list route is represented by type `[type]CustomRoute` and has one required parameter:

- `[prop]customType`, `[type]string`. Custom page type. Value is used to tell the difference between various custom icon lists. For example, value for recent icons list can be `[str]recent`, value for bookmarked icons can be `[str]bookmarks`.

It also has the following optional parameters:

- `[prop]filter`, `[type]string`. Keyword to filter icons. The default value is an empty string `[str]""`.
- `[prop]page`, `[type]number`. Current page number. The default value is `[num]0`.

For more information about a custom view, see [custom view documentation](./custom-view.md).

## Prefixes and suffixes {#prefixes-suffixes}

The collection route can have theme prefix and/or suffix. They define icon variations based on part of icon name, such as Filled and Outline variations of the same icon.

Theme prefixes and suffixes have 2 properties:

- `[prop]prefix` (or `[prop]suffix`), `[type]string`. This is a prefix or suffix part of icons name, such as `[str]baseline-` or `[str]-outline`.
- `[prop]title`, `[type]string`. Title to show, such as `[str]Baseline` or `[str]Outline`.

In all filters in all routes, the `[prop]title` is used as a value, not `[prop]prefix`/`[prop]suffix`. So for example, if in an icon set there is a prefix with value `[str]round-` and the title `[str]Round`, the route would have `[str]Round` as prefix:

```json
{
	"type": "collection",
	"params": {
		"prefix": "ic",
		"themePrefix": "Round"
	}
}
```

Icon set can use both prefixes and suffixes at the same time, however, as of time when this documentation was created, no icon set does that. Icon sets usually use only prefix or suffix.

## Router

Routes are handled by `[type]Router` instance. See [Router documentation](./router.md) for details.
