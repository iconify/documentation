const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

// List of commands to run
const commands = [];

// Parse command line
const compile = {
	lib: true,
	bundle: true,
	style: true,
	docs: true,
	assets: true,
};
const params = [];
process.argv.slice(2).forEach((cmd) => {
	if (cmd.slice(0, 2) !== '--') {
		return;
	}
	const parts = cmd.slice(2).split('-');
	if (parts.length === 2) {
		// Parse 2 part commands like --with-lib
		const key = parts.pop();
		if (compile[key] === void 0) {
			params.push(cmd);
			return;
		}
		switch (parts.shift()) {
			case 'with':
				// enable module
				compile[key] = true;
				break;

			case 'without':
				// disable module
				compile[key] = false;
				break;

			case 'only':
				// disable other modules
				Object.keys(compile).forEach((key2) => {
					compile[key2] = key2 === key;
				});
				break;
		}
	} else {
		params.push(cmd);
	}
});

// Check file exists
const fileExists = (file) => {
	try {
		fs.statSync(file);
	} catch (e) {
		return false;
	}
	return true;
};

// Run build scripts
Object.keys(compile).forEach((key) => {
	if (compile[key]) {
		if (fileExists('build-' + key + '.js')) {
			// Run build-*
			commands.push({
				cmd: 'node',
				args: ['build-' + key].concat(params),
			});
		} else {
			commands.push({
				cmd: 'npm',
				args: ['run', 'build:' + key],
			});
		}
	}
});

/**
 * Run next command
 */
const next = () => {
	const item = commands.shift();
	if (item === void 0) {
		process.exit(0);
	}

	if (item.cwd === void 0) {
		item.cwd = __dirname;
	}

	const result = child_process.spawnSync(item.cmd, item.args, {
		cwd: item.cwd,
		stdio: 'inherit',
	});

	if (result.status === 0) {
		process.nextTick(next);
	} else {
		process.exit(result.status);
	}
};
next();
