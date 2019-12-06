<?php
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

if ( ! get_option( 'plugin_do_uninstall', false ) ) {
	exit;
}

// delete custom post type posts.
$bulb_cpt_args  = array(
	'post_type' => 'bulb-learning-module',
	'posts_per_page' => -1,
);
$bulb_cpt_posts = get_posts( $bulb_cpt_args );
foreach ( $bulb_cpt_posts as $bulb_post ) {
	wp_delete_post( $bulb_post->ID, false );
}
