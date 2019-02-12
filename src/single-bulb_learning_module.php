<?php
/**
 * Template file used to render a single learning module.
 *
 * @package BU Learning Blocks
 * @since 0.0.2
 */

get_header();
?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
				?>

					<article id="post-<?php the_ID(); ?>" <?php post_class( 'content-area' ); ?>>
						<header class="entry-header">
							<?php
							the_title( '<h1 class="entry-title">', '</h1>' );
							?>
								<div class="entry-meta">
								<?php
								// Edit post link.
									edit_post_link(
										sprintf(
											wp_kses(
												/* translators: %s: Name of current post. Only visible to screen readers. */
												__( 'Edit <span class="screen-reader-text">%s</span>', 'bulearningblocks' ),
												array(
													'span' => array(
														'class' => array(),
													),
												)
											),
											get_the_title()
										),
										'<span class="dashicons dashicons-edit"></span>'
									);
								?>
							</div><!-- .meta-info -->
						</header>

						<div class="entry-content">
							<?php
							the_content(
								sprintf(
									wp_kses(
										/* translators: %s: Name of current post. Only visible to screen readers */
										__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'bulearningblocks' ),
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
									'before' => sprintf( '<div class="page-link">%s', esc_html__( 'Module Pages:', 'bulearningblocks' ) ),
									'after'  => '</div>',
								)
							);
							?>
						</div><!-- .entry-content -->

						<footer class="entry-footer">
							<?php
							// Edit post link.
							edit_post_link(
								sprintf(
									wp_kses(
										/* translators: %s: Name of current post. Only visible to screen readers. */
										__( 'Edit <span class="screen-reader-text">%s</span>', 'bulearningblocks' ),
										array(
											'span' => array(
												'class' => array(),
											),
										)
									),
									get_the_title()
								),
								'<span class="dashicons dashicons-edit"></span>'
							);
							?>
						</footer><!-- .entry-footer -->
					</article><!-- #post-${ID} -->

					<?php
					the_post_navigation(
						array(
							'next_text' =>
							'<span class="meta-nav" aria-hidden="true">' . __( 'Next Post', 'bulearningblocks' ) . '</span> ' . '<span class="screen-reader-text">' . __( 'Next post:', 'bulearningblocks' ) . '</span> <br/>' . '<span class="post-title">%title</span>',

							'prev_text' =>
							'<span class="meta-nav" aria-hidden="true">' . __( 'Previous Post', 'bulearningblocks' ) . '</span> ' . '<span class="screen-reader-text">' . __( 'Previous post:', 'bulearningblocks' ) . '</span> <br/>' . '<span class="post-title">%title</span>',
						)
					);

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_sidebar( 'posts' );
get_footer();
