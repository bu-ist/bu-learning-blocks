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

// Pull in settings initialization and markup.
require_once BULB_PLUGIN_DIR_PATH . 'src/bulb-settings.php';

// Enqueue editor and front end assests.
require_once BULB_PLUGIN_DIR_PATH . 'src/enqueue-assets.php';

// Register dynamic blocks.
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-base/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-tf/index.php';

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

// Register a learning-module custom post type.
require_once BULB_PLUGIN_DIR_PATH . 'src/learning-module-cpt.php';
