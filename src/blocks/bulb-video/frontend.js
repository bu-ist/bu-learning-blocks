import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';

import Captions from './frontend/captions';

// Starter code from https://stackoverflow.com/questions/32142656/get-youtube-captions/58435817#58435817

function seekToTime( event ) {
	if ( event.target.className === 'bulb-video-caption' ) {
		const time = event.target.firstElementChild.dataset.seekTo;
		player.seekTo( time );
	}
}

const VideoWithCaptions = ( { videoID } ) => {
	return (
		<div className="bulb-video">
			<div className="bulb-video-player">
				<ReactPlayer
					url={ `https://www.youtube.com/watch?v=${ videoID }` }
				/>
			</div>
			<Captions className="bulb-video-caption" videoID={ videoID } />
		</div>
	);
};

document
	.querySelectorAll( '.bulb-video-player' )
	.forEach( ( playerContainer ) => {
		const containerVideoID =  playerContainer.getAttribute( 'data-youtubeid' );
		ReactDOM.render(
			<VideoWithCaptions
				videoID={ containerVideoID }
			/>,
			playerContainer
		);
} );
