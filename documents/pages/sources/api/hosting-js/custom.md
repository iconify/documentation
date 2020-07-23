```yaml
title: Hosting Iconify API in a Custom Environment
navigation: ./index.md
standalone: true
```

# Hosting API in a custom environment

This tutorial is a part of [Iconify API installation instructions](./index.md). It explains how to install [Iconify API](../index.md) in a custom environment. This also applies to localhost installations.

First, you need to configure API.

## Port

By default, script runs on port `[num]3000`. You might need to change it. There are 2 ways to change port:

- Set environment variable `[str]PORT`.
- Change `[prop]port` value in `[file]config.json`.

You can use environment variable in command line when starting API:

```bash
PORT=3000 npm start
```

To change port in `[file]config.json`, add `[prop]port` property:

```json
{
	"port": 3000
}
```

## Upload files

Unless you are testing API on localhost, upload all files on server.

Then install dependencies by running `[bash]npm install --production`.

## Start API

To start API, you need to run `[bash]node app` or `[bash]npm start`. Both commands will run `[file]app.js`.

To make sure application runs without interruption, use [pm2](https://github.com/Unitech/PM2/) or similar Node.js process manager to run application.

## Reverse proxy and HTTPS {#reverse-proxy}

Running API on port `[num]3000` without reverse proxy is fine for localhost development, but it is not fine for production API.

In production environment you want stability and HTTPS support. Node.js server is very basic, it cannot handle that. Reverse proxy allows you to add HTTPS support, add security features such as rate limiting.

You can hide Node.js application behind reverse proxy. What reverse proxy does is, it handles HTTP and HTTPS requests, forwards them to Node.js application and returns response to customer. It is useful if you want to:

There are several ways to install reverse proxy. Due to complexity, this section is split into separate document.

See [setting up reverse proxy](./reverse-proxy.md).
