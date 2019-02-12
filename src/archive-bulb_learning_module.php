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

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
			</header><!-- .page-header -->

			<?php
			while ( have_posts() ) :
				the_post();
				?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="entry-header">
						<?php
						the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
						?>
					</header><!-- .entry-header -->

					<?php
					/**
					 * Add custom sizes attribute to responsive image functionality for thumbnails.
					 *
					 * @param array $attr  Attributes for the image markup.
					 * @return string Value for use in thumbnail 'sizes' attribute.
					 */
					function bulb_post_thumbnail_sizes_attr( $attr ) {

						if ( is_admin() ) {
							return $attr;
						}

						if ( ! is_singular() ) {
							$attr['sizes'] = '(max-width: 34.9rem) calc(100vw - 2rem), (max-width: 53rem) calc(8 * (100vw / 12)), (min-width: 53rem) calc(6 * (100vw / 12)), 100vw';
						}

						return $attr;
					}
					add_filter( 'wp_get_attachment_image_attributes', 'bulb_post_thumbnail_sizes_attr', 10, 1 );
					?>

					<div class="entry-content">
						<?php the_excerpt(); ?>
					</div><!-- .entry-content -->
				</article><!-- #post-${ID} -->

				<?php
				// End the loop.
			endwhile;
			?>

			<?php
			// Previous/next page navigation.
			the_posts_pagination(
				array(
					'mid_size'  => 2,
					'prev_text' => sprintf(
						'%s <span class="nav-prev-text">%s</span>',
						twentynineteen_get_icon_svg( 'chevron_left', 22 ),
						__( 'Newer posts', 'bulearningblocks' )
					),
					'next_text' => sprintf(
						'<span class="nav-next-text">%s</span> %s',
						__( 'Older posts', 'bulearningblocks' ),
						twentynineteen_get_icon_svg( 'chevron_right', 22 )
					),
				)
			);
			else :
				?>
			<section class="no-results not-found">
				<header class="page-header">
					<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'bulearningblocks' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
				<?php
				if ( is_home() && current_user_can( 'publish_posts' ) ) :
					printf(
						'<p>' . wp_kses(
							/* translators: 1: link to WP admin new post page. */
							__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'bulearningblocks' ),
							array(
								'a' => array(
									'href' => array(),
								),
							)
						) . '</p>',
						esc_url( admin_url( 'post-new.php' ) )
					);

				elseif ( is_search() ) :
					?>

				<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'bulearningblocks' ); ?></p>
					<?php
					get_search_form();
				else :
					?>

				<p><?php _esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'bulearningblocks' ); ?></p>
					<?php
					get_search_form();

				endif;
				?>
				</div><!-- .page-content -->
			</section><!-- .no-results -->

				<?php
		endif;
			?>
		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
