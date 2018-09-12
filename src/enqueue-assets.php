<?php
/**
 * Enqueue plugin assets
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

add_action( 'enqueue_block_assets', 'bulb_block_assets' );
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
		wp_enqueue_script( 'jquery' );

		// wp_enqueue_script(
		// 	'bulb-blocks-front-end-js',
		// 	BULB_PLUGIN_URL . 'src/js/blocks-front-end.js',
		// 	array(),
		// 	filemtime( plugin_dir_path( __DIR__ ) . 'src/js/blocks-front-end.js' ), // Version: filemtime — Gets file modification time.
		// 	true
		// );

		wp_enqueue_script(
			'slickquiz-master-js',
			BULB_PLUGIN_URL . 'src/js/master.js',
			array( 'jquery' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'src/js/master.js' ), // Version: filemtime — Gets file modification time.
			true
		);

		wp_enqueue_script(
			'slickquiz-js',
			BULB_PLUGIN_URL . 'src/js/slickQuiz.js',
			array( 'jquery' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'src/js/slickQuiz.js' ), // Version: filemtime — Gets file modification time.
			true
		);

		wp_enqueue_script(
			'slickquiz-config-js',
			BULB_PLUGIN_URL . 'src/js/slickQuiz-config.js',
			array( 'jquery' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'src/js/slickQuiz-config.js' ), // Version: filemtime — Gets file modification time.
			true
		);

		wp_enqueue_style(
			'slickquiz-css',
			BULB_PLUGIN_URL . 'src/css/slickQuiz.css', // Block style CSS.
			array( 'wp-blocks' ), // Dependency to include the CSS after it.
			filemtime( plugin_dir_path( __DIR__ ) . 'src/css/slickQuiz.css' ) // Version: filemtime — Gets file modification time.
		);
	}
}

add_action( 'enqueue_block_editor_assets', 'bulb_block_editor_assets' );
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
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bulb-style-css',
		BULB_PLUGIN_URL . 'dist/blocks.style.build.css', // Block style CSS.
		array( 'wp-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

