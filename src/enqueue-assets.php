<?php
/**
 * Enqueue plugin assets
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

add_action( 'enqueue_block_assets', 'bulb_block_container_assets' );
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bulb_block_container_assets() {
	// Scripts.
	wp_enqueue_script(
		'bulb-blocks-front-end-js',
		BULB_PLUGIN_URL . 'src/js/blocks-front-end.js',
		array(),
		filemtime( plugin_dir_path( __DIR__ ) . 'src/js/blocks-front-end.js' ), // Version: filemtime — Gets file modification time.
		true
	);

	// Styles.
	wp_enqueue_style(
		'bulb-container-style-css',
		BULB_PLUGIN_URL . 'dist/blocks.style.build.css', // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

add_action( 'enqueue_block_editor_assets', 'bulb_block_container_editor_assets' );
/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function bulb_block_container_editor_assets() {
	wp_enqueue_script(
		'bulb-block-container-js', // Handle.
		BULB_PLUGIN_URL . 'dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bulb-block-editor-css', // Handle.
		BULB_PLUGIN_URL . 'dist/blocks.editor.build.css', // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
}
