window.addEventListener('DOMContentLoaded', (event) => {
	const baseClass = 'code-block-content';
	const withButtonClass = baseClass + '--with-copy';

	const buttonClass = 'code-block-copy';

	const noticeClass = 'code-block-notice';

	/**
	 * Copy to clipboard
	 */
	function copyCode(node, code) {
		const rawCode = atob(code).trim();

		function fallback() {
			const parentNode = node.parentNode;
			const textarea = document.createElement('textarea');
			textarea.value = rawCode;
			textarea.style.height = 0;
			parentNode.insertBefore(textarea, node);

			textarea.focus();
			textarea.select();

			try {
				// Modern way
				if (!document.execCommand || !document.execCommand('copy')) {
					// Ancient way
					if (window.clipboardData) {
						window.clipboardData.setData('Text', rawCode);
					}
				}
			} catch (err) {}

			// Remove textarea on next tick
			setTimeout(() => {
				parentNode.removeChild(textarea);
			});
		}

		try {
			navigator.clipboard
				.writeText(rawCode)
				.then(() => {
					// Success
				})
				.catch((err) => {
					// Failed: use fallback
					fallback();
				});
		} catch (err) {
			// Failed: use fallback
			fallback();
		}
	}

	// Find all code nodes
	const nodes = document.querySelectorAll('.' + baseClass);
	if (!nodes || !nodes.forEach) {
		// Ignore old browsers
		return;
	}
	nodes.forEach((node) => {
		if (
			!node.classList ||
			!node.classList.contains ||
			node.classList.contains(withButtonClass) ||
			!node.hasAttribute('data-raw-code')
		) {
			// Ignore old browsers and nodes without data
			return;
		}

		// Get raw code
		const code = node.getAttribute('data-raw-code');
		if (!code.length) {
			return;
		}

		// Mark div as parsed and add button
		node.classList.add(withButtonClass);

		// Get trigger node
		let triggerNode = node;
		if (triggerNode.parentElement.classList.contains('code-block')) {
			triggerNode = triggerNode.parentElement;
		}

		// Timer to hide animation and button element
		let cannotHide = null;
		let isHover = false;
		let buttonNode = null;
		let hidingNode = null;

		function removeNode() {
			hidingNode = buttonNode;
			buttonNode = null;
			hidingNode.classList.add(buttonClass + '--hiding');
			setTimeout(() => {
				if (hidingNode) {
					node.removeChild(hidingNode);
					hidingNode = null;
				}
			}, 500);
		}

		function triggerRemoveNode() {
			if (!isHover && !cannotHide) {
				removeNode();
			}
		}

		function addButton() {
			if (cannotHide) {
				// Already exists
				return;
			}

			if (hidingNode) {
				// Already hiding: reuse old node
				buttonNode = hidingNode;
				hidingNode = null;
				buttonNode.classList.remove(buttonClass + '--hiding');
				return;
			}

			// Create button
			buttonNode = document.createElement('a');
			buttonNode.setAttribute('href', '#');
			buttonNode.setAttribute('title', 'Copy to clipboard');
			buttonNode.addEventListener('click', (event) => {
				event.preventDefault();
				copyCode(node, code);

				// Show notice
				const noticeNode = document.createElement('div');
				noticeNode.className = noticeClass;
				noticeNode.innerHTML =
					'<iconify-icon icon="line-md:confirm"></iconify-icon> Copied to clipboard';
				node.appendChild(noticeNode);

				// Remove notice after delay
				setTimeout(() => {
					node.removeChild(noticeNode);
				}, 2000);
			});

			buttonNode.className = buttonClass;
			buttonNode.innerHTML =
				'<iconify-icon icon="line-md:clipboard-arrow"></iconify-icon>';

			node.appendChild(buttonNode);

			// Allow hiding after animation is complete
			cannotHide = setTimeout(() => {
				// Allow hiding
				cannotHide = null;
				if (!isHover) {
					removeNode();
				}
			}, 1500);
		}

		triggerNode.addEventListener('mouseenter', () => {
			isHover = true;
			addButton();
		});

		triggerNode.addEventListener('mouseleave', () => {
			isHover = false;
			triggerRemoveNode();
		});
	});
});
