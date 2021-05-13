/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from './edit';

import './styles/frontend.scss';

// Register the block.
export default registerBlockType( 'bulb/video', {
	title: __( 'BULB - Video', 'bu-learning-blocks' ),
	description: __( 'Add a video with transcript.' ),
	icon: 'welcome-learn-more',
	category: 'bu-learning-blocks',
	keywords: [
		__( 'bu-learning-block', 'bu-learning-blocks' ),
		__( 'BULB', 'bu-learning-blocks' ),
		__( 'Video', 'bu-learning-blocks' ),
	],
	supports: {
		align: [ 'full', 'wide', 'center' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'center',
		},
		youtubeID: {
			type: 'string',
			default: 'gWCFyaUBkCs',
		},
	},

	edit: Edit,
	save( { attributes } ) {
		return (
			<div
				data-youtubeID={ attributes.youtubeID }
				className="bulb-video-container"
			/>
		);
	},
} );
