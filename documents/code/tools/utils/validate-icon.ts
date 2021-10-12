import { validateIcon } from '@iconify/utils/lib/icon/name';

// Valid names: function returns `true`
validateIcon({
	provider: '',
	prefix: 'mdi-light',
	name: 'home',
});

validateIcon({
	provider: 'my-api',
	prefix: 'awesome-test',
	name: 'alert-outline',
});

validateIcon(
	{
		provider: '',
		prefix: '',
		name: 'home',
	},
	true
);

// Invalid names: function returns `false`
validateIcon({
	provider: '',
	prefix: '', // Empty prefix
	name: 'home',
});

validateIcon({
	provider: '',
	prefix: 'my_set', // `_` is not allowed
	name: 'home',
});

validateIcon(
	{
		provider: 'my-api',
		prefix: '', // prefix cannot be empty if provider is set, even if second option is `true`
		name: 'home',
	},
	true
);
