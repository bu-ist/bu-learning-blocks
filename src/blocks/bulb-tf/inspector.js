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
			attributes: { backgroundColorControl, textColorControl, textSizeControl },
			setAttributes,
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody title={ __( 'Text Settings', 'bulearningblocks' ) }>
					<PanelColor
						title={ __( 'Background Color', 'bulearningblocks' ) }
						colorValue={ backgroundColorControl }
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

					<RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={ __( 'Font Size', 'bulearningblocks' ) }
						value={ textSizeControl }
						onChange={ textSizeControl =>
							setAttributes( { textSizeControl } )
						}
						min={ 12 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
