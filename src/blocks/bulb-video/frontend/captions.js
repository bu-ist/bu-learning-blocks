import axios from 'axios';
import { useState, useEffect } from '@wordpress/element';

export default function Captions( { videoID, playerRef } ) {
	const [ captions, setCaptions ] = useState( [] );

	useEffect( () => {
		initData();
	}, [] );

	const initData = async () => {
		const {
			data: { events: captions },
		} = await axios.get(
			`https://www.youtube.com/api/timedtext?v=${ videoID }&lang=en-US&fmt=json3`
		);
		setCaptions( captions );
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
					const seconds = Math.floor( caption.tStartMs );

					return (
						<div
							key={ caption.tStartMs }
							className="bulb-video-caption"
						>
							<time
								className="bulb-video-caption-timestamp"
								dateTime={ `P${ seconds }S` }
								onClick={ () =>
									playerRef.current.seekTo(
										seconds,
										'seconds'
									)
								}
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
