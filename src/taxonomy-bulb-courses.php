<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>

<h1><strong>Course Title:</strong> <?php echo single_term_title(); ?></h1>
<h3><?php single_term_title(); ?> Lessons:</h3>
<?php

$args = array(
	'paged'          => $paged,
	'orderby'        => 'menu_order',
	'order'          => 'ASC',
	'posts_per_page' => -1,
	'tax_query' => array(
		array(
			'taxonomy' => 'bulb-courses',
			'field'    => 'slug',
			'terms'    => get_queried_object(),
		),
	),
);

$bulb_query = new WP_Query( $args );

if ( $bulb_query->have_posts() ) :
	while ( $bulb_query->have_posts() ) :
		$bulb_query->the_post();
		?>
		<a href="<?php the_permalink(); ?>"><?php the_title( ); ?></a>
		</br>
		</br>
		<?php
	endwhile;
endif;

get_footer();
