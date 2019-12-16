<?php // exit if uninstall constant is not defined
if (!defined('WP_UNINSTALL_PLUGIN')) exit;

delete_option( 'bulb_active' );
delete_option( 'bulb_cpt_install' );

if (!get_option('plugin_do_uninstall', false)) exit;
