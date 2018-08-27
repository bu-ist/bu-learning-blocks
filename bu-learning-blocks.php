<?php
/**
 * Plugin Name: BU Learning Blocks
 * Plugin URI: http://www.bu.edu
 * Description: BU Learning Blocks — is a collection of tools to enable the easy creation of academic lessons with embedded self-assessment questions.
 * Author: Danny Crews, Carlos Silva, Jonathan Williams
 * Author URI: http://www.bu.edu/
 * Text Domain: bulearningblocks
 * Domain Path: /languages
 * Version: 0.0.1
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

/**
 * Block Initializer.
 */
require_once BULB_PLUGIN_DIR_PATH . 'src/init.php';
