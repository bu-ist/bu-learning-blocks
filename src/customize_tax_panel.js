var el = wp.element.createElement;

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
