/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
// import Inspector from './inspector';
// import Controls from './controls';
import blockAttributes from './attributes';
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
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
			attributes: { slickQuizBase64 },
			className,
			setAttributes,
		} = props;
		const slickQuiz = decodeSlickQuiz( slickQuizBase64 );
		const onChangeQuestionHeader = newQuestionHeader => {
			const newSlickQuiz = { ...slickQuiz };
			newSlickQuiz.info.name = newQuestionHeader.join( ' ' );
			setAttributes( {
				slickQuizBase64: encodeSlickQuiz( newSlickQuiz ),
			} );
		};
		const onChangeQuestionBody = newQuestionBody => {
			const newSlickQuiz = { ...slickQuiz };
			newSlickQuiz.questions[ 0 ].q = newQuestionBody.join( ' ' );

			setAttributes( {
				slickQuizBase64: encodeSlickQuiz( newSlickQuiz ),
			} );
		};

		return (
			<Fragment>
				<div className={ classnames( className ) }>
					<RichText
						tagName="h2"
						placeholder={ __(
							'Enter your question header here..',
							'bulearningmodules'
						) }
						className={ classnames( 'question-header' ) }
						onChange={ onChangeQuestionHeader }
						value={ slickQuiz.info.name }
					/>
					<RichText
						tagName="div"
						placeholder={ __( 'Enter your question here..', 'bulearningmodules' ) }
						className={ classnames( 'question-body' ) }
						onChange={ onChangeQuestionBody }
						value={ slickQuiz.questions[ 0 ].q }
					/>
				</div>
			</Fragment>
		);
	},
	save: props => {
		const {
			attributes: { blockId, slickQuizBase64 },
		} = props;
		return (
			<div
				id={ blockId }
				className={ classnames( 'bulb-question', 'bulb-question-tf' ) }
				data-question={ slickQuizBase64 }
			/>
		);
	},
} );

function encodeSlickQuiz( slickQuiz ) {
	return window.btoa( JSON.stringify( slickQuiz ) );
}
function decodeSlickQuiz( slickQuizBase64 ) {
	return JSON.parse( window.atob( slickQuizBase64 ) );
}
