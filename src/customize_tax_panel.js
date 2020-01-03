var el = wp.element.createElement;

/**
 * Customizes the label within the taxonomy editor component.
 *
 * @since 0.0.7
 *
 * @param {Component} OriginalComponent Post taxonomy editor component.
 *
 * @returns {Component} The customized editor component.
 */
function customizeLessonSelector( OriginalComponent ) {
	return function( props ) {
		if ( props.slug === 'bulb-courses' ) {
			// Customize the label for the custom taxonomy.
			props.taxonomy.labels.add_new_item = 'Include in Lesson (start typing name of Lesson)';
		}
		return el(
			OriginalComponent,
			props
		);
	};
}

wp.hooks.addFilter(
	'editor.PostTaxonomyType',
	'bu-learning-blocks',
	customizeLessonSelector
);
