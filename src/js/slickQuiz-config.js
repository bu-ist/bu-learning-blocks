// Setup your quiz text and questions here
const questionId = document.querySelector( '.bulb-question' ).id;
const question = window[ questionId ];

const quizJSON = {
	info: {
		main: '<p>' + question.header[ 0 ].props.children + '</p>',
	},
	questions: [
		{
			q: question.body[ 0 ].props.children,
			a: [
				{ option: 'True', correct: true },
				{ option: 'False', correct: false },
			],
			correct: '<p>' + question.trueFeedback[ 0 ].props.children + '</p>',
			incorrect: '<p>' + question.falseFeedback[ 0 ].props.children + '</p>',
		},
	],
};
