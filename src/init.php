<?php
/**
 * BULB Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Pull in settings initilaization and markup.
require_once BULB_PLUGIN_DIR_PATH . 'src/bulb-settings.php';

add_filter( 'plugin_action_links_' . BULB_PLUGIN_BASENAME, 'add_action_links' );
/**
 * Plugin menu link to settings.
 *
 * @param array[] $links Array of links to be shown on plugin page.
 *
 * @since 0.0.1
 */
function add_action_links( $links ) {
	$mylinks = array(
		'<a href="' . admin_url( 'admin.php?page=bulb' ) . '">Settings</a>',
	);
	return array_merge( $links, $mylinks );
}

add_action( 'enqueue_block_assets', 'bulb_block_container_assets' );
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bulb_block_container_assets() {
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
		BULB_PLUGIN_URL . '/dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
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

add_action( 'init', 'bulb_register_learning_module_post_type' );
/**
 * Calls register_post_type
 *
 * @since 0.0.1
 */
function bulb_register_learning_module_post_type() {
	// Set various pieces of text, $labels is used inside the $args array.
	$labels = array(
		'name'          => __( 'Learning Modules', 'bulearningblocks' ),
		'singular_name' => __( 'Learning Module', 'bulearningblocks' ),
		'add_new'       => __( 'Add New Learning Module' ),
		'add_new_item'  => __( 'Add New Learning Module' ),
		'edit_item'     => __( 'Edit Learning Module' ),
		'new_item'      => __( 'New Learning Module' ),
		'all_items'     => __( 'All Learning Modules' ),
		'view_item'     => __( 'View Learning Module' ),
		'search_items'  => __( 'Search Learning Modules' ),
	);

	// Set various pieces of information about the post type.
	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Holds our Learning Modules', 'bulearningblocks' ),
		'public'             => true,
		'publicly_queryable' => true,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'revisions', 'page-attributes' ),
		'hierarchical'       => true,
		'has_archive'        => true,
		'rewrite'            => array( 'slug' => 'modules' ),
		'show_in_admin_bar'  => true,
		'show_in_nav_menus'  => true,
		'show_in_rest'       => true,
		'can_export'         => true,
	);

	// Register the movie post type with all the information contained in the $arguments array.
	register_post_type( 'learning_module', $args );
}
