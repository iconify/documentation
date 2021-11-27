# Iconify API: PHP

There are 2 versions of Iconify API:

- [Node.js version](../hosting-js/index.md).
- PHP version.

This documentation is for the PHP version of [Iconify API](../index.md).

[Node.js version of Iconify API](../hosting-js/index.md) is harder to use, but it is preferred solution. It is slightly faster than the PHP version because all collections are loaded only once.

## Requirements

Server software requirements:

- PHP 5.6 or newer version.
- Apache web server with `[prop]mod_rewrite` enabled. It might be possible with other server software too if you can configure rewrite rules for it.
- Files must be writable by same user that runs PHP scripts to allow writing to `[str]cache` and `[str]git-repos` directories.
- If you are using function to synchronize repositories, make sure Git (version 2.x) is installed and is accessible from command line.
- Do not install API in sub-directory of application that relies on `[prop]mod_rewrite` to avoid conflicts.

## Installation

Clone or download Iconify API from GitHub: [https://github.com/iconify/api.php](https://github.com/iconify/api.php).

Then you need to install dependencies. It is rather straightforward process if you are familiar with using Composer. If you are not familiar with Composer, it might be worth to learn it because almost all modern PHP frameworks use it, so you are very likely to encounter Composer again.

- Download and install Composer from [getcomposer.org](https://getcomposer.org).
- Run `[bash]composer install --no-dev` to install all dependencies (see Composer documentation).

Then upload it all to your website.

## Custom icons

If you want to host custom icons, add your custom icons in directory `[str]json`. Make sure file name matches icons prefix (for icons with prefix `[str]custom-icons` file should be named `[str]custom-icons.json`).

## Configuration

API does not require configuring, but if you do want to customize installation, there are several configuration options available.

See [PHP API configuration options](./config.md).

## CORS headers {#cors}

CORS stands for Cross-Origin Resource Sharing. API needs to send CORS headers to allow other websites read API responses.

Without CORS headers modern browsers will ignore API response.

You need to configure this in Apache by adding this to configuration:

```apache
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, OPTIONS"
Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding"
Header always set Access-Control-Max-Age "86400"
```
