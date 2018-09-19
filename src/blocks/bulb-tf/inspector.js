/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, ColorPalette } = wp.editor;
const {
	Button,
	ButtonGroup,
	CheckboxControl,
	FontSizePicker,
	PanelBody,
	PanelRow,
	PanelColor,
	RangeControl,
	FormToggle,
	BaseControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: { backgroundColorControl, textColorControl, fontSize },
			setAttributes,
		} = this.props;

		const fontSizes = [
			{ shortName: 'S', size: 12 },
			{ shortName: 'M', size: 16 },
			{ shortName: 'L', size: 36 },
			{ shortName: 'XL', size: 48 },
		];

		const fallbackFontSize = 16;

		return (
			<InspectorControls>
				<PanelBody title={ __( 'Text Settings', 'bulearningblocks' ) }>
					<FontSizePicker
						fontSizes={ fontSizes }
						fallbackFontSize={ fallbackFontSize }
						value={ fontSize }
						onChange={ fontSize => setAttributes( { fontSize } ) }
					/>
					<PanelColor
						title={ __( 'Background Color', 'bulearningblocks' ) }
						colorValue={ backgroundColorControl }
						initialOpen={ false }
					>
						<BaseControl>
							<ColorPalette
								value={ backgroundColorControl }
								onChange={ backgroundColorControl =>
									setAttributes( { backgroundColorControl } )
								}
							/>
						</BaseControl>
					</PanelColor>

					<PanelColor
						title={ __( 'Text Color', 'bulearningblocks' ) }
						colorValue={ textColorControl }
						initialOpen={ false }
					>
						<BaseControl>
							<ColorPalette
								value={ textColorControl }
								onChange={ textColorControl =>
									setAttributes( { textColorControl } )
								}
							/>
						</BaseControl>
					</PanelColor>
				</PanelBody>
			</InspectorControls>
		);
	}
}
