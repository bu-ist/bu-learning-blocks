<?php

/**
 * Render the block
 *
 * @param object $attributes The block's attributes.
 * @param string $content The block's content.
 * @return string The html markup for the block
 */
function bulb_render_block_tf( $attributes, $content ) {
	$id = $attributes['id'];
	wp_localize_script( 'bulb-blocks-front-end-js', $id, $attributes );
	return '<div id="' . $id . '" class="bulb-question"></div>';
}

/**
 * Register the block
 *
 * @return void
 */
function bulb_register_tf() {
	register_block_type(
		'bulb/tf', array(
			'render_callback' => 'bulb_render_block_tf',
		)
	);
}
add_action( 'init', 'bulb_register_base' );
