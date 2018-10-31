/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import './styles/style.scss';
import './styles/editor.scss';

import Inspector from './inspector';
import Controls from './controls';
import FloatInput from '../../components/FloatInput';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
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
				decimalNumbers,
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

		const generatePossibleAnswer = () => {
			const min = parseFloat( answer ) - parseFloat( answerRange );
			const max = parseFloat( answer ) + parseFloat( answerRange );

			const possibleAnswer = ( Math.random() * ( max - min ) + min ).toFixed(
				decimalNumbers
			);
			return possibleAnswer;
		};

		const renderPossibleAnswers = () => {
			const possibleAnswers = [];

			if ( 0 === answerRange ) {
				possibleAnswers.push( answer );
			} else {
				for ( let i = 0; i < 6; i++ ) {
					const possibleAnswer = generatePossibleAnswer();
					if (
						! isNaN( possibleAnswer ) &&
						! possibleAnswers.includes( possibleAnswer )
					) {
						possibleAnswers.push( possibleAnswer );
					}
					if ( possibleAnswers.length >= 3 ) {
						break;
					}
				}
			}

			const possibleAnswerItems = possibleAnswers.map( possibleAnswer => (
				<li key={ possibleAnswer }>{ possibleAnswer }</li>
			) );

			return (
				<div>
					<h5>Example of answers that would be possibly be accepted:</h5>
					{ possibleAnswerItems.length ? (
						<ul className="possible-answers-list">{ possibleAnswerItems }</ul>
					) : (
						'No possible answers found'
					) }
				</div>
			);
		};

		return (
			<div className="quizDescription">
				<Fragment>
					<Inspector { ...{ setAttributes, ...props } } />
					<div id={ id } className={ classnames( 'question', className ) }>
						<h5>Question Header:</h5>
						<RichText
							tagName="p"
							placeholder={ __( 'Enter Question Header', 'bulearningblocks' ) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-header' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ? fontSize + 'px' : undefined,
							} }
							onChange={ onChangeHeader }
							value={ header }
						/>
						<h5>Question Body:</h5>
						<RichText
							tagName="p"
							placeholder={ __( 'Enter Question Body', 'bulearningblocks' ) }
							keepPlaceholderOnFocus={ true }
							className={ classnames( 'question-body' ) }
							style={ {
								textAlign: textAlignment,
								color: textColorControl,
								backgroundColor: backgroundColorControl,
								fontSize: fontSize ? fontSize + 'px' : undefined,
							} }
							onChange={ onChangeBody }
							value={ body }
						/>
						<div>
							<h5>Answer:</h5>
							<FloatInput
								value={ answer }
								onChange={ value =>
									setAttributes( {
										answer: value,
									} )
								}
							/>
							<h5>Accepted Range:</h5>
							<FloatInput
								value={ answerRange }
								onChange={ value =>
									setAttributes( {
										answerRange: value,
									} )
								}
							/>
							<h5>Decimal Numbers:</h5>
							<input
								type="number"
								step="1"
								min="0"
								max="100"
								value={ decimalNumbers }
								onChange={ event => {
									setAttributes( {
										decimalNumbers: event.target.value,
									} );
								} }
							/>
							{ renderPossibleAnswers() }
						</div>
					</div>
					<Controls { ...{ setAttributes, ...props } } />
				</Fragment>
			</div>
		);
	},
	save: () => null,
} );
