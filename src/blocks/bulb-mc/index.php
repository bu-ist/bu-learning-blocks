<?php
/**
 * Multiple Choice question block
 *
 * Register dynamic block functions
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

// Load helper functions.
require_once BULB_PLUGIN_DIR_PATH . 'src/helpers/get-feedback.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/helpers/richtext-to-string.php';

/**
 * Render the dynamic block
 *
 * @param object $attributes The block's attributes.
 * @param string $content The block's content.
 * @return string The html markup for the block
 */
function bulb_render_block_mc( $attributes, $content ) {
	// Get the question block instance id.
	$id               = $attributes['id'];
	$background_color = $attributes['backgroundColorControl'];
	$text_color       = $attributes['textColorControl'];
	$font_size        = $attributes['fontSize'];

	// Transform gutenberg attributes into the proposed data structure.
	$data = [
		'type'    => 'multiple-choice',
		'header'  => bulb_richtext_to_string( $attributes['header'] ),
		'body'    => bulb_richtext_to_string( $attributes['body'] ),
		'answers' => $attributes['answers'],
	];

	// Save the block data as a JS variable.
	// Use the instance id as the variable name.
	wp_localize_script( 'slickquiz-master-js', $id, $data );

	// Print a question block wrapper with the same instance id.
	// The JS code will then be able to connect the question wrapper with its data.
	return '<div id="' . $id . '" class="bulb-question" style="background-color:' . $background_color . ';color:' . $text_color . ';font-size:' . $font_size . 'px;"></div>';
}

/**
 * Register the dynamic block
 *
 * @return void
 */
function bulb_register_question_mc() {
	register_block_type(
		'bulb/question-mc', [
			'attributes'      => [
				'id'                     => [],
				'header'                 => [],
				'body'                   => [],
				'answers'                => [
					'default' => [
						[
							'answer'   => '',
							'feedback' => '',
							'correct'  => true,
						],
						[
							'answer'   => '',
							'feedback' => '',
							'correct'  => false,
						],
					],
				],
				'textAlignment'          => [
					'default' => 'left',
				],
				'blockAlignment'         => [
					'type'    => 'string',
					'default' => 'wide',
				],
				'backgroundColorControl' => [
					'type'    => 'string',
					'default' => '#FFFFFF',
				],
				'textColorControl'       => [
					'type' => 'string',
				],
				'fontSize'               => [
					'type'    => 'string',
				],
			],
			'render_callback' => 'bulb_render_block_mc',
		]
	);
}
add_action( 'init', 'bulb_register_question_mc' );
