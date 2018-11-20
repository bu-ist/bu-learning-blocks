/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { FontSizePicker, PanelBody } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { backgroundColorControl, textColorControl, fontSize },
			setAttributes,
		} = this.props;

		const backgroundColors = [
			{ color: '#00d1b2', name: 'teal' },
			{ color: '#3373dc', name: 'royal blue' },
			{ color: '#209cef', name: 'sky blue' },
			{ color: '#22d25f', name: 'green' },
			{ color: '#ffdd57', name: 'yellow' },
			{ color: '#ff3860', name: 'pink' },
			{ color: '#7941b6', name: 'purple' },
			{ color: '#392F43', name: 'black' },
		];

		const fontSizes = [
			{
				name: __( 'Small', 'bulearningblocks' ),
				slug: 'small',
				size: 12,
			},
			{
				name: __( 'Normal', 'bulearningblocks' ),
				slug: 'normal',
				size: 16,
			},
			{
				name: __( 'Medium', 'bulearningblocks' ),
				slug: 'medium',
				size: 20,
			},
			{
				name: __( 'Large', 'bulearningblocks' ),
				slug: 'large',
				size: 36,
			},
			{
				name: __( 'Huge', 'bulearningblocks' ),
				slug: 'huge',
				size: 48,
			},
		];

		const fallbackFontSize = 16;

		const onChangeFontSize = newFontSize => {
			setAttributes( {
				fontSize: newFontSize,
			} );
		};

		const onChangeBackgroundColor = newBackgroundColor => {
			setAttributes( {
				backgroundColorControl: newBackgroundColor,
			} );
		};

		const onChangeTextColor = newTextColor => {
			setAttributes( {
				textColorControl: newTextColor,
			} );
		};

		return (
			<InspectorControls>
				<PanelBody
					initialOpen={ false }
					title={ __( 'Font Size', 'bulearningblocks' ) }
				>
					<FontSizePicker
						fontSizes={ fontSizes }
						fallbackFontSize={ fallbackFontSize }
						value={ fontSize }
						onChange={ onChangeFontSize }
						withSlider={ true }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Text Color' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: textColorControl,
							colors: backgroundColors,
							onChange: onChangeTextColor,
							label: __( 'Text Color', 'bulearningblocks' ),
						},
					] }
				/>
				<PanelColorSettings
					title={ __( 'Background Color' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: backgroundColorControl,
							colors: backgroundColors,
							onChange: onChangeBackgroundColor,
							label: __( 'Background Color', 'bulearningblocks' ),
						},
					] }
				/>
			</InspectorControls>
		);
	}
}
