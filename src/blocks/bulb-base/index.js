/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import uuidv5 from 'uuid/v5'; // Helper library to generate unique question IDs
import blockAttributes from './attributes';
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { Fragment } = wp.element;

// Register the block
export default registerBlockType( 'bulb/base', {
	title: __( 'BULB - Base', 'bulearningblocks' ),
	description: __( 'A generic base block.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bulearningblocks' ),
		__( 'BULB', 'bulearningblocks' ),
	],
	attributes: blockAttributes,

	edit: props => {
		const {
			attributes: { id, header, body },
			className,
			setAttributes,
		} = props;

		// Generate question id on block instantiation
		if ( ! id ) {
			setAttributes( {
				id:
					'bulb_question_' +
					uuidv5( window.location.hostname, uuidv5.DNS ).replace( /-/g, '' ),
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

		return (
			<Fragment>
				<div id={ id } className={ classnames( 'mystring', className ) }>
					<RichText
						tagName="div"
						placeholder={ __( 'Question Header', 'bulearningblocks' ) }
						className={ classnames( 'question-header' ) }
						onChange={ onChangeHeader }
						value={ header }
					/>
					<RichText
						tagName="div"
						placeholder={ __( 'Question Body', 'bulearningblocks' ) }
						className={ classnames( 'question-body' ) }
						onChange={ onChangeBody }
						value={ body }
					/>
				</div>
			</Fragment>
		);
	},

	save: () => null,
} );
