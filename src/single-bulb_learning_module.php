<?php
/**
 * Template file used to render a single post.
 *
 * @package Responsive_Framework
 */

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

		<?php edit_post_link( __( 'Edit Learning Module', 'bulearningblocks' ), '<span class="edit-link">', '</span>' ); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class( 'content-area' ); ?>>
			<header>
				<?php the_title(); ?>
			</header>

			<?php the_content(); ?>

			<?php edit_post_link( __( 'Edit Learning Module', 'bulearningblocks' ), '<span class="edit-link">', '</span>' ); ?>

		</article>

	<?php endwhile; ?>

<?php get_sidebar( 'posts' ); ?>
<?php
	get_footer();
