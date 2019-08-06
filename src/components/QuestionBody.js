import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => (
	<div>
		<h5 className="bulb-editor-field-label" >{ __( 'Question Body', 'bulearningblocks' ) }</h5>
		<EnhancedRichText
			className="question-body"
			placeholder={ __( 'Enter Question Body', 'bulearningblocks' ) }
			{ ...props }
		/>
	</div>
);
