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
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'You do not have permission to install BU Learning Blocks post types.', 'bu-learning-blocks' ) );
	}
	check_admin_referer( 'bulb_install_cpt' );

	update_option( 'bulb_cpt_install', 1 );

	// If BULB is activated with a responsive-framework theme, place a sidebar nav widget.
	// Placement is limited to BU Responsive Framework themes, where the BU Navigation
	// widget and the 'posts' sidebar are known to be available.
	if ( 0 === strpos( get_template(), 'responsive-framework' ) && is_registered_sidebar( 'posts' ) ) {
		$sidebars = wp_get_sidebars_widgets();
		$posts    = isset( $sidebars['posts'] ) ? (array) $sidebars['posts'] : array();

		// Skip placement if the posts sidebar already has a navigation widget.
		if ( empty( preg_grep( '/^bu_pages-\d+$/', $posts ) ) ) {
			// Register the settings as a new widget instance, preserving any
			// existing BU Navigation widget instances in other sidebars.
			$widget_settings = get_option( 'widget_bu_pages', array() );
			$instance_ids    = array_filter( array_keys( (array) $widget_settings ), 'is_int' );
			$instance_id     = empty( $instance_ids ) ? 1 : max( $instance_ids ) + 1;

			// BU Navigation widget settings, defaults from Responsive Framework.
			$widget_settings[ $instance_id ] = array(
				'navigation_title'      => 'section',
				'navigation_title_text' => '',
				'navigation_title_url'  => '',
				'navigation_style'      => 'section',
			);
			$widget_settings['_multiwidget'] = 1;
			update_option( 'widget_bu_pages', $widget_settings );

			// Add the BU Navigation widget to the front of the posts sidebar,
			// since the theme only displays the first widgets in this area.
			$sidebars['posts'] = array_merge( [ 'bu_pages-' . $instance_id ], $posts );
			wp_set_sidebars_widgets( $sidebars );
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

				<a href="<?php echo esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=install_cpt' ), 'bulb_install_cpt' ) ); ?>"
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

	// Lesson page sidebar setting and rendering.
	require_once BULB_PLUGIN_DIR_PATH . 'src/lesson-sidebar.php';
}
