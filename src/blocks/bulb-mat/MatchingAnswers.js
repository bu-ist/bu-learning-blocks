import MatchingAnswer from './MatchingAnswer';

export default ( {
	answers = [],
	onChangeAnswers,
	minAnswers = 1,
	maxAnswers = 1,
	defaultAnswer = {
		answer: '',
		feedback: '',
		correct: false,
	},
	feedbackPerAnswer = true,
} ) => {
	const onChangeAnswerValue = ( newAnswerValue, index ) => {
		const newAnswers = [ ...answers ];
		newAnswers[ index ] = { ...answers[ index ], answer: newAnswerValue };
		onChangeAnswers( newAnswers );
	};

	const onChangeFeedback = ( newFeedback, index ) => {
		const newAnswers = [ ...answers ];
		newAnswers[ index ] = { ...answers[ index ], feedback: newFeedback };
		onChangeAnswers( newAnswers );
	};

	const onChangeCorrect = ( newCorrect, index ) => {
		const newAnswers = answers.map( ( answer ) => {
			// Correct propery must be unique, so remove the newCorrect value from any answer that may already be using it.
			if ( answer.correct === newCorrect ) {
				answer.correct = '';
			}
			return answer;
		} );

		newAnswers[ index ] = { ...answers[ index ], correct: newCorrect };
		onChangeAnswers( newAnswers );
	};

	const onAddAnswer = () => {
		if ( answers.length < maxAnswers ) {
			const newAnswers = [ ...answers, defaultAnswer ];
			onChangeAnswers( newAnswers );
		}
	};

	const onRemoveAnswer = index => {
		if ( answers.length > minAnswers ) {
			const newAnswers = answers.filter( ( answer, i ) => index !== i );
			onChangeAnswers( newAnswers );
		}
	};

	const renderAnswers = () => {
		const answerList = answers.map( ( answer, index ) => (
			<MatchingAnswer
				key={ index }
				index={ index }
				{ ...answer }
				answerCount={ answers.length }
				feedbackPerAnswer={ feedbackPerAnswer }
				onChangeAnswerValue={ onChangeAnswerValue }
				onChangeFeedback={ onChangeFeedback }
				onChangeCorrect={ onChangeCorrect }
				onRemoveAnswer={ answers.length > minAnswers ? onRemoveAnswer : null }
			/>
		) );
		return answerList;
	};

	const renderAddAnswer = () => {
		if ( answers.length < maxAnswers ) {
			return <button onClick={ onAddAnswer }>Add Answer</button>;
		}
	};

	return (
		<div>
			<h5 className="bulb-editor-section-label">Answers</h5>
			{ renderAnswers() }
			{ renderAddAnswer() }
		</div>
	);
};
