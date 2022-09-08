```yaml
title: Blocks in Iconify Icon Finder
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./routes.md
types:
  IconifyInfo: ../../../types/iconify-info.md
  Icon: ./types.md#icon
  CollectionInfo: ./types.md#collection-info
  CollectionsFilterBlock: '#collections-filter'
  FiltersBlock: '#filters'
  CollectionsListBlock: '#collections-list'
```

# Blocks in Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

When rendering a view, it generates blocks that should be displayed by UI. Each block represents one set of data that can be passed as parameters to appropriate React component (or component of any other framework), making it easy to detect changes and update only components that should be updated.

For example, when browsing the collections list, UI needs to render the following blocks:

- `[prop]filter`, `[type]CollectionsFilterBlock`. This block represents the search field to filter collections.
- `[prop]categories`, `[type]FiltersBlock`. This block represents the categories' filters.
- `[prop]collections`, `[type]CollectionsListBlock`. This block represents the collections list.

Each block has a corresponding type, making it easy to use with TypeScript. To easily identify any block, each block has property `[prop]type`.

To check if block is empty use function `[func]isBlockEmpty(block: Block): boolean` that works with all block types:

```js
if (!isBlockEmpty(blocks.icons)) {
	// Render icons block
}
```

All types can be imported from the main file or from `[file]lib/blocks/{block-type}.js` and `[file]lib/blocks/types.js`

`[func]isBlockEmpty()` can be imported from the main file or `[file]lib/blocks/types.js`

There are several types of blocks:

## Collection info {#collection-info}

Block information:

- Block type: `[str]collection-info`.
- TypeScript type: `[type]CollectionInfoBlock`.

This block shows information about icons set. It is available only in a collection view.

Example of collections list data:

```json
{
	"type": "collection-info",
	"prefix": "fa-regular",
	"info": {
		"prefix": "fa-regular",
		"name": "Font Awesome 5 Regular",
		"total": 151,
		"version": "5.12.0",
		"author": {
			"name": "Dave Gandy",
			"url": "https://fontawesome.io/"
		},
		"license": {
			"title": "CC BY 4.0",
			"spdx": "",
			"url": "https://creativecommons.org/licenses/by/4.0/"
		},
		"samples": ["bell", "comment", "hand-point-left"],
		"category": "General",
		"palette": false,
		"height": 32,
		"displayHeight": 16
	}
}
```

`[prop]prefix` is always available, but the `[prop]info` object might not be available if API did not include information in response.

### Icon set info

Icon set information, if available, is stored in `[prop]info` object.

See `[type]IconifyInfo` for details.

`include types/collection-info`

## Collections filter {#collections-filter}

Block information:

- Block type: `[str]collections-filter`.
- TypeScript type: `[type]CollectionsFilterBlock`.

This is a special block used only in the collections list. It displays the search form.

Value is a simple object with only one property: `[prop]search`.

Example:

```json
{
	"type": "collections-filter",
	"search": "arrow"
}
```

## Collections list {#collections-list}

Block information:

- Block type: `[str]collections-list`.
- TypeScript type: `[type]CollectionsListBlock`.

This block represents collections list, used only in the collections list view. It is one of the biggest blocks.

Example:

```json
{
	"type": "collections-list",
	"showCategories": true,
	"collections": {
		"General": {
			"mdi": {
				"prefix": "mdi",
				"name": "Material Design Icons",
				"total": 4882,
				"version": "",
				"author": {
					"name": "Austin Andrews",
					"url": "https://github.com/Templarian/MaterialDesign"
				},
				"license": {
					"title": "Open Font License",
					"spdx": "",
					"url": "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/LICENSE"
				},
				"samples": ["account-check", "bell-alert-outline", "calendar-edit"],
				"category": "General",
				"palette": false,
				"height": 24,
				"displayHeight": 24,
				"index": 0
			},
			"mdi-light": {
				"prefix": "mdi-light",
				"name": "Material Design Light",
				"total": 267,
				"version": "",
				"author": {
					"name": "Austin Andrews",
					"url": "https://github.com/Templarian/MaterialDesignLight"
				},
				"license": {
					"title": "Open Font License",
					"spdx": "",
					"url": "https://raw.githubusercontent.com/Templarian/MaterialDesignLight/master/LICENSE.md"
				},
				"samples": ["cart", "home", "login"],
				"category": "General",
				"palette": false,
				"height": 24,
				"displayHeight": 24,
				"index": 1
			},
			"ic": {
				"prefix": "ic",
				"name": "Google Material Icons",
				"total": 5680,
				"version": "",
				"author": {
					"name": "Material Design Authors",
					"url": "https://github.com/cyberalien/google-material-design-icons-updated"
				},
				"license": {
					"title": "Apache 2.0",
					"spdx": "",
					"url": "https://github.com/cyberalien/google-material-design-icons-updated/blob/master/LICENSE"
				},
				"samples": [
					"baseline-notifications-active",
					"outline-person-outline",
					"twotone-videocam-off"
				],
				"category": "General",
				"palette": false,
				"height": 24,
				"displayHeight": 24,
				"index": 2
			}
		},
		"Emoji": {
			"noto": {
				"prefix": "noto",
				"name": "Noto Emoji",
				"total": 2807,
				"version": "",
				"author": {
					"name": "Google Inc",
					"url": "https://github.com/googlei18n/noto-emoji"
				},
				"license": {
					"title": "Apache 2.0",
					"spdx": "",
					"url": "https://github.com/googlei18n/noto-emoji/blob/master/LICENSE"
				},
				"samples": ["beaming-face-with-smiling-eyes", "computer-mouse", "dove"],
				"category": "Emoji",
				"palette": true,
				"height": 16,
				"displayHeight": 16,
				"index": 46
			}
		}
	}
}
```

This block has 2 properties:

- `[prop]showCategories`, `[type]boolean`. If `false`, UI should not show categories.
- `[prop]collections`. List of collections. Each entry is an object, where the key is category title, value is another object, where the key is the prefix, value is collection information block: `[type]CollectionInfo`.

For more details about `[type]CollectionInfo` type, see [types documentation](./types.md#collection-info).

Helper functions that can be imported from `[file]lib/blocks/collections.js`:

`[func]getCollectionsBlockCategories(block): string[]` retrieves list of categories as array of strings.

```js
const categories = getCollectionsBlockCategories(blocks.collections);
categories.forEach((category) => {
	// do something with category:
	const categoryItems = blocks.collections.collections[category];
	// do something with list of items
});
```

`[func]getCollectionsBlockPrefixes(block): string[]` retrieves list of collection prefixes as array of strings.

```js
const prefixes = getCollectionsBlockPrefixes(blocks.collections);
if (prefixes.indexOf('mdi') !== -1) {
	console.log('Found Material Design Icons!');
}
```

`[func]iterateCollectionsBlock(block, callback)` iterate all collections. Similar to `[js]Array.forEach`, but for collections.

```js
iterateCollectionsBlock(blocks.collections, (info, prefix, category) => {
	// info is CollectionInfo object, same as in 'info' property in collection info block (see above)
	console.log(
		`Found collection ${info.name} with prefix ${prefix} in category ${category}!`
	);
});
```

## Filters {#filters}

Block information:

- Block type: `[str]filters`.
- TypeScript type: `[type]FiltersBlock`.

This block is used in almost all views. This block represents a list of filters, such as categories (collections list, collection view), themes (collection view), collections (search view).

Example:

```json
{
	"type": "filters",
	"filterType": "tags",
	"active": null,
	"filters": {
		"Accessibility": {
			"title": "Accessibility",
			"index": 0,
			"disabled": false
		},
		"Alert": {
			"title": "Alert",
			"index": 1,
			"disabled": false
		},
		"Arrows": {
			"title": "Arrows",
			"index": 2,
			"disabled": false
		},
		"Audio & Video": {
			"title": "Audio & Video",
			"index": 3,
			"disabled": false
		},
		"Vehicles": {
			"title": "Vehicles",
			"index": 50,
			"disabled": false
		},
		"Weather": {
			"title": "Weather",
			"index": 51,
			"disabled": false
		},
		"Writing": {
			"title": "Writing",
			"index": 52,
			"disabled": false
		}
	}
}
```

Block has the following properties:

- `[prop]filterType`, `[type]string`. Type of filter:
  - In collections list: `[str]categories` (list of categories).
  - In collection view: `[str]tags`, `[str]themePrefixes`, `[str]themeSuffixes`.
  - In search view: `[str]collections` (list of collections).
- `[prop]active`, `[type]string | null`. The currently active filter. `null` if none or filter key.
- `[prop]filters`. List of available filters. The object key is used to uniquely identify filter. Value is an object:
  - `[prop]title`, `[type]string`. Filter title, should be used by UI instead of filter key, though they usually match, except for collections list filter in search results.
  - `[prop]index`, `[type]number`. Filter index. If filters have colour rotation, its index should be used to set UI colour.
  - `[prop]disabled`, `[type]boolean`. True if a filter is disabled. A filter is disabled when, for example, a user is searching icons in icon set, filter represents a tag and applying that tag would return 0 results.

In an example above there are 53 filters (most were removed to reduce sample size). Usually, there aren't that many filters, that is an extreme case. UI must make sure all filters are visible, but they don't most important content, which is icons list, hidden below filters, so ideally UI should use `[prop]max-height` and `[prop]overflow` create automatic scrolling for filters block.

## Icons list {#icons-list}

Block information:

- Block type: `[str]collection-info`.
- TypeScript type: `[type]IconsListBlock`.

Icons list is a simple block that shows icons. Only icons displayed on the current page are included (see pagination block).

Example:

```json
{
	"type": "icons-list",
	"icons": [
		{
			"provider": "",
			"prefix": "uil",
			"name": "0-plus",
			"tags": ["User Interface"]
		},
		{
			"provider": "",
			"prefix": "uil",
			"name": "10-plus",
			"tags": ["User Interface"]
		},
		{
			"provider": "",
			"prefix": "uil",
			"name": "android",
			"tags": ["Brand Logos"]
		},
		{
			"provider": "",
			"prefix": "uil",
			"name": "android-alt",
			"tags": ["Brand Logos"]
		},
		{
			"provider": "",
			"prefix": "uil",
			"name": "android-phone-slash",
			"tags": ["User Interface"]
		},
		{
			"provider": "",
			"prefix": "uil",
			"name": "angle-double-down",
			"tags": ["Arrows"]
		}
	]
}
```

This block has only one property: icons, which is an array of `[type]Icon` objects.

Each icon must have `[prop]provider`, `[prop]prefix` and `[prop]name` properties. Other properties are optional.

To convert, validate and compare icons there are several helper functions you can import from the main file or `[file]lib/icon.js`:

`[func]iconToString(icon: Icon): string` converts icon to string.

```js
const icon: Icon = {
	provider: '',
	prefix: 'mdi',
	name: 'home',
};
const name = iconToString(icon);
console.log(name); // "mdi:home"
```

`[func]validateIcon(icon): boolean` checks if icon object is valid.

`[func]stringToIcon(icon: string): Icon` converts string to icon. Returns null on failure.

```js
const icon1 = stringToIcon('mdi:home');
const icon2 = stringToIcon('mdi-home');
if (compareIcons(icon1, icon2)) {
	console.log(
		'mdi:home and mdi-home are identical (which they are because if prefix does not have "-", ":" can be replaced by "-")!'
	);
}
```

`[func]compareIcons(icon1, icon2): boolean` compares icons. Returns true if icons are valid and identical, false if not. See an example above.

## Pagination {#pagination}

Block information:

- Block type: `[str]pagination`.
- TypeScript type: `[type]PaginationBlock`.

Pagination block that is used in all views where icons list is shown, so that's every view except for the collections list.

Example:

```json
{
	"type": "pagination",
	"page": 2,
	"length": 1114,
	"perPage": 52,
	"more": false
}
```

This block has several properties:

- `[prop]page`, `[type]number`. Current page. The first page is 0.
- `[prop]length`, `[type]number`. Total number of icons. This is not the number of pages.
- `[prop]perPage`, `[type]number`. Number of icons to display per page. This value is taken from the Icon Finder configuration. See [configuration documentation](./config.md).
- `[prop]more`, `[type]boolean`. This is used in the search results. See below.

To help with displaying pagination, there are several helper functions:

`[func]maxPage(block): number` returns maximum page number. This is not the number of pages! Number of pages is `[js]maxPage(block) + 1`. For example, you have 4 pages of icons. The first page is `[num]0`, the maximum page returned by `[func]maxPage` is `[num]3`.

```js
let newPage = Math.min(5, maxPage(block);
core.action('pagination', newPage);
```

In actual code, you do not need to check for the maximum page, because core will automatically do that check. The code above is shown only as an example.

`[func]showPagination(block): number[]` return list of pages to show in pagination.

```jsx
const pagination = props.blocks.pagination;
if (!isBlockEmpty(pagination)) {
	const pages = showPagination(pagination);
	let nodes = [];
	let nextPage = 0;
	pages.forEach((page) => {
		if (page > nextPage) {
			// previous page != page -1, so add some dots
			nodes.push(<span key={nextPage}>...</span>);
		}
		nextPage = page + 1;

		nodes.push(
			<a
				key={page}
				href="# "
				onClick={(event) => {
					event.preventDefault();
					core.action('page', page);
				}}
			>
				{page + 1}
			</a>
		);
	});

	return <div>{nodes}</div>;
}
return null;
```

### More pages

By default, Icon Finder will retrieve only the first 2 pages of results from API. This is done to reduce the load on API because often visitors don't look further than the first page.

If `[prop]more` attribute in pagination block is set to `true`, UI should show either third page in pagination or button with text like `[str]Load more results`.

Clicking that button should trigger pagination action with value set to `[num]2` (third page as the number) or `[str]more`:

```js
core.action('pagination', 2);
```

```js
// 'more' is identical to number 2
core.action('pagination', 'more');
```

For more information about actions, see [actions documentation](./actions.md)

## Search

Block information:

- Block type: `[str]search`.
- TypeScript type: `[type]SearchBlock`.

This block displays the search form for icons.

Value is an object with several properties:

- `[prop]keyword`, `[type]string`. Search keyword.
- `[prop]searchType`, `[type]string`. Type of search form.
- `[prop]title`, `[type]string`. Optional title.

Combination of `[prop]searchType` and `[prop]title` are used to display placeholder, hint or button. Example combinations:

- `[prop]searchType` = `[str]collection`, `[prop]title` = `[str]Jam Icons`. Placeholder text you can generate is `[str]Filter Jam Icons...`.
- `[prop]searchType` = `[str]custom`, `[prop]title` = `[str]recent`. Placeholder you can generate is `[str]Filter recent icons list...`.

There are several values for `[prop]searchType`:

- `[str]all`: search all icons. Property `[prop]title` is not used.
- `[str]collection`: search collection. Property `[prop]title` contains icon set name (or prefix, if the icon set name is not available).
- `[str]custom`: search a custom view. Attribute `[prop]title` contains the view type. See [custom view documentation](./custom-view.md).

Example:

```json
{
	"type": "search",
	"keyword": "arrow",
	"searchType": "collection",
	"title": "Material Design Icons"
}
```

## Missing blocks

2 more blocks are not rendered by any view, but should be displayed by UI:

- Search form for searching all icons
- Parent views

### Search form

The search form is present on all pages, so it should be treated as a separate form. UI can decide if the search form should be shown.

All previous search blocks (collections filter, search), are for searching content of the current view. They do not change the current view, so they belong to their views.

The global search form though does not belong to any view, therefore it is not part of any view. UI should not rely on the current view to render search form.

#### Keyword

How to get the current keyword to a global search form?

UI should follow this logic:

- By default, set keyword to empty.
- If the current view type is changed to `[str]search` ([see `[prop]viewChanged` and route properties of render callback](./render.md)), copy keyword from route parameters to search form.
- When search form is submitted, run action `[str]search` on the current view. All views can handle that action.

### Parent views

Parent views tree is also not part of the current view because it is not needed.

When rendering the current view, you have access to the route object. You can use it to render parent views. See [routes documentation](./routes.md).

### Rendering collection in parent views

When you are parsing parent routes and stumble upon collection route, all you have for that route is icon set prefix.

For UI, you want to display icons set name instead of prefix. How to do that?

If you are using `[class]IconFinderCore`, it is simple: it has method `[func]getCollection(provider, prefix): CollectionInfo | null`. It will return `null` if information about icons set is not available, `[type]CollectionInfo` object if the requested information is available:

```js
// Assumes following variables:
//	provider = icon set provider,
//	prefix = icon set prefix,
//	core = IconFinderCore instance.
const info = core.getCollection(provider, prefix);
const title = info === null ? prefix : info.name;
```

Variable `[var]core` is available in the render callback you set when creating a new `[class]IconFinderCore` instance.

What if you are not using `[class]IconFinderCore`? Then you must be using `[class]Registry`. To retrieve icons set information from `[class]Registry` instance, you can do this:

```js
// Assumes following variables:
//	provider = icon set provider,
//	prefix = icon set prefix,
//	registry = Registry instance.
const collections = registry.collections;
const info = collections.get(provider, prefix);
const title = info === null ? prefix : info.name;
```

For details about `[type]CollectionInfo` type, see [types documentation](types.md#collection-info).
