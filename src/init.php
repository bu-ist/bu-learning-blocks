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
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-fitb/index.php';
require_once BULB_PLUGIN_DIR_PATH . 'src/blocks/bulb-mat/index.php';



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

add_action( 'admin_post_install_cpt', 'bulb_admin_install_cpt' );
/**
 * Update option to load custom post types.
 *
 * @since 0.0.6
 */
function bulb_admin_install_cpt() {
	update_option( 'bulb_cpt_install', 1 );
	wp_safe_redirect( 'plugins.php' );
	exit;
}

/**
 * Load the cpt install dialog if we haven't already.
 */
if ( get_option( 'bulb_cpt_install_dialog' ) ) {
	add_action( 'admin_init', 'load_cpt_install_dialog' );
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
				<?php echo wp_kses_post( __( '<strong>Welcome to BU Learning Blocks</strong>', 'bulearningblocks' ) ); ?>
			</p>

			<p class="submit">

				<a href="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>?action=install_cpt"
				class="button-primary">

					<?php esc_html_e( 'Install Blocks and Pages', 'bulearningblocks' ); ?>

				</a>

				<a class="skip button" href="">

					<?php esc_html_e( 'Install Blocks Only', 'bulearningblocks' ); ?>

				</a>

			</p>
		</div>
	<?php

	delete_option( 'bulb_cpt_install_dialog' );
}

if ( get_option( 'bulb_cpt_install' ) ) {
	// Register a learning-module custom post type.
	require_once BULB_PLUGIN_DIR_PATH . 'src/learning-module-cpt.php';

	/**
	 * Register a dynamic sidebar
	 *
	 * @return void
	 */
	function bulb_widgets_init() {
		register_sidebar(
			array(
				'name'          => __( 'BULB Module Sidebar' ),
				'id'            => 'bulb-module-sidebar',
				'description'   => __( 'Add widgets here to appear on your BULB module pages.' ),
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
	}
	add_action( 'widgets_init', 'bulb_widgets_init' );
}
