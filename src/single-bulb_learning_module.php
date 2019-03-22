<?php
/**
 * Template file used to render a single learning module.
 *
 * @package bu-learning-blocks
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		$current_post_id = get_the_ID();

		while ( have_posts() ) :
			the_post();
			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'content_area' ); ?>>
					<header class="entry-header">
						<?php
							the_title( '<h1 class="entry-title">', '</h1>' );
						?>
					</header><!-- .entry-header -->

					<div class="bulb-container bulb-container--narrow bulb-page-section">
						<?php
						$the_parent_id = wp_get_post_parent_id( get_the_id() );
						$test_children = get_pages(
							array(
								'child_of'  => get_the_ID(),
								'post_type' => 'bulb_learning_module',
							)
						);

						if ( $the_parent_id || $test_children ) {
							?>
							<div class="bulb-page-links">
								<h3 class="bulb-page-links__title"><a href="<?php echo esc_url( get_permalink( $the_parent_id ) ); ?>"><?php echo esc_html( get_the_title( $the_parent_id ) ); ?></a></h3>
								<ul class="bulb-min-list">
									<?php
									if ( $the_parent_id ) {
										$find_children_of = $the_parent_id;
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
		endwhile; // End of the loop.

		// Navigate the hierarchical custom post type.
		$module_parent        = ( 0 === $post->post_parent ? $post->ID : $post->post_parent );
		$child_args           = array(
			'post_type'   => 'bulb_learning_module',
			'post_parent' => $module_parent,
			'orderby'     => 'menu_order',
			'order'       => 'ASC',
		);
		$module_ids           = array( $module_parent );
		$module_ids           = array_merge( $module_ids, array_keys( get_children( $child_args ) ) );
		$current_module_index = array_search( $current_post_id, $module_ids, true );
		$total_pages          = count( $module_ids );
		$range                = 2; // Adjust this value to set the number of pages that appear in the nav.
		$showitems            = ( $range * 2 ) + 1;
		?>

			<div class="pagination">
				<h6>Page <?php echo esc_html( $current_module_index + 1 ); ?> of <?php echo esc_html( $total_pages ); ?></h6>

			<?php
			if ( 1 !== $total_pages ) {
				if ( $current_module_index > 1 && $current_module_index > $range - 1 && $showitems < $total_pages ) {
					echo "<a href='" . esc_url( get_permalink( $module_ids[0] ) ) . "'>&laquo; First Page</a>";
				}

				if ( $current_module_index > 0 && $showitems < $total_pages ) {
					echo "<a href='" . esc_url( get_permalink( $module_ids[ $current_module_index - 1 ] ) ) . "'>&lsaquo; Previous Page</a>";
				}

				foreach ( $module_ids as $position => $page_id ) {
					if ( 1 !== $total_pages && ( ! ( $position >= $current_module_index + $range + 2 || $position <= $current_module_index - $range ) || $total_pages <= $showitems ) ) {
						echo $current_post_id === $module_ids[ $position ] ? '<span class="current">' . esc_html( $position + 1 ) . '</span>' : '<a href=' . esc_url( get_permalink( $module_ids[ $position ] ) ) . ' class="inactive">' . esc_html( $position + 1 ) . '</a>';
					}
				}

				if ( $current_module_index < $total_pages - 1 && $showitems < $total_pages ) {
					echo '<a href="' . esc_url( get_permalink( $module_ids[ $current_module_index + 1 ] ) ) . '">Next Page &rsaquo;</a>';
				}

				if ( $current_module_index < $total_pages - 2 && $showitems < $total_pages ) {
					echo '<a href="' . esc_url( get_permalink( end( $module_ids ) ) ) . '">Last Page &raquo;</a>';
				}
			}
			?>
			</div><!-- .pagination -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
