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

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

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
		const onChangeAnswers = newAnswers => {
			setAttributes( {
				answers: newAnswers,
			} );
		};

		return (
			<div className="quizDescription">
				<Fragment>
					<Inspector { ...{ setAttributes, ...props } } />
					<div id={ id } className={ classnames( 'question', className ) }>
						<QuestionHeader
							value={ header }
							onChange={ onChangeHeader }
							textAlignment={ textAlignment }
							textColorControl={ textColorControl }
							backgroundColorControl={ backgroundColorControl }
							fontSize={ fontSize }
						/>
						<QuestionBody
							value={ body }
							onChange={ onChangeBody }
							textAlignment={ textAlignment }
							textColorControl={ textColorControl }
							backgroundColorControl={ backgroundColorControl }
							fontSize={ fontSize }
						/>
						<Answers
							answers={ answers }
							onChangeAnswers={ onChangeAnswers }
							multipleCorrectAllowed={ true }
							minAnswers={ 2 }
							maxAnswers={ 6 }
						/>
					</div>
					<Controls { ...{ setAttributes, ...props } } />
				</Fragment>
			</div>
		);
	},
	save: () => null,
} );
