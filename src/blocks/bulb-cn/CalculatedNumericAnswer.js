import FloatInput from '../../components/FloatInput';

export default ( {
	answer,
	answerRange,
	decimalPlaces,
	onSimpleAttributeChange,
	setAttributes,
} ) => {
	const generatePossibleAnswer = () => {
		const min = parseFloat( answer ) - parseFloat( answerRange );
		const max = parseFloat( answer ) + parseFloat( answerRange );

		const possibleAnswer = ( Math.random() * ( max - min ) + min ).toFixed(
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
			<FloatInput value={ answer } onChange={ onSimpleAttributeChange( 'answer' ) } />
			<h5>Accepted Range:</h5>
			<FloatInput
				value={ answerRange }
				onChange={ onSimpleAttributeChange( 'answerRange' ) }
			/>
			<h5>Decimal Places:</h5>
			<input
				type="number"
				step="1"
				min="0"
				max="100"
				value={ decimalPlaces }
				onChange={ event => {
					setAttributes( {
						decimalPlaces: event.target.value,
					} );
				} }
			/>
			{ renderPossibleAnswers() }
		</div>
	);
};
