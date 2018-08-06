/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Controls from './controls';
import attributes from './attributes';
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
} = wp.editor;

// Register the block
export default registerBlockType( 'bulb/question-tf',
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
		attributes,
		getEditWrapperProps( attributes ) {
			const { blockAlignment } = attributes;
			if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
				return { 'data-align': blockAlignment };
			}
		},
		edit: props => {
			const { attributes: { textAlignment, blockAlignment, question },
				attributes, className, setAttributes } = props;

			return [
				<Inspector { ...{ setAttributes, ...props } } />,
				<Controls { ...{ setAttributes, ...props } } />,
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Enter your question here..', 'bulearningmodules' ) }
					value={ question }
					className={ classnames(
						'question-body',
					) }
					style={ { textAlign: textAlignment } }
					onChange={ ( question ) => props.setAttributes( { question } ) }
				/>,
			];
		},
		save: props => {
			const { attributes: { textAlignment, question }, attributes } = props;

			// const settings = getSettings( attributes );
			const className = classnames(
				'question-body',
			);
			return (
				<div
					className={ className }
					style={ { textAlign: textAlignment } }
				>
					{ question }
				</div>
			);
		},
	},
);
