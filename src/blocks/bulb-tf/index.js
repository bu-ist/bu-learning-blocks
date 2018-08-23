/**
 * Block dependencies
 */
import classnames from 'classnames'; // Helper library to add classnames to a component
import uuidv5 from 'uuid/v5';
import Inspector from './inspector';
import Controls from './controls';
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
			attributes: { id, header, body, textAlignment },
			className,
			setAttributes,
		} = props;

		if ( ! id ) {
			setAttributes( {
				id:
					'bulb_question_' +
					uuidv5( window.location.hostname, uuidv5.DNS ).replace(
						/-/g,
						''
					),
			} );
		}

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
				<Inspector { ...{ setAttributes, ...props } } />
				<div
					id={ id }
					className={ classnames( className ) }
				>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Question Header', 'bulearningmodules' ) }
						className={ classnames( 'question-header' ) }
						onChange={ onChangeHeader }
						value={ header }
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Question Body', 'bulearningmodules' ) }
						className={ classnames( 'question-body' ) }
						style={ { textAlign: textAlignment } }
						onChange={ onChangeBody }
						value={ body }
					/>
				</div>
				<Controls { ...{ setAttributes, ...props } } />
			</Fragment>
		);
	},
	save: () => null,
} );
