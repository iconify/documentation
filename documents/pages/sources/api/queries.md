```yaml
title: Iconify API Queries
wip: true
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
```

# Iconify API queries

This tutorial is for developers that want to create their own tools to access Iconify API.

Iconify API has several types of queries:

- Query to retrieve icon data.
- Query to render SVG.
- Administrative queries.
- Search queries.

Documentation below is not complete. For now it just lists queries, more details will be added later.

## JSONP responses

API supports JSON and JSONP responses.

JSON response returns data in JSON format:

```yaml
hint: /mdi.json?icons=account-box,account-cash,account,home&pretty=1
src: sources/api/mdi.json
```

JSONP response is similar to JSON, but it returns a JavaScript file. JSON response is wrapped in a callback. What's the point of JSONP? No need to deal with CORS settings, easy to use, works with very old browsers. Just set up a global callback in visitor's browser, add `[tag]script` tag and wait for callback to be called.

[Iconify SVG Framework version 1.0](../../implementations/iconify1/index.md) uses JSONP to retrieve icon data. Newer versions use Fetch API, but with JSONP as a backup for browsers that do not support Fetch API.

Example of a JSONP response:

```yaml
hint: /mdi.js?icons=account-box,account-cash,account,home&pretty=1&callback=Iconify.addCollection
src: sources/api/mdi.js
```

By default, API will return JSON data. If you want a JSONP response, do this:

- Add `[prop]callback` parameter.
- If query ends with `[str].json`, replace it with `[str].js` (this is used in queries to retrieve icon data).

Examples:

- JSON query: `[url]/mdi.js?icons=home&callback=Iconify.addCollection`
- JSONP query: `[url]/mdi.json?icons=home`

## Common parameters

All JSON and JSONP queries have several common parameters:

- `[prop]callback` is used for JSONP queries. It is mandatory for most JSONP queries.
- `[prop]pretty` is used to format JSON data, making it easy to read. Set to `[number]1` or `[bool]true` to enable.

## Query to retrieve icon data

To retrieve icon data, use `[url]{prefix}.json?icons={icons}`.

Replace `[str]{prefix}` with icon set prefix.

You cannot request data for multiple icon sets in same query. It is one query per icon set.

Number of icons per query is not limited, however be aware that browsers have limit on URL length. Iconify implementations, such as [Iconify SVG Framework](../../implementations/svg-framework/index.md), limit URL length to 500. If URL is longer than 500 characters, API query is split into multiple queries.

Parameters:

- `[prop]icons` is list of icons, without prefix. Separate icon names with comma. It is better to sort icon names alphabetically to make sure they are always requested in the same order. This way there is a chance browser will find matching query in cache and return cached response.

Examples:

- `[url]/mdi.json?icons=account-box,account-cash,account,home`
- `[url]/fa-regular.js?icons=circle,check-circle,comments,dot-circle&pretty=1&callback=Iconify.addCollection`

API returns `[type]IconifyJSON` object.

Example:

```yaml
hint: /uil.json?icons=cake,lock,lock-open-alt&pretty=1
src: sources/api/uil.json
```

## Other queries

Other queries will be added to documentation later.

Queries to get SVG:

- `[url]/{prefix}/{name}.svg` will render SVG. It has many parameters: `[prop]width`, `[prop]height`, `[prop]color` and many others. Special parameters are `[prop]box=1` to add empty rectangle that matches `[attr]viewBox` and `[prop]download=1` that will add headers that will force browser to download icon.

Icon finder queries:

- `[url]/collections` will return list of available collections.
- `[url]/collection?prefix={prefix}` will return list of icons in a collection.
- `[url]/search?query={query}` will search icons. By default, API will return only up to 64 results, you can set limit up to 999 by adding `[prop]limit` parameter. You can also set prefixes that you want to search by adding `[prop]prefixes` parameter with comma separated list of prefixes.
