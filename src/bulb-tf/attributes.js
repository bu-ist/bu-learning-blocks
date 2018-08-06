const attributes = {
	question: {
	    type: 'array',
	    source: 'children',
	    selector: '.question-body',
	},
	textAlignment: {
		type: 'string',
	},
	blockAlignment: {
		type: 'string',
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
