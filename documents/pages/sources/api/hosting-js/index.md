# Iconify API: Node.js

There are 2 versions of Iconify API:

- Node.js version.
- [PHP version](../hosting-php/index.md).

This documentation is for the Node.js version of [Iconify API](../index.md).

Node.js version of Iconify API is harder to use, but it is preferred solution. It is slightly faster than the [PHP version](../hosting-php/index.md) because all collections are loaded only once.

To install API, first clone or download Iconify API from GitHub: [https://github.com/iconify/api.js](https://github.com/iconify/api.js).

## Custom icons

If you want to host custom icons, add your custom icons in directory `[str]json`. Make sure file name matches icons prefix (for icons with prefix `[str]custom-icons` file should be named `[str]custom-icons.json`).

## Configuration

API does not require configuring, but if you do want to customize installation, there are several configuration options available.

See [Node.js API configuration options](./config.md).

## Starting API {#start}

After you have configured API, next step depends on how you want to host API.

### Hosting with Elastic Beanstalk {#beanstalk}

If you are using Amazon Elastic Beanstalk, there is nothing else to change. Iconify API is ready to be used with EB.

Compress directory, log in to AWS console, click `[str]Elastic Beanstalk`.

Select `[str]Web development environment` option, then fill out form. From choice of platforms select `[str]Node.js`, in application code option upload API archive.

That's it. It will take few minutes to start. Your API instance will have custom sub-domain name assigned to it, use it to test API.

### Hosting in a custom hosting environment {#custom-hosting}

Setting up hosting in custom hosting environment is a bit harder than in AWS Elastic Beanstalk. It requires installing and configuring server software.

Due to complexity, this section is split into separate document.

See [hosting Iconify API in custom environment](./custom.md).
