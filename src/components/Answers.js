import Answer from './Answer';

export default function Answers( { answers = [], onChangeAnswers } ) {
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
	const onChangeCorrect = index => {
		const newAnswers = answers.map( ( answer, i ) => {
			const isCorrect = index === i;
			return {
				...answer,
				correct: isCorrect,
			};
		} );
		onChangeAnswers( newAnswers );
	};

	const renderAnswers = () => {
		const answerList = answers.map( ( answer, index ) => (
			<Answer
				key={ index }
				index={ index }
				{ ...answer }
				onChangeAnswerValue={ onChangeAnswerValue }
				onChangeFeedback={ onChangeFeedback }
				onChangeCorrect={ onChangeCorrect }
			/>
		) );
		return answerList;
	};
	return (
		<div>
			<h5>Answers:</h5>
			{ renderAnswers() }
		</div>
	);
}
