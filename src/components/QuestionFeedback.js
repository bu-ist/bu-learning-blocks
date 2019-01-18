import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => {
	const onChangeFeedback = changedFeedback => {
		const newFeedback = { ...props.feedback, ...changedFeedback };
		props.onChangeFeedback( newFeedback );
	};

	if ( props.singleFeedback ) {
		return (
			<div>
				<h5>{ __( 'Feedback:', 'bulearningblocks' ) }</h5>
				<EnhancedRichText
					className="question-feedback"
					placeholder={ __( 'Enter Feedback', 'bulearningblocks' ) }
					value={ props.feedback.correct }
					onChange={ newValue =>
						onChangeFeedback( {
							correct: newValue,
							incorrect: newValue,
						} )
					}
					{ ...props }
				/>
			</div>
		);
	}
	return (
		<div>
			<h5>{ __( 'Correct Feedback:', 'bulearningblocks' ) }</h5>
			<EnhancedRichText
				className="question-feedback"
				placeholder={ __( 'Enter Correct Feedback', 'bulearningblocks' ) }
				value={ props.feedback.correct }
				onChange={ newValue => onChangeFeedback( { correct: newValue } ) }
				{ ...props }
			/>
			<h5>{ __( 'Incorrect Feedback:', 'bulearningblocks' ) }</h5>
			<EnhancedRichText
				className="question-feedback"
				placeholder={ __( 'Enter Incorrect Feedback', 'bulearningblocks' ) }
				value={ props.feedback.incorrect }
				onChange={ newValue => onChangeFeedback( { incorrect: newValue } ) }
				{ ...props }
			/>
		</div>
	);
};
