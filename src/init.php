<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Block Container
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bu_learning_blocks_block_container_assets() {
	// Scripts.
	wp_enqueue_script(
		'bulb-slick-quiz-js',
		plugins_url( 'lib/SlickQuiz/slickQuiz.js', dirname( __FILE__ ) ),
		array( 'jquery' ),
		true
	);
	wp_enqueue_script(
		'bulb-question-js',
		plugins_url( 'dist/question.js', dirname( __FILE__ ) ),
		array( 'bulb-slick-quiz-js' ),
		true
	);

	// Styles.
	wp_enqueue_style(
		'bulb-slick-quiz-css',
		plugins_url( 'lib/SlickQuiz/slickQuiz.css', dirname( __FILE__ ) )
	);
	wp_enqueue_style(
		'bu_learning_blocks-container-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function bu_learning_blocks_block_container_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'bu_learning_blocks_block_container_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function bu_learning_blocks_block_container_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'bu_learning_blocks-block-container-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bu_learning_blocks-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function bu_learning_blocks_block_container_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'bu_learning_blocks_block_container_editor_assets' );

// Add custom block category.
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'bu-learning-blocks',
				'title' => __( 'BULB', 'bulearningblocks' ),
			),
		)
	);
}, 10, 2 );
