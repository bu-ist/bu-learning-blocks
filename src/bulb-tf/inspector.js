/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RadioControl, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { radioControl, selectControl },
			setAttributes,
		} = this.props;

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
