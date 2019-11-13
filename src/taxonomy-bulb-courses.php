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

<h1>Course Title: <?php echo single_term_title( ); ?></h1>
<?php

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();
		// echo get_the_term_list( $post->ID, 'bulb-courses', '<p><strong>Course Title: </strong>', ', ', '</p>');
		?>
		<a href="<?php the_permalink(); ?>"><?php the_title( ); ?></a>
		</br>
		<?php the_time(); ?>
		</br>
		<?php the_author(); ?>
		</br>
		</br>
		<?php
	endwhile;
endif;

get_footer();
