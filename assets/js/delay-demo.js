window.addEventListener('DOMContentLoaded', () => {
	// Restart delay-demo
	Array.from(document.querySelectorAll('.delay-demo-wrapper')).forEach(
		(node) => {
			const frame = node.querySelector('iframe');
			if (!frame) {
				return;
			}

			const comment = document.createElement('small');
			comment.textContent = 'Hover demo above to restart it.';
			node.appendChild(comment);

			const html = node.innerHTML;

			// Add event
			let restarting = false;
			node.addEventListener('mouseenter', () => {
				if (restarting) {
					return;
				}
				restarting = true;
				node.classList.add('restarting');
				node.innerHTML = html;
				setTimeout(() => {
					restarting = false;
					node.classList.remove('restarting');
				}, 2000);
			});
		}
	);
});
