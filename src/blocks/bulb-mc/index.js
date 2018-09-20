/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import blockAttributes from './attributes';
import './styles/style.scss';
import './styles/editor.scss';

import Inspector from './inspector';
import Controls from './controls';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { CheckboxControl } = wp.components;
const { Fragment } = wp.element;

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
	attributes: blockAttributes,

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
				fontSize,
				checkboxControlAnswer1,
				checkboxControlAnswer2,
				correctFeedback,
				incorrectFeedback,
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

		// Handle input field changes
		const onChangeHeader = newHeader => {
			setAttributes( {
				header: newHeader,
			} );
		};
		const onChangeBody = newBody => {
			setAttributes( {
				body: newBody,
			} );
		};

		const onChangeCorrectFeedback = newCorrectFeedback => {
			setAttributes( {
				correctFeedback: newCorrectFeedback,
			} );
		};

		const onChangeIncorrectFeedback = newIncorrectFeedback => {
			setAttributes( {
				incorrectFeedback: newIncorrectFeedback,
			} );
		};

		const onChangeCheckboxAnswer1 = newCheckboxControl => {
			setAttributes( {
				checkboxControlAnswer1: newCheckboxControl,
			} );
		};

		const onChangeCheckboxAnswer2 = newCheckboxControl => {
			setAttributes( {
				checkboxControlAnswer2: newCheckboxControl,
			} );
		};

		return (
			<div className="quizDescription">
				<Fragment>
					<Inspector { ...{ setAttributes, ...props } } />
					<div id={ id } className={ classnames( 'question', className ) }>
						<h5>Question Header:</h5>
						<RichText
							tagName="p"
							// multiline="p"
							placeholder={ __(
								'Question Header',
								'bulearningblocks'
							) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-header' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ?
									fontSize + 'px' :
									undefined,
							} }
							onChange={ onChangeHeader }
							value={ header }
						/>
						<h5>Question Body:</h5>
						<RichText
							tagName="p"
							// multiline="p"
							placeholder={ __(
								'Question Body',
								'bulearningblocks'
							) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-body' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ?
									fontSize + 'px' :
									undefined,
							} }
							onChange={ onChangeBody }
							value={ body }
						/>
						<h5>
							True:
							<CheckboxControl
								label="Correct Answer"
								checked={ checkboxControlAnswer1 }
								onChange={ onChangeCheckboxAnswer1 }
							/>
						</h5>
						<h5>
							False:
							<CheckboxControl
								label="Correct Answer"
								checked={ checkboxControlAnswer2 }
								onChange={ onChangeCheckboxAnswer2 }
							/>
						</h5>
						<h5>Correct Answer Feedback:</h5>
						<RichText
							tagName="p"
							// multiline="p"
							placeholder={ __(
								'Correct Answer Feedback',
								'bulearningblocks'
							) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-feedback' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ?
									fontSize + 'px' :
									undefined,
							} }
							onChange={ onChangeCorrectFeedback }
							value={ correctFeedback }
						/>
						<h5>Incorrect Answer Feedback:</h5>
						<RichText
							tagName="p"
							// multiline="p"
							placeholder={ __(
								'Incorrect Answer Feedback',
								'bulearningblocks'
							) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-feedback' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ?
									fontSize + 'px' :
									undefined,
							} }
							onChange={ onChangeIncorrectFeedback }
							value={ incorrectFeedback }
						/>
					</div>
					<Controls { ...{ setAttributes, ...props } } />
				</Fragment>
			</div>
		);
	},
	save: () => null,
} );
