/**
 * Block dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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
		}
	},

	edit: props => {
		const {
			attributes: {
				id,
				type,
				youtubeID,
			},
			setAttributes,
			clientId,
		} = props;

		return (
			<div className="bulb-video">
				<div className="bulb-video-player">
					<div id="player"></div>
				</div>
			</div>
		);
	},
	save( { attributes } ) {
		const {
			youtubeID
		} = attributes;

		return (
			<div className="bulb-video">
				<div className="bulb-video-player">
					<div id="player"></div>
				</div>
			</div>
		);
	}
} );
