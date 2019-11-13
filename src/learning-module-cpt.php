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
		'name'               => __( 'Lesson Pages', 'bulearningblocks' ),
		'singular_name'      => __( 'Lesson Page', 'bulearningblocks' ),
		'menu_name'          => __( 'Courses', 'bulearningblocks' ),
		'add_new'            => __( 'New Lesson Page', 'bulearningblocks' ),
		'add_new_item'       => __( 'New Lesson Page', 'bulearningblocks' ),
		'edit_item'          => __( 'Edit Lesson Page', 'bulearningblocks' ),
		'update_item'        => __( 'Update Lesson Page', 'bulearningblocks' ),
		'new_item'           => __( 'New Lesson Page', 'bulearningblocks' ),
		'all_items'          => __( 'All Lesson Pages', 'bulearningblocks' ),
		'view_item'          => __( 'View Lesson Page', 'bulearningblocks' ),
		'view_items'         => __( 'View Lesson Pages', 'bulearningblocks' ),
		'attributes'         => __( 'Lesson Page Attributes', 'bulearningblocks' ),
		'search_items'       => __( 'Search Lesson Pages', 'bulearningblocks' ),
		'not_found'          => __( 'No Lesson Pages found', 'bulearningblocks' ),
		'not_found_in_trash' => __( 'No Lessons Pages found in Trash', 'bulearningblocks' ),
		'archives'           => __( 'Lesson Page Archives', 'bulearningblocks' ),
		'parent_item_colon'  => __( 'Lesson Page:', 'bulearningblocks' ),
	);
	$rewrite = array(
		'slug'       => 'lessons',
		'with_front' => true,
		'pages'      => true,
		'feeds'      => false,
	);

	// Set various pieces of information about the post type.
	$args = array(
		'labels'              => $labels,
		'description'         => __( 'Holds our Lessons', 'bulearningblocks' ),
		'public'              => true,
		'publicly_queryable'  => true,
		'query_var'           => true,
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'editor',
			'author',
			'revisions',
			'custom-fields',
			'page-attributes',
		),
		'taxonomies'          => array( 'bulb-courses' ),
		'hierarchical'        => true,
		'has_archive'         => true,
		'rewrite'             => $rewrite,
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => true,
		'show_in_rest'        => true,
		'can_export'          => true,
		'menu_icon'           => 'dashicons-welcome-learn-more',
		'menu_position'       => 30,
		'exclude_from_search' => false,
	);
	register_post_type( 'bulb-learning-module', $args );
}
add_action( 'init', 'bulb_register_learning_module_post_type' );

function register_taxonomies() {

	$labels  = array(
		'name'                       => _x( 'Courses', 'Taxonomy General Name', 'bulearningblocks' ),
		'singular_name'              => _x( 'Course', 'Taxonomy Singular Name', 'bulearningblocks' ),
		'menu_name'                  => __( 'Courses', 'bulearningblocks' ),
		'all_items'                  => __( 'All Courses', 'bulearningblocks' ),
		'view_item'                  => __( 'View Course', 'bulearningblocks' ),
		'parent_item'                => __( 'Parent Course', 'bulearningblocks' ),
		'parent_item_colon'          => __( 'Parent Course:', 'bulearningblocks' ),
		'new_item_name'              => __( 'New Course Name', 'bulearningblocks' ),
		'add_new_item'               => __( 'Add New Course', 'bulearningblocks' ),
		'edit_item'                  => __( 'Edit Course', 'bulearningblocks' ),
		'update_item'                => __( 'Update Course', 'bulearningblocks' ),
		'separate_items_with_commas' => __( 'Separate courses with commas', 'bulearningblocks' ),
		'search_items'               => __( 'Search Courses', 'bulearningblocks' ),
		'add_or_remove_items'        => __( 'Add or remove courses', 'bulearningblocks' ),
		'choose_from_most_used'      => __( 'Choose from the most used courses', 'bulearningblocks' ),
		'not_found'                  => __( 'Not Found', 'bulearningblocks' ),
	);
	$rewrite = array(
		'slug'         => 'courses',
		'with_front'   => true,
		'hierarchical' => false,
	);
	$args    = array(
		'labels'            => $labels,
		'hierarchical'      => true,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_nav_menus' => true,
		'show_in_rest'      => true,
		'show_tagcloud'     => true,
		'rewrite'           => $rewrite,
		'has_archive'       => true,
	);
	register_taxonomy( 'bulb-courses', 'bulb-learning-module', $args );
}
add_action( 'init', 'register_taxonomies' );

/**
 * Flush rewrite rules for CPT
 *
 * @since 0.0.4
 */
function bulb_flush_rewrites() {
	bulb_register_learning_module_post_type();
	flush_rewrite_rules();
}
register_activation_hook( BULB_PLUGIN_FILE_PATH, 'bulb_flush_rewrites' );


/**
 * Enqueue the custom post type's single- template.
 *
 * @param string $single Template file to be filtered.
 *
 * @return string $single Filtered template.
 *
 * @since 0.0.2
 */
function bulb_cpt_template( $single ) {
	global $post;

	/* Checks for single template by post type */
	if ( 'bulb-learning-module' === $post->post_type ) {
		if ( file_exists( BULB_PLUGIN_DIR_PATH . 'src/single-bulb-learning-module.php' ) ) {
			return BULB_PLUGIN_DIR_PATH . 'src/single-bulb-learning-module.php';
		}
	}

	return $single;

}
/* Filter the single_template with our custom function*/
add_filter( 'single_template', 'bulb_cpt_template' );

/**
 * Load custom archive template.
 *
 * @param string $archive_template Template to be replaced.
 *
 * @return string $archive_template New Template.
 */
function get_custom_post_type_template( $archive_template ) {
	global $post;

	if ( is_post_type_archive( 'bulb-learning-module' ) ) {
		$archive_template = dirname( __FILE__ ) . '/bulb-learning-module-archive.php';
	}
	return $archive_template;
}
add_filter( 'archive_template', 'get_custom_post_type_template' );

/**
 * Enqueue the custom Taxonomy's archive template.
 *
 * @param string $archive Template file to be filtered.
 *
 * @return string $archive Filtered template.
 *
 * @since 0.0.5
 */
function bulb_archive_template( $template ) {

	/* Checks for single template by post type */
	if ( is_tax( 'bulb-courses' ) ) {
		if ( file_exists( BULB_PLUGIN_DIR_PATH . 'src/taxonomy-bulb-courses.php' ) ) {
			return BULB_PLUGIN_DIR_PATH . 'src/taxonomy-bulb-courses.php';
		}
	}

	return $template;

}
/* Filter the single_template with our custom function*/
add_filter( 'template_include', 'bulb_archive_template' );

/**
 * Load script to kill attributes panel in Document editor panel.
 *
 * @since 0.0.3
 */
function remove_bulb_attributes_panel() {
	wp_enqueue_script(
		'remove-panel-js',
		BULB_PLUGIN_URL . 'src/remove_attributes_panel.js',
		array(),
		filemtime( plugin_dir_path( __DIR__ ) . 'src/remove_attributes_panel.js' ), // Gets file modification time for cache busting.
		true // Enqueue the script in the footer.
	);
}
if ( class_exists( 'BU_Navigation_Plugin' ) ) {
	add_action( 'enqueue_block_editor_assets', 'remove_bulb_attributes_panel' );
}
