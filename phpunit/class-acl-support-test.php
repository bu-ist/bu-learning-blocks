<?php
/**
 * Class AclSupportTest
 *
 * Covers the 'bu_acl_supported_post_types' filter callback that declares the
 * lesson post type to BU Access Control.
 *
 * @package BULB
 */

/**
 * Tests for BU\Plugins\LearningBlocks\add_acl_support().
 */
class AclSupportTest extends WP_UnitTestCase {

	/**
	 * Load the post type file so the callback and its filter registration run.
	 */
	public function set_up() {
		parent::set_up();
		require_once dirname( __DIR__ ) . '/src/learning-module-cpt.php';
	}

	/**
	 * The callback appends the lesson slug to Access Control's default list.
	 */
	public function test_adds_lesson_slug_to_default_list() {
		$result = \BU\Plugins\LearningBlocks\add_acl_support( array( 'page', 'attachment' ) );
		$this->assertContains( 'bulb-learning-module', $result );
		$this->assertContains( 'page', $result );
		$this->assertContains( 'attachment', $result );
	}

	/**
	 * The callback does not add a duplicate when the slug is already present.
	 */
	public function test_is_idempotent() {
		$input  = array( 'page', 'attachment', 'bulb-learning-module' );
		$result = \BU\Plugins\LearningBlocks\add_acl_support( $input );
		$this->assertSame( $input, $result );
		$this->assertSame( 1, count( array_keys( $result, 'bulb-learning-module', true ) ) );
	}

	/**
	 * The callback preserves other custom post types in the list.
	 */
	public function test_preserves_existing_entries() {
		$result = \BU\Plugins\LearningBlocks\add_acl_support( array( 'some-other-cpt' ) );
		$this->assertContains( 'some-other-cpt', $result );
		$this->assertContains( 'bulb-learning-module', $result );
	}

	/**
	 * The callback is actually hooked to the Access Control filter.
	 */
	public function test_callback_is_hooked() {
		$this->assertSame(
			10,
			has_filter( 'bu_acl_supported_post_types', 'BU\Plugins\LearningBlocks\add_acl_support' )
		);
	}
}
