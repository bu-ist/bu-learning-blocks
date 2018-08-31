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
			attributes: { colorPaletteControl, rangeControl },
			setAttributes,
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody title={ __( 'Text Settings', 'bulearningblocks' ) }>
					<PanelColor
						title={ __( 'Text Color', 'bulearningblocks' ) }
						colorValue={ colorPaletteControl }
					>
						<BaseControl>
							<ColorPalette
								value={ colorPaletteControl }
								onChange={ colorPaletteControl =>
									setAttributes( { colorPaletteControl } )
								}
							/>
						</BaseControl>
					</PanelColor>

					<RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={ __( 'Text Size', 'bulearningblocks' ) }
						value={ rangeControl }
						onChange={ rangeControl =>
							setAttributes( { rangeControl } )
						}
						min={ 12 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
