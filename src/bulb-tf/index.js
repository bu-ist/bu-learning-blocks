/**
 * BLOCK: BULB TF Question
 *
 * A True/False Question Block
 */

// Import block dependencies and components
// import Inspector from './components/inspector';
import classnames from 'classnames';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;

// Extend component
// const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType( 'bulb/question-tf',
	{
		title: __( 'BULB - T/F', 'bulearningblocks' ),
		description: __( 'Add a TRUE/FALSE question to your learning module.' ),
		icon: 'welcome-learn-more', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'bu-learning-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [
			__( 'bu-learning-block', 'bulearningblocks' ),
			__( 'BULB', 'bulearningblocks' ),
			__( 'True False Question', 'bulearningblocks' ),
		],
		attributes: {
			question: {
				type: 'array',
				source: 'children',
				selector: '.question-body',
			},
			textAlignment: {
				type: 'string',
			},
			blockAlignment: {
				type: 'string',
				default: 'wide',
			},
		},
		getEditWrapperProps( { blockAlignment } ) {
			if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
				return { 'data-align': blockAlignment };
			}
		},
		edit: props => {
			const {
				attributes: { textAlignment, blockAlignment, question },
				className, setAttributes } = props;

			return (
				<div className={ className }>
					<BlockControls>
						<BlockAlignmentToolbar
							value={ blockAlignment }
							onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
						/>
						<AlignmentToolbar
							value={ textAlignment }
							onChange={ textAlignment => setAttributes( { textAlignment } ) }
						/>
					</BlockControls>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Write your question here!', 'bulearningblocks' ) }
						style={ { textAlign: textAlignment } }
						onChange={ question => setAttributes( { question } ) }
						value={ question }
					/>
				</div>
			);
		},

		save: props => {
			const { blockAlignment, textAlignment, question } = props.attributes;
			return (
				<div
					className={classnames(
						// `align${blockAlignment}`,
						'question-body',
					) }
					style={ { textAlign: textAlignment } }
				>
					{ question }
				</div>
			);
		},
	},
);
