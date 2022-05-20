window.addEventListener('DOMContentLoaded', (event) => {
	const baseClass = 'docs-navigation';
	const noButtonClass = baseClass + '--no-button';
	const hasButtonClass = baseClass + '--has-button';
	const containerVisibleClass = baseClass + '--visible';

	const visibleIcon = 'line-md:menu-unfold-left';
	const hiddenIcon = 'line-md:menu-fold-right';

	const container = document.querySelector('.' + baseClass);
	const buttonsContainer = document.querySelector('.' + baseClass + '-button');

	// Make sure contains are there and classList is supported
	try {
		if (
			!container ||
			!buttonsContainer ||
			!container.classList.contains(noButtonClass)
		) {
			return;
		}
	} catch (err) {
		return;
	}

	// Remove unnecessary classes
	const containerClasses = container.classList;
	containerClasses.remove(noButtonClass);
	containerClasses.remove(containerVisibleClass);
	containerClasses.add(hasButtonClass);

	// Visibility status
	let visible = false;

	// Add link
	buttonsContainer.innerHTML =
		'<a href="#" title="Navigation"><iconify-icon icon="' +
		visibleIcon +
		'"></iconify-icon></a>';

	const linkNode = buttonsContainer.querySelector('a');

	// Create event
	linkNode.addEventListener('click', (event) => {
		event.preventDefault();
		visible = !visible;
		containerClasses.toggle(containerVisibleClass);
		linkNode.innerHTML =
			'<iconify-icon icon="' +
			(visible ? hiddenIcon : visibleIcon) +
			'"></iconify-icon>';
	});

	// Restart animations on hover
	container.addEventListener('mouseenter', () => {
		restartAnimations(container);
	});
});
