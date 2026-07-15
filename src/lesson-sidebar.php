<?php
/**
 * Lesson page sidebar settings and rendering.
 *
 * Provides a setting to choose whether the sidebar on a single Lesson Page
 * displays only the navigation widget, or all of the widgets in the posts
 * sidebar.
 *
 * @since   1.2.0
 * @package BU Learning Blocks
 */

namespace BU\Plugins\LearningBlocks;

/**
 * Registers the lesson sidebar setting.
 *
 * @since 1.2.0
 */
function bulb_register_lesson_sidebar_setting() {
	register_setting(
		'bulb_settings',
		'bulb_lesson_sidebar_nav_only',
		array(
			'type'              => 'boolean',
			'sanitize_callback' => 'absint',
			'default'           => 0,
		)
	);

	add_settings_section(
		'bulb_lesson_sidebar',
		__( 'Lesson Page Sidebar', 'bu-learning-blocks' ),
		'__return_false',
		'bulb-settings'
	);

	add_settings_field(
		'bulb_lesson_sidebar_nav_only',
		__( 'Sidebar widgets', 'bu-learning-blocks' ),
		__NAMESPACE__ . '\bulb_render_lesson_sidebar_field',
		'bulb-settings',
		'bulb_lesson_sidebar'
	);
}
add_action( 'admin_init', __NAMESPACE__ . '\bulb_register_lesson_sidebar_setting' );

/**
 * Renders the lesson sidebar setting field.
 *
 * @since 1.2.0
 */
function bulb_render_lesson_sidebar_field() {
	?>
	<label for="bulb_lesson_sidebar_nav_only">
		<input type="checkbox" id="bulb_lesson_sidebar_nav_only" name="bulb_lesson_sidebar_nav_only" value="1" <?php checked( get_option( 'bulb_lesson_sidebar_nav_only' ) ); ?> />
		<?php esc_html_e( 'Show only the navigation widget in the sidebar on Lesson Pages', 'bu-learning-blocks' ); ?>
	</label>
	<p class="description">
		<?php esc_html_e( 'When unchecked, Lesson Pages display every widget in the posts sidebar, which is shared with posts and archives.', 'bu-learning-blocks' ); ?>
	</p>
	<?php
}

/**
 * Adds a Settings page under the BULB Lessons menu.
 *
 * @since 1.2.0
 */
function bulb_add_settings_page() {
	add_submenu_page(
		'edit.php?post_type=bulb-learning-module',
		__( 'BULB Settings', 'bu-learning-blocks' ),
		__( 'Settings', 'bu-learning-blocks' ),
		'manage_options',
		'bulb-settings',
		__NAMESPACE__ . '\bulb_render_settings_page'
	);
}
add_action( 'admin_menu', __NAMESPACE__ . '\bulb_add_settings_page' );

/**
 * Renders the BULB Settings page.
 *
 * @since 1.2.0
 */
function bulb_render_settings_page() {
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'BULB Settings', 'bu-learning-blocks' ); ?></h1>
		<form method="post" action="options.php">
			<?php
			settings_fields( 'bulb_settings' );
			do_settings_sections( 'bulb-settings' );
			submit_button();
			?>
		</form>
	</div>
	<?php
}

/**
 * Limits the posts sidebar to the navigation widget on single Lesson Pages.
 *
 * Only applies when the 'bulb_lesson_sidebar_nav_only' option is enabled.
 * The posts sidebar is shared with posts and archives, which are unaffected.
 *
 * @since 1.2.0
 *
 * @param array $sidebars_widgets An associative array of sidebars and their widgets.
 * @return array Filtered list of sidebars with widgets.
 */
function bulb_filter_lesson_sidebar_widgets( $sidebars_widgets ) {
	if ( is_admin() || ! is_singular( 'bulb-learning-module' ) || empty( $sidebars_widgets['posts'] ) ) {
		return $sidebars_widgets;
	}

	if ( ! get_option( 'bulb_lesson_sidebar_nav_only' ) ) {
		return $sidebars_widgets;
	}

	$sidebars_widgets['posts'] = array_values( preg_grep( '/^bu_pages-\d+$/', (array) $sidebars_widgets['posts'] ) );

	return $sidebars_widgets;
}
add_filter( 'sidebars_widgets', __NAMESPACE__ . '\bulb_filter_lesson_sidebar_widgets' );
