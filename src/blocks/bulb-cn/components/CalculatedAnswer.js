import classnames from 'classnames'; // Helper library to add classnames to a component
const { TextControl } = wp.components; //May be able to use this instead of RichText
const { __ } = wp.i18n;
const { RichText } = wp.editor;

export default function CalculatedAnswer( {
	index,
	answer = '',
	correctFeedback = '',
	incorrectFeedback = '',
	// correct = false,
	onChangeAnswerValue,
	onChangeCorrectFeedback,
	onChangeIncorrectFeedback,
	// onChangeCorrect,
	// onRemoveAnswer,
	// multipleCorrectAllowed,
} ) {
	// const inputType = multipleCorrectAllowed ? 'checkbox' : 'radio';
	return (
		<div
			className="bulb-answer"
			style={ {
				background: '#ccc',
				padding: '1rem',
				margin: '1rem 0',
				display: 'grid',
				gridTemplateColumns: '1fr auto',
				gridColumnGap: '1rem',
				justifyItems: 'stretch',
				alignItems: 'stretch',
			} }
		>
			<div className="bulb-answer-content">
				<strong>{ __( 'Correct Answer:', 'bulearningblocks' ) }</strong>
				<RichText
					tagName="p"
					placeholder={ __( 'Answer', 'bulearningblocks' ) }
					keepPlaceholderOnFocus={ true }
					className={ classnames( 'answer-text' ) }
					onChange={ newAnswerValue => {
						onChangeAnswerValue( newAnswerValue, index );
					} }
					value={ answer }
				/>
				<strong>{ __( 'Correct Answer Feedback:', 'bulearningblocks' ) }</strong>
				<RichText
					tagName="p"
					placeholder={ __( 'Correct Answer Feedback', 'bulearningblocks' ) }
					keepPlaceholderOnFocus={ true }
					className={ classnames( 'answer-feedback' ) }
					onChange={ newFeedback => {
						onChangeCorrectFeedback( newFeedback, index );
					} }
					value={ correctFeedback }
				/>
				<strong>{ __( 'Incorrect Answer Feedback:', 'bulearningblocks' ) }</strong>
				<RichText
					tagName="p"
					placeholder={ __( 'Incorrect Answer Feedback', 'bulearningblocks' ) }
					keepPlaceholderOnFocus={ true }
					className={ classnames( 'answer-feedback' ) }
					onChange={ newFeedback => {
						onChangeIncorrectFeedback( newFeedback, index );
					} }
					value={ incorrectFeedback }
				/>
			</div>
		</div>
	);
}
