// Put all your page JS here
const bulbQuestion = document.querySelector( '.bulb-question' );

( function( $ ) {
	$( function() {
		$( '#' + bulbQuestion.id ).slickQuiz( {
			nextQuestionText: '',
			displayQuestionNumber: false,
			displayQuestionCount: false,
			skipStartButton: true,
		} );
	} );
}( jQuery ) );
