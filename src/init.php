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
