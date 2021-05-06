import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';
import { useRef } from "@wordpress/element";

import Captions from './frontend/captions';

const VideoWithCaptions = ( { videoID } ) => {
	const playerRef = useRef( {} );

	return (
		<div className="bulb-video">
			<div className="bulb-video-player">
				<ReactPlayer
					url={ `https://www.youtube.com/watch?v=${ videoID }` }
					ref={ playerRef }
					config={ { youtube: { playerVars: { controls: 1 } } } }
				/>
			</div>
			<Captions
				className="bulb-video-caption"
				playerRef={ playerRef }
				videoID={ videoID }
			/>
		</div>
	);
};

document
	.querySelectorAll( '.bulb-video-container' )
	.forEach( ( playerContainer ) => {
		const containerVideoID = playerContainer.getAttribute( 'data-youtubeid' );
		ReactDOM.render(
			<VideoWithCaptions videoID={ containerVideoID } />,
			playerContainer
		);
} );
