/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import './styles/style.scss';
import './styles/editor.scss';

import Inspector from './inspector';
import Controls from './controls';
import QuestionHeader from '../../components/QuestionHeader';
import QuestionBody from '../../components/QuestionBody';
import QuestionFeedback from '../../components/QuestionFeedback';
import CalculatedNumericAnswer from './CalculatedNumericAnswer';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

// Register the block
export default registerBlockType( 'bulb/question-cn', {
	title: __( 'BULB - Calculated Numeric', 'bulearningblocks' ),
	description: __( 'Add a Calculated Numeric question to your learning module.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
		__( 'Calculated Numeric Question', 'bulearningblocks' ),
	],

	getEditWrapperProps( editWrapperProps ) {
		const { blockAlignment } = editWrapperProps;
		if (
			'left' === blockAlignment ||
			'right' === blockAlignment ||
			'full' === blockAlignment
		) {
			return { 'data-align': blockAlignment };
		}
	},

	edit: props => {
		const {
			attributes: {
				id,
				header,
				body,
				answer,
				answerRange,
				decimalPlaces,
				feedback,
				fontSize,
				textAlignment,
				textColorControl,
				backgroundColorControl,
			},
			className,
			setAttributes,
			clientId,
		} = props;

		if ( ! id ) {
			setAttributes( {
				id: 'bulb_question_' + clientId.replace( /-/g, '' ),
			} );
		}

		const onSimpleAttributeChange = attribute => value => {
			setAttributes( {
				[ attribute ]: value,
			} );
		};

		return (
			<div className="bulb-question-cn">
				<Fragment>
					<Inspector { ...{ setAttributes, ...props } } />
					<div id={ id } className={ classnames( 'question', className ) }>
						<QuestionHeader
							value={ header }
							onChange={ onSimpleAttributeChange( 'header' ) }
							{ ...{
								textAlignment,
								textColorControl,
								backgroundColorControl,
								fontSize,
							} }
						/>
						<QuestionBody
							value={ body }
							onChange={ onSimpleAttributeChange( 'body' ) }
							{ ...{
								textAlignment,
								textColorControl,
								backgroundColorControl,
								fontSize,
							} }
						/>
						<CalculatedNumericAnswer
							{ ...{
								answer,
								answerRange,
								decimalPlaces,
								onSimpleAttributeChange,
								setAttributes,
							} }
						/>
						<QuestionFeedback
							singleFeedback
							feedback={ feedback }
							onFeedbackChange={ onSimpleAttributeChange( 'feedback' ) }
							{ ...{
								textAlignment,
								textColorControl,
								backgroundColorControl,
								fontSize,
							} }
						/>
					</div>
					<Controls { ...{ setAttributes, ...props } } />
				</Fragment>
			</div>
		);
	},
	save: () => null,
} );
