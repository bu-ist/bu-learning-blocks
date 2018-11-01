import EnhancedRichText from './EnhancedRichText';

const { __ } = wp.i18n;

export default props => (
	<div>
		<h5>{ __( 'Question Body:', 'bulearningblocks' ) }</h5>
		<EnhancedRichText
			className="question-body"
			placeholder={ __( 'Enter Question Body', 'bulearningblocks' ) }
			{ ...props }
		/>
	</div>
);
