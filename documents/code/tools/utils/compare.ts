import { defaults } from '@iconify/utils/lib/customisations';
import { compare } from '@iconify/utils/lib/customisations/compare';

const item1 = {
	...defaults,
	hFlip: true,
};
const item2 = {
	...defaults,
};

if (compare(item1, item2)) {
	console.log('Identical');
} else {
	console.log('Different');
}
