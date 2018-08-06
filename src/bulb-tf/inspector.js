/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	ColorPalette,
} = wp.editor;
const {
	Button,
	ButtonGroup,
	CheckboxControl,
	PanelBody,
	PanelRow,
	PanelColor,
	RadioControl,
	RangeControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	Toolbar,
	SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl }, setAttributes } = this.props;

		return (
			<InspectorControls>
				<PanelBody>
					<RadioControl
						label={ __( 'Correct Answer', 'bulearningblocks' ) }
						selected={ radioControl }
						options={ [
							{ label: 'True', value: 'true' },
							{ label: 'False', value: 'false' },
						] }
						onChange={ radioControl => setAttributes( { radioControl } ) }
					/>
				</PanelBody>

				<PanelBody>
					<SelectControl
						label={ __( 'Answer Types', 'bulearningblocks' ) }
						value={ selectControl }
						options={ [
							{ value: 'a', label: __( 'True/False', 'bulearningblocks' ) },
							{ value: 'b', label: __( 'Multiple Choice', 'bulearningblocks' ) },
							{ value: 'c', label: __( 'Multiple Answer', 'bulearningblocks' ) },
						] }
						onChange={ selectControl => setAttributes( { selectControl } ) }
					/>
				</PanelBody>

			</InspectorControls>
		);
	}
}
