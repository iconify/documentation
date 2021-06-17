import { loadIcons } from '@iconify/react';

/**
 * Function to load icons, returns Promise
 */
function loadTestIcons(icons) {
	return new Promise((fulfill, reject) => {
		loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
			if (pending.length) {
				// Icons are pending, wait for all to load/fail
				return;
			}
			if (missing.length) {
				reject({
					loaded,
					missing,
				});
			} else {
				fulfill({
					loaded,
				});
			}
		});
	});
}

/**
 * Usage example in async function
 */
async function test() {
	await loadTestIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// Do stuff with loaded icons
	console.log('Loaded!');
}
test();
