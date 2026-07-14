<?php
/**
 * BULB Blocks Initializer
 *
 *  Initialize PHP files for the plugin.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

namespace BU\Plugins\LearningBlocks;

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
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-fitb/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-mat/index.php';

// To support versions before and after 5.8, check the WordPress version and use the newer 'block_categories_all' tag if it's 5.8 or newer.
$block_category_filter = ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) ? 'block_categories_all' : 'block_categories';

// Add BULB custom block category.
add_filter(
	$block_category_filter,
	function( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'bu-learning-blocks',
					'title' => __( 'BULB', 'bu-learning-blocks' ),
				),
			)
		);
	},
	10,
	2
);

add_action( 'admin_post_install_cpt', __NAMESPACE__ . '\bulb_admin_install_cpt' );
/**
 * Update option to load custom post types.
 *
 * @since 0.0.6
 */
function bulb_admin_install_cpt() {
	update_option( 'bulb_cpt_install', 1 );

	// If the theme provides the conventional 'posts' sidebar, place a sidebar nav widget.
	if ( is_registered_sidebar( 'posts' ) ) {
		$sidebars = get_option( 'sidebars_widgets', array() );
		$posts    = isset( $sidebars['posts'] ) ? (array) $sidebars['posts'] : array();

		if ( ! in_array( 'bu_pages-1', $posts, true ) ) {
			// Add a BU Navigation widget to the front of the posts sidebar,
			// since some themes only display the first widgets in this area.
			$sidebars['posts'] = array_merge( [ 'bu_pages-1' ], $posts );
			update_option( 'sidebars_widgets', $sidebars );

			// BU Navigation widget settings, defaults from Responsive Framework.
			update_option( 'widget_bu_pages', array(
				'_multiwidget' => 1,
				1              => array(
					'navigation_title'      => 'section',
					'navigation_title_text' => '',
					'navigation_title_url'  => '',
					'navigation_style'      => 'section',
				),
			) );
		}
	}

	wp_safe_redirect( 'plugins.php' );
	exit;
}

/**
 * Load the cpt install dialog if we haven't already.
 */
if ( get_option( 'bulb_cpt_install_dialog' ) ) {
	add_action( 'admin_notices', __NAMESPACE__ . '\load_cpt_install_dialog' );
}


/**
 * Admin page dialog for choosing to load cpt + blocks or blocks only.
 *
 * @since 0.0.6
 */
function load_cpt_install_dialog() {
	?>
			<div id="message" class="updated notice">
			<p>
				<?php echo wp_kses_post( __( '<strong>Welcome to BU Learning Blocks</strong>', 'bu-learning-blocks' ) ); ?>
			</p>

			<p class="submit">

				<a href="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>?action=install_cpt"
				class="button-primary">

					<?php esc_html_e( 'Install Blocks and Pages', 'bu-learning-blocks' ); ?>

				</a>

				<a class="skip button" href="">

					<?php esc_html_e( 'Install Blocks Only', 'bu-learning-blocks' ); ?>

				</a>

			</p>
		</div>
	<?php

	delete_option( 'bulb_cpt_install_dialog' );
}

if ( get_option( 'bulb_cpt_install' ) ) {
	// Register a learning-module custom post type.
	require_once BULB_PLUGIN_DIR_PATH . 'src/learning-module-cpt.php';
}
