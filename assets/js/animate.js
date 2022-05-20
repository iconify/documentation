const restartingAnimations = new Set();

/**
 * Restart animaitons
 */
function restartAnimations(container, timer) {
	if (restartingAnimations.has(container)) {
		return;
	}
	restartingAnimations.add(container);
	setTimeout(() => {
		restartingAnimations.delete(container);
	}, timer || 1000);

	Array.from(container.querySelectorAll('iconify-icon')).forEach((node) => {
		try {
			node.restartAnimation();
		} catch (err) {
			//
		}
	});
}

window.addEventListener('DOMContentLoaded', () => {
	// Animate icons
	Array.from(
		document.querySelectorAll('.content-section h1, .api-icon-name')
	).forEach((node) => {
		node.addEventListener('mouseenter', () => {
			restartAnimations(node);
		});
	});
});
