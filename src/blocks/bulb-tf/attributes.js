export default {
	id: {},
	header: {},
	body: {},
	answers: {
		default: [
			{
				answer: 'True',
				feedback: '',
				correct: true,
			},
			{
				answer: 'False',
				feedback: '',
				correct: false,
			},
		],
	},
	textAlignment: {
		default: 'left',
	},
	blockAlignment: {
		type: 'string',
		default: 'wide',
	},
	backgroundColorControl: {
		type: 'string',
		default: '#FFFFFF',
	},
	textColorControl: {
		type: 'string',
		default: '#000000',
	},
	fontSize: {
		type: 'string',
		default: '16',
	},
};
