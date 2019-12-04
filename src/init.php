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

/**
 * Load the cpt install dialog if we haven't already.
 */
if ( get_option( 'bulb_cpt_install_dialog' ) ) {
	add_action( 'admin_init', 'load_cpt_install_dialog' );
}
function load_cpt_install_dialog() {
	?>
		<div id="message" class="updated notice is-dismissible">
			<p>
				<?php echo wp_kses_post( __( '<strong>Welcome to BU Learning Blocks</strong>', 'bulearningblocks' ) ); ?>
			</p>

			<p class="submit">

				<a href="<?php echo esc_url( add_query_arg( 'install_bulb_cpt', 'true' ) ); ?>"
				class="button-primary">

					<?php esc_html_e( 'Install Blocks and Pages', 'bulearningblocks' ); ?>

				</a>

				<a class="skip button" href="<?php echo esc_url( add_query_arg( 'skip_install_bulb_pages', 'true' ) ); ?>">

					<?php esc_html_e( 'Install Blocks Only', 'bulearningblocks' ); ?>

				</a>

			</p>
		</div>
	<?php

	// delete_option( 'bulb_cpt_install_dialog' );
}


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
