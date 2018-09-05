// Setup your quiz text and questions here
const questionId = document.querySelector( '.bulb-question' ).id;
const question = window[ questionId ];
// console.log(questionId);
// alert(JSON.stringify(question, null, 4));

const quizJSON = {
	info: {
		main: '<p>' + question.header[ 0 ] + '</p>',
	},
	questions: [
		{
			q: question.body[ 0 ],
			a: [
				{ option: 'True', correct: question.checkboxControlAnswer1 },
				{ option: 'False', correct: question.checkboxControlAnswer2 },
			],
			correct: '<p>' + question.trueFeedback[ 0 ] + '</p>',
			incorrect: '<p>' + question.falseFeedback[ 0 ] + '</p>',
		},
	],
};
