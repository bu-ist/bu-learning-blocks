import icons from './icons';
import classnames from 'classnames';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls, BlockAlignmentToolbar } = wp.editor;
const { Dashicon, Toolbar, Button, Tooltip } = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { highContrast, blockAlignment, textAlignment },
			className,
			setAttributes,
		} = this.props;

		// Change Handlers
		const onChangeBlockAlignment = blockAlignment =>
			setAttributes( { blockAlignment } );
		const onChangeTextAlignment = textAlignment =>
			setAttributes( { textAlignment } );
		const toggleHighContrast = () =>
			setAttributes( { highContrast: ! highContrast } );

		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ blockAlignment }
					onChange={ onChangeBlockAlignment }
				/>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeTextAlignment }
				/>
				<Toolbar>
					<Tooltip text={ __( 'High Contrast', 'bulearningblocks' ) }>
						<Button
							className={ classnames(
								'components-icon-button',
								'components-toolbar__control',
								{ 'is-active': highContrast }
							) }
							onClick={ toggleHighContrast }
						>
							{ icons.contrast }
						</Button>
					</Tooltip>
				</Toolbar>
			</BlockControls>
		);
	}
}
