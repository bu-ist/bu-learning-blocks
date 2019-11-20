<?php
/**
 * The template for displaying learning module archives
 *
 * @package BU Learning Blocks
 *
 * @since 0.0.2
 */

get_header();

$terms = get_terms(
	'bulb-courses',
	array(
		'orderby'    => 'name',
		'order'      => 'ASC',
		'hide_empty' => 1,
	)
); ?>
<h1 class="bulb-page-title">Course Index:</h1>

<section class="bulb-archive-container" >

<?php

foreach( $terms as $term ) {
	// Define the query
	$args = array(
		'paged'          => $paged,
		'posts_per_page' => -1,
		'post_type' => 'bulb-learning-module',
		'orderby'        => 'title',
		'order'          => 'ASC',
		'bulb-courses' => $term->slug
	);
	$query = new WP_Query( $args );

	echo'<h2 class="bulb-term-heading">' . $term->name . '</h2>';

	echo '<ul class="bulb-list">';
	while ( $query->have_posts() ) : $query->the_post(); ?>
	<li class="bulb-list-item" id="post-<?php the_ID(); ?>">
		<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	</li>
		<?php
	endwhile;

	echo '</ul>';
	echo '<hr>';
	wp_reset_postdata();
}
?>
</section>
<?php
get_footer();
