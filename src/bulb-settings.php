<?php
/**
 * BULB Settings Page Setup
 *
 * Set the BULB plugin settigs pages.
 *
 * @since   0.0.1
 * @package BU Learning Blocks
 */

add_action( 'admin_menu', 'bulb_settings_pages' );
/**
 * Set up plugin menu pages.
 *
 * @since 0.0.1
 */
function bulb_settings_pages() {
	add_menu_page(
		__( 'BU Learning Blocks', 'bulearningblocks' ),
		__( 'BULB Settings', 'bulearningblocks' ),
		'manage_options',
		'bulb',
		'bulb_settings_page_markup',
		'dashicons-welcome-learn-more',
		100
	);
}

add_action( 'admin_init', 'bulb_settings' );
/**
 * Set up plugin settings section.
 *
 * @since 0.0.1
 */
function bulb_settings() {
	add_settings_section(
		'bulb_settings_section',
		__( 'BULB Settings Section', 'bulearningblocks' ),
		'bulb_settings_section_callback',
		'bulb'
	);
}

/**
 * Setting section secondary description.
 *
 * @since 0.0.1
 */
function bulb_settings_section_callback() {
	// echo section intro text here.
	esc_html_e( 'Plugin settings section description', 'bulearningblocks' );
}

/**
 * Markup for settings menu pages.
 *
 * @since 0.0.1
 */
function bulb_settings_page_markup() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	include BULB_PLUGIN_DIR_PATH . 'src/templates/admin/settings-page.php';
}

add_filter( 'plugin_action_links_' . BULB_PLUGIN_BASENAME, 'add_action_links' );
/**
 * Plugin menu link to settings.
 *
 * @param array[] $links Array of links to be shown on plugin page.
 *
 * @since 0.0.1
 */
function add_action_links( $links ) {
	$mylinks = array(
		'<a href="' . admin_url( 'admin.php?page=bulb' ) . '">Settings</a>',
	);
	return array_merge( $links, $mylinks );
}
