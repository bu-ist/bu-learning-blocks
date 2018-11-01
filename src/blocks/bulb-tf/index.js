/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import './styles/style.scss';
import './styles/editor.scss';
import Answers from '../../components/Answers';

import Inspector from './inspector';
import Controls from './controls';
import QuestionHeader from '../../components/QuestionHeader';
import QuestionBody from '../../components/QuestionBody';
import QuestionFeedback from '../../components/QuestionFeedback';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

// Register the block
export default registerBlockType( 'bulb/question-tf', {
	title: __( 'BULB - T/F', 'bulearningblocks' ),
	description: __( 'Add a TRUE/FALSE question to your learning module.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
		__( 'True False Question', 'bulearningblocks' ),
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
				answers,
				correctFeedback,
				incorrectFeedback,
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
			<div className="quizDescription">
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
						<Answers
							answers={ answers }
							onChangeAnswers={ onSimpleAttributeChange( 'answers' ) }
							multipleCorrectAllowed={ false }
							minAnswers={ 2 }
							maxAnswers={ 2 }
						/>
						<QuestionFeedback
							correctFeedback={ correctFeedback }
							onCorrectFeedbackChange={ onSimpleAttributeChange(
								'correctFeedback'
							) }
							incorrectFeedback={ incorrectFeedback }
							onIncorrectFeedbackChange={ onSimpleAttributeChange(
								'incorrectFeedback'
							) }
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
