<?php
/**
 * Base question block
 *
 * Register dynamic block functions
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

/**
 * Render the dynamic block
 *
 * @param object $attributes The block's attributes.
 * @param string $content The block's content.
 * @return string The html markup for the block
 */
function bulb_render_block_tf( $attributes, $content ) {
	// Get the question block instance id.
	$id               = $attributes['id'];
	$background_color = $attributes['backgroundColorControl'];
	$text_color       = $attributes['textColorControl'];
	$font_size        = $attributes['fontSize'];

	// Transform gutenberg attributes into the proposed data structure.
	$data = [
		'Type'    => 'true-false',
		'Header'  => bulb_richtext_to_string( $attributes['header'] ),
		'Body'    => bulb_richtext_to_string( $attributes['body'] ),
		'Answers' => [
			[
				'Answer'   => 'True',
				'Feedback' => get_feedback( $attributes['checkboxControlAnswer1'], $attributes ),
				'Correct'  => $attributes['checkboxControlAnswer1'],
			],
			[
				'Answer'   => 'False',
				'Feedback' => get_feedback( $attributes['checkboxControlAnswer2'], $attributes ),
				'Correct'  => $attributes['checkboxControlAnswer2'],
			],
		],
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
function bulb_register_question_tf() {
	register_block_type(
		'bulb/question-tf', array(
			'render_callback' => 'bulb_render_block_tf',
		)
	);
}
add_action( 'init', 'bulb_register_question_tf' );

/**
 * Convert the RichText component value to string.
 *
 * TODO: Implement actual logic for this function.
 * TODO: Extract this to a separate file so it can be reused.
 *
 * @param array $value The RichText component value.
 * @return string
 */
function bulb_richtext_to_string( $value ) {
	if ( is_array( $value ) ) {
		return $value[0];
	}
	return $value;
}

/**
 * Return feedback based on boolean control value.
 *
 * TODO: Extract this to a separate file so it can be reused.
 *
 * @param boolean $control Chooses which value to return.
 * @param object  $attributes The block's attributes.
 * @return string $feedback
 */
function get_feedback( $control, $attributes ) {
	$correct_feedback   = $attributes['trueFeedback'];
	$incorrect_feedback = $attributes['falseFeedback'];

	$feedback = $control ? $correct_feedback : $incorrect_feedback;

	return $feedback;
}
