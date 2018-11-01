import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => {
	if ( props.singleFeedback ) {
		return (
			<div>
				<h5>{ __( 'Feedback:', 'bulearningblocks' ) }</h5>
				<EnhancedRichText
					className="question-feedback"
					placeholder={ __( 'Enter Feedback', 'bulearningblocks' ) }
					value={ props.feedback }
					onChange={ props.onFeedbackChange }
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
				value={ props.correctFeedback }
				onChange={ props.onCorrectFeedbackChange }
				{ ...props }
			/>
			<h5>{ __( 'Incorrect Feedback:', 'bulearningblocks' ) }</h5>
			<EnhancedRichText
				className="question-feedback"
				placeholder={ __( 'Enter Incorrect Feedback', 'bulearningblocks' ) }
				value={ props.incorrectFeedback }
				onChange={ props.onIncorrectFeedbackChange }
				{ ...props }
			/>
		</div>
	);
};
