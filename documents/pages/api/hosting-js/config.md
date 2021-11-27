```yaml
title: 'Iconify API Configuration: Node.js'
navigation: ./index.md
standalone: true
```

# Iconify API configuration

This tutorial is a part of [Iconify API installation instructions](./index.md) for Node.js. This part of tutorial explains API configuration options.

Configuration is stored in file `[file]config.json`. It is used only for customized values, so you do not need to store entire configuration.

Default configuration is stored in `[file]config-default.json`.

If your API is already running, after changing configuration you must restart API. Configuration in Node.js version of API cannot be reloaded without downtime.

## Main options

### port

By default, script runs on port `[num]3000`. You might need to change it. There are 2 ways to change port:

- Set environment variable `[str]PORT` (does not work if you have disabled `[prop]env-port` in configuration).
- Change `[prop]port` value in `[file]config.json`.

You can use environment variable in command line when starting API:

```bash
PORT=3000 npm start
```

To change port in configuration, add `[prop]port` property:

```json
{
	"port": 3000
}
```

### env-port

If you set value to `[bool]false`, environment variable `[str]PORT` will be ignored. Then port can only be changed by changing `[prop]port` in configuration.

### region and env-region

Region is used as server identification. If you are running multiple Iconify API instances, by setting different `[prop]region` values you can check which server you are connected to.

How to check region? Open `[url]/version` end point in browser: `[url]https://api.iconify.design/version`. That page will show you API version, language (Node or PHP) and region.

Additionally, region can be set using environment variable `[str]region`.

### custom-icons-dir

Directory where custom icon sets are stored.

Icon sets must be stored in [Iconify JSON format](../../types/iconify-json.md).

Filename must match prefix, for example `[icon]awesome-icons:home` should be stored in `[file]awesome-icons.json`.

Default directory name is `[str]{dir}/json`, where `[str]{dir}` is replaced by API root directory.

### serve-default-icons

If disabled, API will not load the default Iconify icon sets.

### index-page

URL to redirect browser to when browsing `[url]/`. Redirection is permanent.

## Browser cache

Cache configuration is stored in `[prop]cache` object.

Object properties:

- `[prop]timeout`, `[type]number`. Cache timeout in seconds.
- `[prop]min-refresh`, `[type]number`. Minimum page refresh timeout. Usually the same as `[prop]timeout` value.
- `[prop]private`, `[type]boolean`. Set to `[bool]true` if page cache should be treated as private.

Example:

```json
{
	"cache": {
		"timeout": 604800,
		"min-refresh": 604800,
		"private": false
	}
}
```

## CORS headers {#cors}

CORS stands for Cross-Origin Resource Sharing. API needs to send CORS headers to allow other websites read API responses.

Without CORS headers modern browsers will ignore API response.

CORS configuration is stored in `[prop]cors` object.

Object properties:

- `[prop]origins`, `[type]string`. Allowed origins. Used as value for `[str]Access-Control-Allow-Origin` header.
- `[prop]methods`, `[type]string`. Allowed methods. Used as value for `[str]Access-Control-Allow-Methods` header.
- `[prop]headers`, `[type]string`. Allowed headers. Used as value for `[str]Access-Control-Allow-Headers` header.
- `[prop]timeout`, `[type]number`. Cache time in seconds.

Example:

```json
{
	"cors": {
		"origins": "*",
		"timeout": 86400,
		"methods": "GET, OPTIONS",
		"headers": "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding"
	}
}
```

### Disabling CORS

CORS headers cannot be sent twice. If you are using [reverse proxy](./reverse-proxy.md) that is configured to send CORS headers, you need to disable CORS headers in Node.js app to avoid sending duplicate headers.

To disable CORS headers set `[prop]cors` value to `[bool]false`:

```json
{
	"cors": false
}
```

### Configuring CORS in Apache {#cors-apache}

If you are using Apache as reverse proxy, you can disable CORS in API and enable it in Apache.

To enable CORS in Apache, add this to Apache configuration:

```apache
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, OPTIONS"
Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding"
Header always set Access-Control-Max-Age "86400"
```

### Configuring CORS in NGINX {#cors-nginx}

If you are using NGINX as reverse proxy, you can disable CORS in API and enable it in NGINX.

To enable CORS in NGINX, add this to NGINX configuration under `[prop]http` -> `[prop]server` -> `[prop]location`:

```nginx
if ($request_method = 'POST') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
}
if ($request_method = 'GET') {
   add_header 'Access-Control-Allow-Origin' '*';
   add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
   add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
   add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
}

```

## Synchronizing icon sets with Git {#sync}

In addition to reloading all collections without restarting server, API can pull collections from Git service and reload collections without restarting. This can be used to push collections to server whenever it is updated without downtime.

There are two collections available: `[str]iconify` and `[str]custom`.

All configuration options are in `[prop]sync` object. Use `[str]{dir}` variable in directories to point to API application root directory.

To synchronize repository send GET request to `[url]/sync?repo=iconify&key=your-sync-key` Replace `[prop]repo` with `[str]custom` to synchronize custom repository and `[prop]key` with value of `[prop]sync.secret`.

Server will respond identically with `[str]ok` message regardless of status to prevent visitors from trying to guess your secret key. You can only tell if request worked by looking at logs.

Sync function is meant to be used with GitHub web hooks function. To avoid synchronizing icon sets too often, synchronization is delayed by `[num]60` seconds (configure `[prop]sync.sync-delay` option to change it). This way when there are multiple commits submitted within a minute, synchronization is done only once 60 seconds after the first commit.

Sync object properties:

- `[prop]secret`, `[type]string`. Secret key. This is a required option.
- `[prop]sync-on-startup`, `[type]string`. See below.
- `[prop]sync-delay`, `[type]number`. Delay for synchronization, in seconds. See documentation above.
- `[prop]repeated-sync-delay`, `[type]number`. If synchronization request was sent while synchronization is already in progress, this is amount of time application will wait until initializing next synchronization. Value is in seconds.
- `[prop]versions`, `[type]string`. Location of `[file]versions.json` file that stores information about the latest synchronized repositories.
- `[prop]storage`, `[type]string`. Location of directory where repositories will be stored.
- `[prop]git`, `[type]string`. Git command. You can change it if you need to customize command that is executed to clone repository. `[str]{repo}` will be replaced with repository URL, `[str]{target}` will be replaced with target directory.
- `[prop]iconify`, `[type]string`. URL of Iconify repository.
- `[prop]custom`, `[type]string`. URL of the custom repository.
- `[prop]custom-dir`, `[type]string`. Location of JSON files in custom repository, relative to root directory of repository.

Never change `[prop]sync` configuration in `[file]config-default.json`! Change it only in `[file]config.json`. Otherwise, it might be committed by mistake to a public repository, allowing everyone to see your secret words.

Example:

```json
{
	"sync": {
		"sync-on-startup": "always",
		"custom": "https://github.com/cyberalien/animated-icons.git",
		"custom-dir": "final",
		"secret": "test" // Do not store this in config.json !!!
	}
}
```

### custom-dir

Property `[prop]sync.custom-dir` points to the location of JSON files in custom repository, relative to root directory of repository.

For example, if JSON files are located in directory `[str]json` in your repository (like they are in Iconify repository), set `[prop]sync.custom-dir` value to `[str]json`.

### sync-on-startup

This option automatically pulls the latest repositories when application is started.

Possible values:

- `[str]never`: disabled.
- `[str]always`: always synchronize all available repositories.
- `[str]missing`: synchronize only repositories that are missing.

If enabled, synchronization on startup will start immediately. It is not affected by `[prop]sync.sync-delay`.

## Logging errors {#mail}

Server can automatically email you if something happens, so you don't need to check logs.

Email configuration is in `[prop]mail` object.

Object properties:

- `[prop]active`, `[type]boolean`. Enables logging to email.
- `[prop]throttle`, `[type]number`. Number of seconds to delay email sending. See below.
- `[prop]repeat`, `[type]number`. This option prevents script from sending similar errors too often. See below.
- `[prop]from`, `[type]string`. Sender email address. Set this to valid email address.
- `[prop]to`, `[type]string`. Receiver email address. Set this to valid email address.
- `[prop]subject`, `[type]string`. Subject of emails. All emails will have the same subject.
- `[prop]transport`, `[type]object`. SMTP settings object: `[prop]host`, `[prop]port`, `[prop]secure`, `[prop]auth`.

If you are using secure connection, set `[prop]mail.transport.secure` to `[bool]true` and `[prop]mail.transport.port` to `[num]465`, unless you are running SMTP server on a different port.

If you are running Iconify API on multiple servers, use different subjects in `[prop]mail.subject` for different servers to identify which server email came from.

### Throttling emails

Option `[prop]mail.throttle` prevents API from sending too many emails. Default value is `[num]30` seconds. All error messages within `[num]30` seconds will be combined to one email instead of sending multiple emails.

Option `[prop]mail.repeat` prevents script from sending similar errors too often. Value is the number of minutes. Default value is `[num]180` (3 hours).

Combined, these two options prevent API from flooding your inbox when something happens.
