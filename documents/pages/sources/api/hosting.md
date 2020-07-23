# Hosting Iconify API

This article explains how to host Iconify on your server, so your website does not rely on Iconify public API servers.

[Iconify API](./index.md) software is available in 2 versions: Node.js and PHP

If you can, use Node.js version.

Node.js implementation is slightly faster. This is because in Node.js server uses one persistent process and all data is already in memory, so everything is ready for each request. PHP needs to load data on every request. PHP version has cache to improve speed, but it is still slower than Node.js.

## Source code

Everything you need is available at [Iconify GitHub repositories](https://github.com/iconify):

- [Node.js version of Iconify API](https://github.com/iconify/api.js)
- [PHP version of Iconify API](https://github.com/iconify/api.php)
- [Default icon data](https://github.com/iconify/collections-json)

## PHP

PHP version of API is easier to install.

See [Iconify API: PHP](./hosting-php/index.md) for installation and configuration instructions.

## Node.js {#node}

Node.js version of API is harder to install, but it is faster, so try it if you can.

See [Iconify API: Node.js](./hosting-js/index.md) for installation and configuration instructions.

## Servers network

Iconify public API is hosted on multiple servers that form custom CDN. They are located in different parts of the world and visitors are always redirected to the closest server.

Host does CDN help? By connecting visitors to the closest server, latency is greatly reduced:

- Visitors from US are connected to one of servers located on different sides of the US.
- Visitors from Europe are connected to server in UK or server in Germany.
- For visitors from Asia there are servers in Singapore and Japan.
- For visitors from Oceania there is a server in Australia.

Additional servers may be added in other regions when needed.

How else does it help? Redundancy. Downtime happens. If one server has issues, you can quickly disable it and visitors will be routed to a different server. There are tools to automate it, such as Route 53 health checks.

Would you like to set up your own CDN for Iconify API? See [setting up custom CDN tutorial](./cdn.md).

For added security, Iconify public API also CloudFlare service. However, that does not change anything. Instead of connecting visitor to the closest server, CDN is used to connect CloudFlare edge server to the closest API. Iconify API still greatly benefits from latency reduction offered by a custom CDN.
