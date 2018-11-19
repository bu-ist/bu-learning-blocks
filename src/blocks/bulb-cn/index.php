<?php
/**
 * Calculated Numeric question block
 *
 * Register dynamic block functions
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

// Load helper functions.
require_once BULB_PLUGIN_DIR_PATH . 'src/helpers/get-feedback.php';


/**
 * Render the dynamic block
 *
 * @param object $attributes The block's attributes.
 * @param string $content The block's content.
 * @return string The html markup for the block
 */
function bulb_render_block_cn( $attributes, $content ) {
	// Get the question block instance id.
	$id               = $attributes['id'];
	$background_color = $attributes['backgroundColorControl'];
	$text_color       = $attributes['textColorControl'];
	$font_size        = $attributes['fontSize'];

	// Transform gutenberg attributes into the proposed data structure.
	$data = [
		'type'          => $attributes['type'],
		'header'        => do_shortcode( $attributes['header'] ),
		'body'          => do_shortcode( $attributes['body'] ),
		'answer'        => $attributes['answer'],
		'answerRange'   => $attributes['answerRange'],
		'decimalPlaces' => $attributes['decimalPlaces'],
		'feedback'      => do_shortcode( $attributes['feedback'] ),
	];

	// Save the block data as a JS variable.
	// Use the instance id as the variable name.
	wp_localize_script( 'slickquiz-master-js', $id, $data );

	// Print a question block wrapper with the same instance id.
	// The JS code will then be able to connect the question wrapper with its data.
	return '<div id="' . $id . '" class="bulb-question" style="background-color:' . $background_color . ';color:' . $text_color . ';font-size:' . $font_size . 'px;"></div><pre>' . esc_html( wp_json_encode( $data, JSON_PRETTY_PRINT ) ) . '</pre>';
}

/**
 * Register the dynamic block
 *
 * @return void
 */
function bulb_register_question_cn() {
	register_block_type(
		'bulb/question-cn', [
			'attributes'      => [
				'id'                     => [],
				'type'                   => [
					'default' => 'calculated-numeric',
				],
				'header'                 => [],
				'body'                   => [],
				'answer'                 => [
					'default' => '0.0',
				],
				'answerRange'            => [
					'default' => '0.1',
				],
				'decimalPlaces'          => [
					'default' => 3,
				],
				'feedback'               => [],
				'textAlignment'          => [
					'default' => 'left',
				],
				'backgroundColorControl' => [
					'type' => 'string',
				],
				'textColorControl'       => [
					'type' => 'string',
				],
				'fontSize'               => [
					'type' => 'string',
				],
			],
			'render_callback' => 'bulb_render_block_cn',
		]
	);
}
add_action( 'init', 'bulb_register_question_cn' );
