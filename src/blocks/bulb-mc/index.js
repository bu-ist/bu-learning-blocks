/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

import Inspector from './inspector';
import Controls from './controls';
import Question from '../../components/Question';
import Answers from '../../components/Answers';

import './styles/style.scss';
import './styles/editor.scss';

// Register the block
export default registerBlockType( 'bulb/question-mc', {
	title: __( 'BULB - M/C', 'bulearningblocks' ),
	description: __( 'Add a Multiple Choice question to your learning module.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
		__( 'Multiple Choice Question', 'bulearningblocks' ),
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
				type,
				header,
				body,
				answers,
				correctFeedback,
				incorrectFeedback,
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
			<Fragment>
				<Inspector { ...{ setAttributes, ...props } } />
				<Question
					{ ...{
						classes: [ `bulb-question-${ type }` ],
						header,
						onChangeHeader: onSimpleAttributeChange( 'header' ),
						body,
						onChangeBody: onSimpleAttributeChange( 'body' ),
						correctFeedback,
						onChangeCorrectFeedback: onSimpleAttributeChange( 'correctFeedback' ),
						incorrectFeedback,
						onChangeIncorrectFeedback: onSimpleAttributeChange(
							'incorrectFeedback'
						),
						textAlignment,
						textColorControl,
						backgroundColorControl,
						fontSize,
					} }
				>
					<Answers
						answers={ answers }
						onChangeAnswers={ onSimpleAttributeChange( 'answers' ) }
						multipleCorrectAllowed={ false }
						minAnswers={ 2 }
						maxAnswers={ 6 }
					/>
				</Question>
				<Controls { ...{ setAttributes, ...props } } />
			</Fragment>
		);
	},
	save: () => null,
} );
