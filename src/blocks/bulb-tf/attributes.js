const attributes = {
	question: {
		type: 'array',
		source: 'children',
		selector: '.question-body',
	},
	textAlignment: {
		default: 'left',
	},
	blockAlignment: {
		type: 'string',
		default: 'wide',
	},
	radioControl: {
		type: 'string',
		default: 'true',
	},
	selectControl: {
		type: 'string',
	},
	highContrast: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
