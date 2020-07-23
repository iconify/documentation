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

		const textarea = document.createElement('textarea');
		textarea.value = rawCode;
		textarea.style.height = 0;
		node.appendChild(textarea);

		textarea.focus();
		textarea.select();

		let copied = false;
		try {
			// Modern way
			if (!document.execCommand || !document.execCommand('copy')) {
				// Ancient way
				if (window.clipboardData) {
					window.clipboardData.setData('Text', rawCode);
					copied = true;
				}
			} else {
				copied = true;
			}
		} catch (err) {}

		// Remove textarea on next tick
		setTimeout(() => {
			node.removeChild(textarea);
		});

		return copied;
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

		const buttonNode = document.createElement('a');
		buttonNode.setAttribute('href', '#');
		buttonNode.setAttribute('title', 'Copy to clipboard');
		buttonNode.addEventListener('click', (event) => {
			event.preventDefault();
			if (copyCode(node, code)) {
				// Show notice
				const noticeNode = document.createElement('div');
				noticeNode.className = noticeClass;
				noticeNode.innerHTML =
					'<span class="iconify" data-icon="line-md:confirm"></span> Copied to clipboard';
				node.appendChild(noticeNode);

				// Remove notice after delay
				setTimeout(() => {
					node.removeChild(noticeNode);
				}, 2000);
			}
		});

		buttonNode.className = buttonClass;
		buttonNode.innerHTML =
			'<span class="iconify" data-icon="line-md:clipboard-arrow"></span>';

		node.appendChild(buttonNode);
	});
});
