interface CMDConfig {
	config?: string;
	quiet?: boolean;
}

export const cmd: CMDConfig = {};

// Parrse command line
process.argv.slice(2).forEach((arg) => {
	switch (arg) {
		case '--quiet':
			cmd.quiet = true;
			return;
	}

	if (arg.slice(0, 2) === '--') {
		const param = arg.slice(2);
		if (param.match(/^[a-z0-9]+$/)) {
			cmd.config = param;
			return;
		}
	}

	throw new Error(`Invalid parameter: ${arg}`);
});
