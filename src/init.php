<?php
/**
 * BULB Blocks Initializer
 *
 *  Initialize PHP files for the plugin.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Enqueue editor and front end assets.
require_once BULB_PLUGIN_DIR_PATH . 'src/enqueue-assets.php';

// Load dynamic blocks.
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-cn/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-ma/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-mc/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-tf/index.php';



// Add BULB custom block category.
add_filter(
	'block_categories',
	function( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'bu-learning-blocks',
					'title' => __( 'BULB', 'bulearningblocks' ),
				),
			)
		);
	},
	10,
	2
);

// Register a learning-module custom post type.
require_once BULB_PLUGIN_DIR_PATH . 'src/learning-module-cpt.php';

function bulb_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'BULB Module Sidebar' ),
			'id'            => 'bulb-module-sidebar',
			'description'   => __( 'Add widgets here to appear on your BULB module pages.' ),
			'before_widget' => '<aside id="sidebarPosts">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}
add_action( 'widgets_init', 'bulb_widgets_init' );
