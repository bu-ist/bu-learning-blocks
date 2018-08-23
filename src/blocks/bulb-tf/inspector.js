/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RadioControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { radioControl },
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
						onChange={ value => setAttributes( { radioControl: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
