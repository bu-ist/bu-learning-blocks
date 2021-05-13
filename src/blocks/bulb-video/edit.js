import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div>
			<TextControl
				label={ __( 'YouTube ID', 'bu-learning-blocks' ) }
				value={ attributes.youtubeID }
				onChange={ ( val ) => setAttributes( { youtubeID: val } ) }
			/>
		</div>
	);
}
