/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;


/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor() {
		super( ...arguments );
    }

	render() {
        const { attributes: { blockAlignment, textAlignment }, setAttributes } = this.props;

        // Change Handlers
        const onChangeBlockAlignment =  blockAlignment => setAttributes( { blockAlignment } );
        const onChangeTextAlignment = textAlignment => setAttributes( { textAlignment } );

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
