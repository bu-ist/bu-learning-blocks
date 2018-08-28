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

console.log( 'bulbQuestions:', bulbQuestions );
