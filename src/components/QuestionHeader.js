import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => (
	<div>
		<h4 className="bulb-editor-section-label">{ __( 'Question', 'bulearningblocks' ) }</h4>
		<h5 className="bulb-editor-field-label">{ __( 'Question Header', 'bulearningblocks' ) }</h5>
		<EnhancedRichText
			className="question-header"
			placeholder={ __( 'Enter Question Header', 'bulearningblocks' ) }
			{ ...props }
		/>
	</div>
);
