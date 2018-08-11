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
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'add_action_links' );
function add_action_links ( $links ) {
	$mylinks = array(
	'<a href="' . admin_url( 'options-general.php?page=bulb' ) . '">Settings</a>',
	);
	return array_merge( $links, $mylinks );
}


/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
