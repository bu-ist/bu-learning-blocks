/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

import Question from '../../components/Question';
import Controls from '../../components/Controls';
import Inspector from '../../components/Inspector';
import CalculatedNumericAnswer from './CalculatedNumericAnswer';

import './styles/style.scss';
import './styles/editor.scss';

// Register the block
export default registerBlockType( 'bulb/question-cn', {
	title: __( 'BULB - Calculated Numeric', 'bulearningblocks' ),
	description: __(
		'Add a Calculated Numeric question to your learning module.'
	),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
		__( 'Calculated Numeric Question', 'bulearningblocks' ),
	],

	edit: props => {
		const {
			attributes: {
				id,
				type,
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
					<Inspector { ...props } />
					<Controls { ...props } />
					<Question
						{ ...{
							classes: [ `bulb-question-${ type }` ],
							header,
							onChangeHeader: onSimpleAttributeChange( 'header' ),
							body,
							onChangeBody: onSimpleAttributeChange( 'body' ),
							singleFeedback: true,
							feedback,
							onChangeFeedback: onSimpleAttributeChange(
								'feedback'
							),
							textAlignment,
							textColorControl,
							backgroundColorControl,
							fontSize,
						} }
					>
						<CalculatedNumericAnswer
							answer={ answer }
							answerRange={ answerRange }
							decimalPlaces={ decimalPlaces }
							onChangeAnswer={ onSimpleAttributeChange( 'answer' ) }
							onChangeAnswerRange={ onSimpleAttributeChange(
								'answerRange'
							) }
							onChangeDecimalPlaces={ onSimpleAttributeChange(
								'decimalPlaces'
							) }
						/>
					</Question>
				</Fragment>
			</div>
		);
	},
	save: () => null,
} );
