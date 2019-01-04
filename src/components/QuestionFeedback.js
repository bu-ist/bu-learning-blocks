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
					onChange={ props.onChangeFeedback }
					{ ...props }
				/>
			</div>
		);
	}
	return (
		<div>
			<h4 className="bulb-editor-section-label">{ __( 'Feedback', 'bulearningblocks' ) }</h4>
			<h5 className="bulb-editor-field-label"> { __( 'Correct Feedback', 'bulearningblocks' ) }</h5>
			<EnhancedRichText
				className="question-feedback"
				placeholder={ __( 'Enter Correct Feedback', 'bulearningblocks' ) }
				value={ props.correctFeedback }
				onChange={ props.onChangeCorrectFeedback }
				{ ...props }
			/>
			<h5 className="bulb-editor-field-label">{ __( 'Incorrect Feedback', 'bulearningblocks' ) }</h5>
			<EnhancedRichText
				className="question-feedback"
				placeholder={ __( 'Enter Incorrect Feedback', 'bulearningblocks' ) }
				value={ props.incorrectFeedback }
				onChange={ props.onChangeIncorrectFeedback }
				{ ...props }
			/>
		</div>
	);
};
