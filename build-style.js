const fs = require('fs');
const sass = require('node-sass');
const { paths, mkdir } = require('./lib/files');

const rootFile = paths.sourceAssets + '/style.scss';
const assetsPath = paths.html + '/assets';
const outputFile = assetsPath + '/style.css';
mkdir(assetsPath);

sass.render(
	{
		file: rootFile,
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: 1,
	},
	(error, result) => {
		if (error) {
			if (typeof error === 'object' && typeof error.formatted === 'string') {
				throw new Error(error.formatted);
			} else {
				throw new Error(error);
			}
		}
		const css = result.css.toString('utf8');
		if (!css.length) {
			throw new Error('Stylesheet is empty');
		}

		fs.writeFileSync(outputFile, result.css);

		// Check for quiet mode, log output
		let quiet = false;
		process.argv.slice(2).forEach((arg) => {
			switch (arg) {
				case '--quiet':
					quiet = true;
					return;
			}
		});
		if (!quiet) {
			console.log(`Saved style.css (${result.css.length} bytes)`);
		}
	}
);
