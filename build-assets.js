const fs = require('fs');
const { paths, mkdir, list } = require('./lib/files');

// Create target directory
const assetsPath = paths.html + '/assets';
mkdir(assetsPath);

// Copy files
copy(paths.sourceAssets + '/root', paths.html);
copy(paths.sourceAssets + '/images', assetsPath + '/images');

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

		// Log
		const cleanFile = target.slice(paths.root.length + 1);
		console.log(`Writing ${cleanFile} (${data.length} bytes)`);

		// Write file
		fs.writeFileSync(target, data);
	});
}
