const fs = require('fs');
const { paths, mkdir, list } = require('./lib/files');

// Create target directory
const assetsPath = paths.html + '/assets';
mkdir(assetsPath);

// Check for quiet mode
let quiet = false;
process.argv.slice(2).forEach((arg) => {
	switch (arg) {
		case '--quiet':
			quiet = true;
			return;
	}
});

/**
 * Save file
 */
function save(target, content) {
	const cleanFile = target.slice(paths.root.length + 1);
	fs.writeFileSync(target, content, 'utf8');
	if (!quiet) {
		console.log(`Writing ${cleanFile} (${content.length} bytes)`);
	}
}

/**
 * Copy files
 */
function copy(sourceDir, targetDir) {
	// Get files
	let files;
	try {
		files = list(sourceDir);
	} catch (err) {
		return;
	}

	// Copy all files
	files.forEach((file) => {
		const source = sourceDir + file;
		const target = targetDir + file;

		// Create directories
		const parts = target.split('/');
		const name = parts.pop();
		if (name.toLowerCase() === '.ds_store') {
			return;
		}
		mkdir(parts);

		// Read file
		const data = fs.readFileSync(source);

		// Save file
		save(target, data);
	});
}

// Copy assets
copy(paths.sourceAssets + '/root', paths.html);
copy(paths.sourceAssets + '/images', assetsPath + '/images');

// Build delay-demo-icon.html
(() => {
	const iconName = 'line-md:alert';
	const preload = [
		{
			prefix: 'line-md',
			icons: {
				alert: {
					body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle>',
				},
			},
			width: 24,
			height: 24,
		},
	];

	// Preload icon
	let scripts = `var IconifyPreload = ${JSON.stringify(preload)};\n`;

	// Add icon component
	const webComponent = require.resolve('iconify-icon/dist/iconify-icon.min.js');
	scripts += fs.readFileSync(webComponent, 'utf8') + '\n';

	// Build HTML
	const html = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Delay Demo</title>
			<style>
				html,
				body {
					margin: 0;
					padding: 0;
					font: normal 16px / 24px 'Source Sans Pro', 'Open Sans', 'Droid Sans',
						sans-serif;
					background: transparent;
					color: #000;
				}
				body:hover {
					color: #ba3329;
				}
	
				p {
					margin: 8px;
					padding: 0;
				}
				#loading {
					color: #959595;
				}
	
				iconify-icon {
					display: inline-block;
					font-size: 24px;
					line-height: 1em;
					vertical-align: -0.25em;
					box-shadow: 0 0 0 1px #e00;
				}
			</style>
		</head>
		<body>
			<script>
				${scripts}
				window.addEventListener('DOMContentLoaded', () => {
					document.getElementById('loading').style.display = 'none';
				});
			</script>
			<p>
				Icon working as expected: <iconify-icon icon="${iconName}"></iconify-icon>
			</p>
			<p id="loading">Loading script...</p>
			<script src="https://iconify.design/delay.php?delay=1"></script>
		</body>
	</html>`;

	save(paths.html + '/delay-demo-icon.html', html);
})();
