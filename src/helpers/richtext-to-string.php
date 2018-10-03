<?php
/**
 * Convert Richtext attributes to strings.
 *
 * Helper function used across multiple blocks.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

/**
 * Convert the RichText component value to string.
 *
 * TODO: Implement actual logic for this function.
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
