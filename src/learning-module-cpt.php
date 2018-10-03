<?php
/**
 * Register the Learning Module custom post type.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

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

	register_post_type( 'bulb_learning_module', $args );
}
add_action( 'init', 'bulb_register_learning_module_post_type' );

