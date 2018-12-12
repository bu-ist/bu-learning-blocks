<?php
/**
 * Enqueue plugin assets
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bulb_block_assets() {
	// Scripts.
	if ( ! is_admin() ) {
		wp_enqueue_script(
			'bulb-frontend-js', // Handle.
			BULB_PLUGIN_URL . 'dist/frontend.build.js', // frontend.build.js: We handle the frontend logic here. Built with Webpack.
			array( 'wp-element' ), // Depending on 'wp-element' makes sure react and react-dom is available on the frontend.
			filemtime( plugin_dir_path( __DIR__ ) . 'dist/frontend.build.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);
	}

	// Styles.
	wp_enqueue_style(
		'bulb-block-style-css',
		BULB_PLUGIN_URL . 'dist/blocks.style.build.css', // Block style CSS.
		array(), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
}
add_action( 'enqueue_block_assets', 'bulb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function bulb_block_editor_assets() {
	wp_enqueue_script(
		'bulb-block-js', // Handle.
		BULB_PLUGIN_URL . 'dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bulb-block-editor-css',
		BULB_PLUGIN_URL . 'dist/blocks.editor.build.css', // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
}
add_action( 'enqueue_block_editor_assets', 'bulb_block_editor_assets' );


