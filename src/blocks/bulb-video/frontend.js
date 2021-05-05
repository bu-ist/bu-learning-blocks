import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';

import Captions from './frontend/captions';

// Starter code from https://stackoverflow.com/questions/32142656/get-youtube-captions/58435817#58435817

const youtubeID = 'bNTSO3D5bc8';
let player;

const captionsContainer = document.createElement( 'div' );
const videoBlock = document.querySelector( '.bulb-video' );

captionsContainer.classList.add( 'bulb-video-captions-container' );

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

// Get the transcript. Requires a named transcript.
// This should probably be switched to
// https://developers.google.com/youtube/v3/docs/captions/download
// but that involves an API key, and I'm also not sure how to deal
// with some of the web formats it returns.
//
// That would be nice to figure out though, because one thing I can't
// get to from here is chapters.
//
// Chapters are added in brackets to the video description,
// and you get to them using the API here:
// https://developers.google.com/youtube/v3/docs/videos/list
//
// A really nice enhancement would be to collapse the transcript by chapter, if it's available.
fetch('https://www.youtube.com/api/timedtext?v=' + youtubeID +'&lang=en-US&fmt=json3')
	.then(response => response.json())
	.then(data => {
			// Get the captions
			const captions = data.events;
			captionsContainer.addEventListener('click', seekToTime, true);

			// For each caption, create a caption div and timestamp
			for ( const caption of captions ) {
				const timestamp = caption[ 'tStartMs' ];
				const timeInSeconds = Math.floor( timestamp / 1000 );
				const captionText = caption[ 'segs' ][ 0 ].utf8;

				// The pointer events settings below ensure the click event always
				// uses the bulb-video-caption as the target.
				captionsContainer.insertAdjacentHTML( 'beforeend',
					`<div class="bulb-video-caption">
						<time class="bulb-video-caption-timestamp" datetime="P${timeInSeconds}S" data-seek-to="${timeInSeconds}" style="pointer-events: none;">${convertMS(timestamp)}</time>
						<p style="pointer-events: none;">${captionText}</p>
					</div>`
				);
			}
});


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
