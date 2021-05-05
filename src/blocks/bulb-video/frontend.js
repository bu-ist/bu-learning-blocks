import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';

import Captions from './frontend/captions';

// Starter code from https://stackoverflow.com/questions/32142656/get-youtube-captions/58435817#58435817

function convertMS( milliseconds ) {
	var day, hour, minute, seconds;
	seconds = Math.floor(milliseconds / 1000);
	minute = Math.floor(seconds / 60);
	seconds = seconds % 60;
	hour = Math.floor(minute / 60);
	minute = minute % 60;
	day = Math.floor(hour / 24);
	hour = hour % 24;

	// Add leading zeroes
	hour = ( hour < 10 ) ? "0" + hour : hour;
	minute = ( minute < 10 ) ? "0" + minute : minute;
	seconds = ( seconds < 10 ) ? "0" + seconds : seconds;

	return `${hour}:${minute}:${seconds}`;
}

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
