import FloatInput from '../../components/FloatInput';

export default ( {
	answer,
	answerRange,
	decimalPlaces,
	onChangeAnswer,
	onChangeAnswerRange,
	onChangeDecimalPlaces,
} ) => {
	const generatePossibleAnswer = () => {
		const min = parseFloat( answer ) - parseFloat( answerRange );
		const max = parseFloat( answer ) + parseFloat( answerRange );

		// prettier-ignore
		const possibleAnswer = ( ( Math.random() * ( max - min ) ) + min ).toFixed(
			decimalPlaces
		);
		return possibleAnswer;
	};

	const renderPossibleAnswers = () => {
		const possibleAnswers = [];

		const correctAnswer = parseFloat( answer ).toFixed( decimalPlaces );
		if ( ! isNaN( correctAnswer ) ) {
			possibleAnswers.push( correctAnswer );

			if ( 0 !== answerRange ) {
				for ( let i = 0; i < 4; i++ ) {
					const possibleAnswer = generatePossibleAnswer();
					if (
						! isNaN( possibleAnswer ) &&
						! possibleAnswers.includes( possibleAnswer )
					) {
						possibleAnswers.push( possibleAnswer );
					}
					if ( possibleAnswers.length >= 3 ) {
						break;
					}
				}
			}
		}

		const possibleAnswerItems = possibleAnswers.map( possibleAnswer => (
			<li key={ possibleAnswer }>{ possibleAnswer }</li>
		) );

		return (
			<div>
				<h5>Example of answers that would possibly be accepted:</h5>
				{ possibleAnswerItems.length ? (
					<ul className="possible-answers-list">{ possibleAnswerItems }</ul>
				) : (
					'No possible answers found'
				) }
			</div>
		);
	};

	return (
		<div>
			<h5>Answer:</h5>
			<FloatInput value={ answer } onChange={ onChangeAnswer } />
			<h5>Accepted Range:</h5>
			<FloatInput value={ answerRange } onChange={ onChangeAnswerRange } />
			<h5>Decimal Places:</h5>
			<input
				type="number"
				step="1"
				min="0"
				max="100"
				value={ decimalPlaces }
				onChange={ event => onChangeDecimalPlaces( event.target.value ) }
			/>
			{ renderPossibleAnswers() }
		</div>
	);
};
