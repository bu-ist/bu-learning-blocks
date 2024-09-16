import axios from 'axios';
import { useState, useEffect } from '@wordpress/element';

export default function Captions( { videoID, playerRef } ) {
	const [ captions, setCaptions ] = useState( [] );

	useEffect( () => {
		initData();
	}, [] );

	const initData = async () => {
		// Fetch caption track listing first.
		const { data } = await axios.get(
			`https://www.youtube.com/api/timedtext?v=${ videoID }&type=list`
		);

		// The track listing response is XML, so parse it as a DOM Document.
		const captionsList = new DOMParser().parseFromString(
			data,
			'application/xml'
		);

		// We're just fetching the first track, assuming there aren't multiple languages.
		// Ultimately, there should be a UI to switch between any available caption tracks.
		const firstTrackLangCode = captionsList
			.getElementsByTagName( 'track' )[ 0 ]
			.getAttribute( 'lang_code' );

		// Fetch the actual captions.
		const {
			data: { events },
		} = await axios.get(
			`https://www.youtube.com/api/timedtext?v=${ videoID }&lang=${ firstTrackLangCode }&fmt=json3`
		);
		setCaptions( events );
	};

	const convertMS = ( milliseconds ) => {
		const seconds = Math.floor( milliseconds / 1000 );
		const minutes = Math.floor( seconds / 60 );
		const hours = Math.floor( minutes / 60 );

		const counterSecs = seconds % 60;
		const counterMins = minutes % 60;

		const displaySecs =
			counterSecs < 10 ? `0${ counterSecs }` : counterSecs;
		const displayMins =
			counterMins < 10 ? `0${ counterMins }` : counterMins;

		return `${ hours }:${ displayMins }:${ displaySecs }`;
	};

	return (
		<div className="bulb-video-captions-container">
			{ captions &&
				captions.map( ( caption ) => {
					const seconds = caption.tStartMs / 1000;

					const handleSeek = () => {
						const internalPlayer = playerRef.current.getInternalPlayer();
						internalPlayer.seekTo( seconds, true );
					};

					return (
						<div
							key={ caption.tStartMs }
							className="bulb-video-caption"
						>
							<time
								className="bulb-video-caption-timestamp"
								dateTime={ `P${ seconds }S` }
								onClick={ handleSeek }
							>
								{ convertMS( caption.tStartMs ) }
							</time>
							<p>{ caption.segs[ 0 ].utf8 }</p>
						</div>
					);
				} ) }
		</div>
	);
}
