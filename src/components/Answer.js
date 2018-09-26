import classnames from 'classnames'; // Helper library to add classnames to a component
const { __ } = wp.i18n;
const { RichText } = wp.editor;

export default function Answer( {
	index,
	answer = '',
	feedback = '',
	correct = false,
	onChangeAnswerValue,
	onChangeFeedback,
	onChangeCorrect,
	onRemoveAnswer,
	multipleCorrectAllowed,
} ) {
	const inputType = multipleCorrectAllowed ? 'checkbox' : 'radio';
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
				<strong>{ __( 'Answer:', 'bulearningblocks' ) }</strong>
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
				<strong>{ __( 'Feedback:', 'bulearningblocks' ) }</strong>
				<RichText
					tagName="p"
					placeholder={ __( 'Feedback', 'bulearningblocks' ) }
					keepPlaceholderOnFocus={ true }
					className={ classnames( 'answer-feedback' ) }
					onChange={ newFeedback => {
						onChangeFeedback( newFeedback, index );
					} }
					value={ feedback }
				/>
				<strong>
					<input
						type={ inputType }
						value="1"
						onChange={ () => {
							onChangeCorrect( index );
						} }
						checked={ correct }
					/>{ ' ' }
					{ __( 'Correct Answer', 'bulearningblocks' ) }
				</strong>
			</div>
			<div className="bulb-answer-controls">
				<button onClick={ () => onRemoveAnswer( index ) }>X</button>
			</div>
		</div>
	);
}
