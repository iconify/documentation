import type { IconifyIconCustomisations } from '@iconify/utils/lib/customisations';
import { alignmentFromString } from '@iconify/utils/lib/customisations/shorthand';

let customisations: IconifyIconCustomisations;

customisations = {};
alignmentFromString(customisations, 'left');
// { hAlign: 'left' }
console.log(customisations);

customisations = {};
alignmentFromString(customisations, 'right,bottom');
// { hAlign: 'right', vAlign: 'bottom' }
console.log(customisations);

// Function does not toggle existing value, so this code does not change anything
customisations = { hAlign: 'center', slice: false };
alignmentFromString(customisations, 'center,meet');
console.log(customisations);
