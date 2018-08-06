const attributes = {
	question: {
		type: 'array',
		source: 'children',
		selector: '.question-body',
	},
	textAlignment: {
		type: 'string',
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
};

export default attributes;
