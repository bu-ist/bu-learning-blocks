<?php
/**
 * Plugin Name: BU Learning Blocks
 * Plugin URI: https://github.com/bu-ist/bu-learning-blocks
 * Description: BU Learning Blocks — is a collection of tools to enable the easy creation of academic lessons with embedded self-assessment questions.
 * Author: Boston University: Web Applications
 * Author URI: http://www.bu.edu/
 * Text Domain: bulearningblocks
 * Domain Path: /languages
 * Version: 0.0.4
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package BU Learning Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
define( 'BULB_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
define( 'BULB_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'BULB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'BULB_PLUGIN_FILE_PATH', __FILE__ );

/**
 * Displays admin notice and prevents activation.
 *
 * Deactivates plugin if the function to register blocks does not exist
 * (meaning this is not a WP 5.0.0 install, or the site does not have the
 * Gutenberg plugin activated.
 *
 * @since    0.0.2
 */
function gutenberg_notice() {
	?>
		<div class="notice notice-error is-dismissible">
			<p>
				<?php esc_html_e( 'BULB Error: BU Learning Blocks requires either WordPress 5.0.0, or the Gutenberg plugin to be installed and activated on any version previous to 5.0.0.', 'bulearningblocks' ); ?>
			</p>
			<p>
				<?php esc_html_e( 'Please install and activate the Gutenberg plugin to use BU Learning Blocks.', 'bulearningblocks' ); ?>
			</p>
		</div>
	<?php
	deactivate_plugins( BULB_PLUGIN_BASENAME );
}

/**
 * Initializes plugin on plugins_loaded.
 *
 * Waits for plugins_loaded hook to properly call function_exists.
 *
 * @since    0.0.2
 */
function init_plugin() {
	// Only targets WordPress versions before 5.0, that don't have gutenberg activated.
	if ( ! function_exists( 'register_block_type' ) ) {
		add_action( 'admin_notices', 'gutenberg_notice' );
		return;
	}

	/**
	 * Block Initializer.
	 */
	require_once BULB_PLUGIN_DIR_PATH . 'src/init.php';
}
add_action( 'plugins_loaded', 'init_plugin' );
