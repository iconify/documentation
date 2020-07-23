window.addEventListener('DOMContentLoaded', (event) => {
	const noButtonClass = 'docs-navigation--no-button';
	const hasButtonClass = 'docs-navigation--has-button';
	const containerVisibleClass = 'docs-navigation--visible';

	const visibleIcon = 'line-md:menu-unfold-left';
	const hiddenIcon = 'line-md:menu-fold-right';

	const container = document.querySelector('.docs-navigation');
	const buttonsContainer = document.querySelector('.docs-navigation-button');

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
		'<a href="#" title="Navigation"><span class="iconify" data-icon="' +
		visibleIcon +
		'"></span></a>';

	const linkNode = buttonsContainer.querySelector('a');

	// Create event
	linkNode.addEventListener('click', (event) => {
		event.preventDefault();
		visible = !visible;
		containerClasses.toggle(containerVisibleClass);
		linkNode.innerHTML =
			'<span class="iconify" data-icon="' +
			(visible ? hiddenIcon : visibleIcon) +
			'"></span>';
	});
});
