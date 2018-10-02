const { Component } = wp.element;
const { AlignmentToolbar, BlockControls, BlockAlignmentToolbar } = wp.editor;

/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { blockAlignment, textAlignment },
			setAttributes,
		} = this.props;

		// Change Handlers
		const onChangeBlockAlignment = newAlignment =>
			setAttributes( { blockAlignment: newAlignment } );
		const onChangeTextAlignment = newAlignment =>
			setAttributes( { textAlignment: newAlignment } );

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
			</BlockControls>
		);
	}
}
