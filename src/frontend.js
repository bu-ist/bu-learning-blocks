/**
 * BULB Frontend
 *
 * Handles frontend logic...
 */
import ReactDOM from 'react-dom';
import ReactHTMLParser from 'react-html-parser';

// Import the react-questions library.
import { Question } from '@carlosesilva/react-questions';
import '@carlosesilva/react-questions/es/Question.css';

// Find all .bulb-question DOM containers, collect their data from window and render <Questions> into them.
document.querySelectorAll( '.bulb-question' ).forEach( questionContainer => {
	const questionId = questionContainer.id;
	const questionData = window[ questionId ];
	ReactDOM.render(
		<Question
			questionData={ parseHTMLStrings( questionData ) }
			onSubmit={ () => onSubmitReactQuestionHook( questionContainer ) }
			onReset={ () => onResetReactQuestionHook( questionContainer ) }
		/>,
		questionContainer
	);
} );

function onSubmitReactQuestionHook( questionContainer ) {
	// Re-Typeset MathJax equations if any.
	reTypesetEquationsInElementWithMathJax( questionContainer );
}

function onResetReactQuestionHook( questionContainer ) {
	// Re-Typeset MathJax equations if any.
	reTypesetEquationsInElementWithMathJax( questionContainer );
}

function reTypesetEquationsInElementWithMathJax( element ) {
	// Bail if MathJax is not present.
	if ( typeof MathJax === 'undefined' ) {
		return;
	}

	// Tell MathJax to typeset new equations in the specified element.
	MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, element ] );
}

function parseHTMLStrings( questionData ) {
	switch ( questionData.type ) {
		case 'true-false':
			return parseHTMLStringsTrueFalse( questionData );
		case 'multiple-choice':
			return parseHTMLStringsMultipleChoice( questionData );
		case 'multiple-answer':
			return parseHTMLStringsMultipleAnswer( questionData );
		case 'calculated-numeric':
			return parseHTMLStringsCalculatedNumeric( questionData );
		default:
			console.error(
				`'${ questionData.type }' is not a recognized question type.`
			);
			return null;
	}
}

function parseHTMLStringsCommon( questionData ) {
	const parsedQuestionData = { ...questionData };
	parsedQuestionData.header = ReactHTMLParser( parsedQuestionData.header );
	parsedQuestionData.body = ReactHTMLParser( parsedQuestionData.body );
	parsedQuestionData.feedback.correct = ReactHTMLParser(
		parsedQuestionData.feedback.correct
	);
	parsedQuestionData.feedback.incorrect = ReactHTMLParser(
		parsedQuestionData.feedback.incorrect
	);
	return parsedQuestionData;
}

function parseHTMLStringsTrueFalse( questionData ) {
	const parsedQuestionData = parseHTMLStringsCommon( questionData );
	parsedQuestionData.answers.forEach( answerObj => {
		answerObj.answer = ReactHTMLParser( answerObj.answer );
	} );
	return parsedQuestionData;
}

function parseHTMLStringsMultipleChoice( questionData ) {
	const parsedQuestionData = parseHTMLStringsCommon( questionData );
	parsedQuestionData.answers.forEach( answerObj => {
		answerObj.answer = ReactHTMLParser( answerObj.answer );
		answerObj.feedback = ReactHTMLParser( answerObj.feedback );
	} );
	return parsedQuestionData;
}

function parseHTMLStringsMultipleAnswer( questionData ) {
	const parsedQuestionData = parseHTMLStringsCommon( questionData );
	parsedQuestionData.answers.forEach( answerObj => {
		answerObj.answer = ReactHTMLParser( answerObj.answer );
		answerObj.feedback = ReactHTMLParser( answerObj.feedback );
	} );
	return parsedQuestionData;
}

function parseHTMLStringsCalculatedNumeric( questionData ) {
	const parsedQuestionData = parseHTMLStringsCommon( questionData );
	return parsedQuestionData;
}
