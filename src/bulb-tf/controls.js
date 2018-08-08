import classnames from 'classnames';
import icons from './icons';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls, BlockAlignmentToolbar } = wp.editor;
const { Toolbar, Button, Tooltip } = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { highContrast, blockAlignment, textAlignment },
			setAttributes,
		} = this.props;

		// Change Handlers
		const onChangeBlockAlignment = newAlignment =>
			setAttributes( { blockAlignment: newAlignment } );
		const onChangeTextAlignment = newAlignment =>
			setAttributes( { textAlignment: newAlignment } );
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
