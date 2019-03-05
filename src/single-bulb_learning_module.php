<?php
/**
 * The template for displaying learning module pages.
 *
 * @package bu-learning-blocks
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="entry-header">
						<?php
							the_title( '<h1 class="entry-title">', '</h1>' );
						?>
					</header><!-- .entry-header -->
					<div class="bulb-container bulb-container--narrow bulb-page-section">
						<?php
						$the_parent = wp_get_post_parent_id( get_the_id() );
						$test_array = get_pages(
							array(
								'child_of' => get_the_ID(),
								'post_type' => 'bulb_learning_module',
							)
						);
						if ( $the_parent || $test_array ) { ?>
						<div class="bulb-page-links">
							<h3 class="bulb-page-links__title"><a href="<?php echo get_permalink( $the_parent ); ?>"><?php echo get_the_title( $the_parent ); ?></a></h3>
							<ul class="bulb-min-list">
								<?php
								if ( $the_parent ) {
									$find_children_of = $the_parent;
								} else {
									$find_children_of = get_the_ID();
								}
								wp_list_pages(
									array(
										'title_li'    => null,
										'post_type'   => 'bulb_learning_module',
										'child_of'    => $find_children_of,
										'sort_column' => 'menu_order',
									)
								);
								?>
							</ul>
						</div>
						<?php } ?>
					</div>
					<div class="entry-content">
						<?php
						the_content(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', '_s' ),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								get_the_title()
							)
						);
						wp_link_pages(
							array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_s' ),
								'after'  => '</div>',
							)
						);
						?>
					</div><!-- .entry-content -->

					<footer class="entry-footer">
					</footer><!-- .entry-footer -->
				</article><!-- #post-<?php the_ID(); ?> -->
			<?php
			the_post_navigation();
		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
