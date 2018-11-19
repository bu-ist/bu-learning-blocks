/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

import Question from '../../components/Question';
import Answers from '../../components/Answers';
import Controls from '../../components/Controls';
import Inspector from '../../components/Inspector';

import './styles/style.scss';
import './styles/editor.scss';

// Register the block
export default registerBlockType( 'bulb/question-ma', {
	title: __( 'BULB - M/A', 'bulearningblocks' ),
	description: __( 'Add a Multiple Answer question to your learning module.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
		__( 'Multiple Answer Question', 'bulearningblocks' ),
	],

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
				<Controls { ...{ setAttributes, ...props } } />
				<Question
					{ ...{
						classes: [ `bulb-question-${ type }` ],
						header,
						onChangeHeader: onSimpleAttributeChange( 'header' ),
						body,
						onChangeBody: onSimpleAttributeChange( 'body' ),
						correctFeedback,
						onChangeCorrectFeedback: onSimpleAttributeChange(
							'correctFeedback'
						),
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
						multipleCorrectAllowed={ true }
						minAnswers={ 2 }
						maxAnswers={ 6 }
					/>
				</Question>
			</Fragment>
		);
	},
	save: () => null,
} );
