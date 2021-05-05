/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import Edit from "./edit";

import './styles/_frontend.scss';

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
		align: [ 'full' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		youtubeID: {
			type: 'string',
			default: 'bNTSO3D5bc8',
		},
	},

	edit: Edit,
	save( { attributes } ) {
		return (
			<div className="bulb-video">
				<div
					data-youtubeID={ attributes.youtubeID }
					className="bulb-video-player"
				>
				</div>
			</div>
		);
	}
} );
