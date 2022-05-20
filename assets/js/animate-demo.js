window.addEventListener('DOMContentLoaded', (event) => {
	document
		.querySelectorAll('.visual-block--bundle .demo-icons')
		.forEach((container) => {
			// Hide child nodes
			const children = container.querySelectorAll('iconify-icon');
			children.forEach((node) => {
				node.style.display = 'none';
			});
			const count = children.length;

			function getNode(index) {
				if (index > count) {
					index -= count;
				}
				if (index < 1) {
					index += count;
				}
				return container.querySelector('iconify-icon:nth-child(' + index + ')');
			}

			// Show on timer
			let index = 0;
			const createTimer = () =>
				window.setInterval(() => {
					index++;
					if (index > count) {
						index -= count;
					}

					// Node to show
					let node = getNode(index);
					if (node) {
						node.classList.remove('fade');
						node.style.display = '';
						try {
							node.restartAnimation();
						} catch (err) {
							//
						}
					}

					// Node to fade
					node = getNode(index + 4);
					if (node) {
						node.classList.add('fade');
					}

					// Node to hide
					node = getNode(index + 1);
					if (node) {
						node.style.display = 'none';
					}
				}, 500);

			// Create timer in few seconds, toggle when window is hidden
			setTimeout(() => {
				let timer = createTimer();
				let hidden = false;
				if (typeof document.hidden === 'boolean') {
					hidden = document.hidden;
					document.addEventListener('visibilitychange', () => {
						hidden = document.hidden;
						if (hidden) {
							if (timer) {
								clearInterval(timer);
								timer = null;
							}
						} else {
							if (!timer) {
								timer = createTimer();
							}
						}
					});
				}
			}, 1500);
		});
});
