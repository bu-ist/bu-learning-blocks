// Put all your page JS here

// Initialize the BULB object.
const BULB = {
	questions: [],
	slickQuiz: {
		defaultQuestionOptions: {
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
		},
	},
};

/**
 * Class BULBQuestion
 */
class BULBQuestion {
	constructor( questionDiv ) {
		// Get question id.
		this.id = questionDiv.id;

		// Save reference to wrapper element.
		this.wrapper = questionDiv;
		this.jQueryWrapper = jQuery( this.wrapper );

		// Get the question data that was sent by php via wp_localize_script().
		this.rawData = window[ this.id ];

		// Initialize question.
		this.initilizeQuestion();
	}

	initilizeQuestion() {
		// Add boilerplate html to wrapper div.
		this.jQueryWrapper.html( this.constructor.generateQuestionBoilerplate() );

		// Generate slickQuizData.
		this.slickQuizData = this.slickQuizParseData();

		// Initialize slickQuiz.
		this.jQueryWrapper.slickQuiz( this.slickQuizData );
	}

	static generateQuestionBoilerplate() {
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

	/**
	 * Parse raw question data into the format slickQuiz expects.
	 *
	 * @returns {object} The slickQuiz formatted data.
	 */
	slickQuizParseData() {
		switch ( this.rawData.Type ) {
			case 'true-false':
				return this.slickQuizParseDataTrueFalse();
			default:
				break;
		}
	}

	/**
	 * Parse true-false raw question data into the format slickQuiz expects.
	 *
	 * @returns {object} The slickQuiz formatted data.
	 */
	slickQuizParseDataTrueFalse() {
		// Parse raw data data.
		const name = this.rawData.Header;
		const question = this.rawData.Body;
		const answers = this.rawData.Answers.map( answer => ( {
			option: answer.Answer,
			correct: answer.Correct,
		} ) );
		const correctFeedback = this.rawData.Answers.find( answer => answer.Correct )
			.Feedback;
		const incorrectFeedback = this.rawData.Answers.find(
			answer => ! answer.Correct
		).Feedback;

		// Construct slickQuizData object and return it.
		const slickQuizData = {
			...BULB.slickQuiz.defaultQuestionOptions,
			json: {
				info: {
					name: '<p>' + name + '</p>',
					main: '',
				},
				questions: [
					{
						q: question,
						a: answers,
						correct: '<p>' + correctFeedback + '</p>',
						incorrect: '<p>' + incorrectFeedback + '</p>',
					},
				],
			},
		};

		return slickQuizData;
	}
}

// On document ready, collect and initialize questions.
( function( $ ) {
	$( function() {
		Array.prototype.forEach.call(
			document.querySelectorAll( '.bulb-question' ),
			questionDiv => {
				BULB.questions.push( new BULBQuestion( questionDiv ) );
			}
		);
	} );
}( jQuery ) );
