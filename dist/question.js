const BULB = {};

// Config for SlickQuiz.
BULB.singleQuestionOptions = {
	skipStartButton: true,
	displayQuestionCount: false,
	displayQuestionNumber: false,
	perQuestionResponseAnswers: true,
	disableRanking: true,
	disableScore: true,
	checkAnswerText: 'Check Answer',
	nextQuestionText: 'Done',
	events: {
		onCompleteQuiz: function( options ) {
			console.log( options );
		},
	},
};

// Initialize SlickQuiz questions.
jQuery( document ).ready( function() {
	jQuery( '.bulb-question' ).each( function() {
		debugger;
		const data = JSON.parse( window.atob( jQuery( this ).data( 'question' ) ) );

		// Generate boilerplate markup
		const boilerplate = generateQuestionBoilerplate();
		jQuery( this ).append( boilerplate );

		// Initialize slickquiz.
		const question = Object.assign( {}, BULB.singleQuestionOptions, {
			json: data,
		} );
		jQuery( this ).slickQuiz( question );
	} );
} );

/**
 * Generate the minimal boilerplate a SlickQuiz quiz needs
 * @return {object} The boilerplate html
 */
function generateQuestionBoilerplate() {
	debugger;
	const boilerplateString = `
		<h1 class="quizName"></h1>
		<div class="quizArea">
			<div class="quizHeader">
				<a class="button startQuiz" href="#"></a>
			</div>
		</div>
		<div class="quizResults">
			<div class="quizResultsCopy"></div>
		</div>
	`;
	const boilerplate = jQuery.parseHTML( boilerplateString );
	return boilerplate;
}
