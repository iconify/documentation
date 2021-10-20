// Anonymous async function.
(async () => {
	// Create new SVG instance.
	const svg = new SVG(reallyBadIcon);

	// Wait for cleanupSVG() to finish working by adding 'await' before function call.
	try {
		await cleanupSVG(svg);
	} catch (err) {
		// Clean up failed: see error message
		console.error(err);
		return;
	}

	// Do other stuff
	console.log(svg.toMinifiedString());

	// Close function and immediately execute it.
})();
