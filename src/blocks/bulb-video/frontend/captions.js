import axios from 'axios';
import { useState, useEffect } from '@wordpress/element';

import CaptionItem from "./captionItem";

export default function Captions( { videoID, playerRef } ) {
	const [ captions, setCaptions ] = useState( [] );

	const [ searchString, setSearchString ] = useState( '' );

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

	const filteredCaptions = captions.filter( ({ segs }) => (
		segs[0].utf8.toLowerCase().indexOf( searchString.toLowerCase() ) !== -1
	) );

	return (
		<div className="bulb-video-captions-container">
			<input
				type="text"
				onChange={ ({ target: { value } }) => setSearchString(value) }
				value={searchString}
			/>
			{ captions &&
				filteredCaptions.map((caption) => <CaptionItem caption={caption} searchString={searchString} playerRef={playerRef} /> ) }
		</div>
	);
}
