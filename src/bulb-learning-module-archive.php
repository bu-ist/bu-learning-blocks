<?php
/**
 * The template for displaying learning module archives
 *
 * @package BU Learning Blocks
 *
 * @since 0.0.2
 */

get_header();
?>

<?php
$args = array(
	'paged'          => $paged,
	'post_parent'    => 0,
	'post_type'      => 'bulb-learning-module',
	'orderby'        => 'title',
	'order'          => 'ASC',
	'posts_per_page' => -1,
);

$bulb_query = new WP_Query( $args );

/**
 * Enqueue the custom post type's single- template.
 *
 * @param string $bulb_query query to be filtered.
 *
 * @return string $bulb_query Filtered query.
 *
 * @since 0.0.2
 */
function get_bulb_parents( $bulb_query ) {
	if ( is_archive() && false === $bulb_query->query_vars['post_parent'] && 'bulb-learning-module' === $bulb_query->query_vars['post_type'] ) {
		$bulb_query->set( 'post_parent', 0 );
	}
	return $bulb_query;
}
add_filter( 'pre_get_posts', 'get_bulb_parents' );
?>

<div class="bulb-container bulb-container--narrow bulb-page-section">
<?php
while ( $bulb_query->have_posts() ) {
	$bulb_query->the_post();
	?>
<div class="post-item">
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	<?php
}
?>

</div>

<?php get_footer(); ?>
