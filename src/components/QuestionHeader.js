import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => (
	<div>
		<h5>{ __( 'Question Header:', 'bulearningblocks' ) }</h5>
		<EnhancedRichText
			className="question-header"
			placeholder={ __( 'Enter Question Header', 'bulearningblocks' ) }
			{ ...props }
		/>
	</div>
);
