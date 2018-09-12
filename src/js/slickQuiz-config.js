// Collect all bulb-question wrappers.
const bulbQuestionsDivs = document.querySelectorAll( '.bulb-question' );

// Connect each question wrapper to its data.
const bulbQuestions = [];
Array.prototype.forEach.call( bulbQuestionsDivs, questionDiv => {
	// Get question id.
	const questionId = questionDiv.id;

	// Get the question data that was sent by php via wp_localize_script().
	const questionData = window[ questionId ];

	// Create question object.
	const question = {
		wrapper: questionDiv,
		data: questionData,
	};

	// Add question to bulbQuestions array.
	bulbQuestions.push( question );
} );

const quizJSON = {
	info: {
		main: '<p>' + bulbQuestions[0].data.header[0] + '</p>',
	},
	questions: [
		{
			q: bulbQuestions[0].data.body[ 0 ],
			a: [
				{ option: 'True', correct: bulbQuestions[0].data.checkboxControlAnswer1 },
				{ option: 'False', correct: bulbQuestions[0].data.checkboxControlAnswer2 },
			],
			correct: '<p>' + bulbQuestions[0].data.trueFeedback[ 0 ] + '</p>',
			incorrect: '<p>' + bulbQuestions[0].data.falseFeedback[ 0 ] + '</p>',
		},
	],
};

console.log( bulbQuestions[0].data.header[0] );

