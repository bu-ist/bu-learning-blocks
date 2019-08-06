<?php
/**
 * BULB plugin question feedback control.
 *
 * Helper function used across multiple blocks.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

/**
 * Return feedback based on boolean control value.
 *
 * @param boolean $feedback_control Chooses which value to return.
 * @param object  $attributes The block's attributes.
 * @return string $feedback
 */
function get_feedback( $feedback_control, $attributes ) {
	$correct_feedback   = $attributes['correctFeedback'];
	$incorrect_feedback = $attributes['incorrectFeedback'];

	$feedback = $feedback_control ? $correct_feedback : $incorrect_feedback;

	return $feedback;
}
