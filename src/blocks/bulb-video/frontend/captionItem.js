const CaptionItem = ({ caption, searchString, playerRef }) => {
	const seconds = caption.tStartMs / 1000;

	const convertMS = (milliseconds) => {
		const secs = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(secs / 60);
		const hours = Math.floor(minutes / 60);

		const counterSecs = secs % 60;
		const counterMins = minutes % 60;

		const displaySecs = counterSecs < 10 ? `0${counterSecs}` : counterSecs;
		const displayMins = counterMins < 10 ? `0${counterMins}` : counterMins;

		return `${hours}:${displayMins}:${displaySecs}`;
	};

	const handleSeek = () => {
		const internalPlayer = playerRef.current.getInternalPlayer();
		internalPlayer.seekTo(seconds, true);
	};

	const filteredText = caption.segs[0].utf8.replace(
		new RegExp(searchString, 'gi'),
		(match) =>
			`<mark style='background: #2769AA; color:white'>${match}</mark>`
	);

	return (
		<div key={caption.tStartMs} className="bulb-video-caption">
			<time
				className="bulb-video-caption-timestamp"
				dateTime={`P${seconds}S`}
				onClick={handleSeek}
			>
				{convertMS(caption.tStartMs)}
			</time>
			<p dangerouslySetInnerHTML={{ __html: filteredText }} />
		</div>
	);
};

export default CaptionItem;
