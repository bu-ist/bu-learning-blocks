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
		$current_id = get_the_ID();

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
		endwhile; // End of the loop.

		$parent = ( '0' != $post->post_parent ? $post->post_parent : $post->ID );
		$child_args = array(
			'post_type' => 'bulb_learning_module',
			'post_parent' => $parent,
			'orderby' => 'menu_order',
			'order' => 'ASC',

		);

		$ids = array( $parent );
		$ids = array_merge( $ids, array_keys( get_children( $child_args ) ) );

		$args = array(
			'post_type' => 'bulb_learning_module',
			'post__in' => $ids,
			'posts_per_page' => 1,
			'paged' => $paged,
		);

		$range        = 2;
		$showitems = ( $range * 2 ) + 1;
		$author_posts = new WP_Query ( $args );
		$module_pages = $author_posts->max_num_pages;

		?>

		<div class="pagination">
			<h6>There are <?php echo $module_pages?> pages in this Learning Module: </h6>
		<?php
		$ids_current_index = array_search( $current_id, $ids, true );

		if ( 1 !== $module_pages ) {
			if ( $ids_current_index > 1 && $ids_current_index > $range + 1 && $showitems < $module_pages) {
				echo "<a href='" . get_permalink( $ids[0] ) . "'>&laquo; First</a>";
			}

			if ( $ids_current_index > 0 && $showitems < $module_pages ) {
				echo "<a href='" . get_permalink( $ids[ $ids_current_index - 1 ] ) . "'>&lsaquo; Previous</a>";
			}

			for ( $i = 1; $i <= $module_pages; $i++ ) {
				if ( 1 !== $module_pages && ( ! ( $i >= $ids_current_index + $range + 2 || $i <= $ids_current_index - $range ) || $module_pages <= $showitems ) ) {
					echo ( $current_id === $ids[ $i - 1 ] ) ? '<span class="current">' . $i . '</span>' : '<a href=' . get_permalink( $ids[ $i - 1 ] ) . ' class="inactive">' . $i . '</a>';
				}
			}

			if ( $ids_current_index < $module_pages - 1 && $showitems < $module_pages ) {
				echo '<a href="' . get_permalink( $ids[ $ids_current_index + 1 ] ) . '">Next &rsaquo;</a>';
			}

			if ( $ids_current_index < $module_pages - 2 && $showitems < $module_pages ) {
				echo '<a href="' . get_permalink( end( $ids ) ) . '">Last &raquo;</a>';
			}
		}
		?>
		</div><!-- .pagination -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// get_sidebar();
get_footer();
