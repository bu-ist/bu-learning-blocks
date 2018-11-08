// Put all your page JS here
const { jQuery } = window;

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
		switch ( this.rawData.type ) {
			case 'calculated-numeric':
				return this.slickQuizParseDataTrueFalse();
			case 'true-false':
				return this.slickQuizParseDataTrueFalse();
			case 'multiple-choice':
				return this.slickQuizParseDataTrueFalse();
			case 'multiple-answer':
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
		const name = this.rawData.header;
		const question = this.rawData.body;
		const answers = this.rawData.answers.map( answer => ( {
			option: answer.answer,
			correct: answer.correct,
		} ) );
		const correctFeedback = this.rawData.answers.find(
			answer => answer.correct
		).feedback;
		// const incorrectFeedback = this.rawData.answers.find(
		// 	answer => ! answer.correct
		// ).feedback;

		// Construct slickQuizData object and return it.
		const slickQuizData = {
			...BULB.slickQuiz.defaultQuestionOptions,
			json: {
				info: {
					name: '',
					main: name,
				},
				questions: [
					{
						q: question,
						a: answers,
						correct: '<p>' + correctFeedback + '</p>',
						// incorrect: '<p>' + incorrectFeedback + '</p>',
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
