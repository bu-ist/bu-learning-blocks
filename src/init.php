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

function bulb_settings_pages() {
	add_menu_page(
		__( 'BU Learning Blocks', 'bulearningblocks' ),
		__( 'BULB Menu', 'bulearningblocks' ),
		'manage_options',
		'bulb',
		'bulb_settings_page_markup',
		'dashicons-welcome-learn-more',
		100
	);

	add_submenu_page(
		'bulb',
		__( 'BULB Feature 1', 'bulearningblocks' ),
		__( 'Feature 1', 'bulearningblocks' ),
		'manage_options',
		'bulb-feature-1',
		'bulb_settings_page_markup'
	);

	add_submenu_page(
		'bulb',
		__( 'BULB Feature 2', 'bulearningblocks' ),
		__( 'Feature 2', 'bulearningblocks' ),
		'manage_options',
		'bulb-feature-2',
		'bulb_settings_page_markup'
	);
}

add_action( 'admin_menu', 'bulb_settings_pages' );

function bulb_settings_page_markup() {
	if ( !current_user_can( 'manage_options') ) {
		return;
	}
	?>
	<div class="wrap">
		<h1><?php esc_html_e( get_admin_page_title() ); ?></h1>
		<p><?php esc_html_e( 'Some content.' ); ?></p>
	</div>
	<?php
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bu_learning_blocks_block_container_assets() {
	// Styles.
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