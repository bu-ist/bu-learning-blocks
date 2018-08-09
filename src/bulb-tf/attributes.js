const slickQuizDefault = {
	info: {
		name: 'True False question',
		main: '',
		results:
			'<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>',
	},
	questions: [
		{
			q: 'Is Earth bigger than a basketball?',
			a: [ { option: 'Yes', correct: true }, { option: 'No', correct: false } ],
			correct: '<p><span>Good Job!</span> You must be very observant!</p>',
			incorrect:
				'<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>',
		},
	],
};
const slickQuizBase64Default = window.btoa( JSON.stringify( slickQuizDefault ) );

const attributes = {
	blockId: {
		source: 'attribute',
		selector: '.bulb-question-tf',
		attribute: 'id',
		type: 'string',
		default: `bulb-question-${ Math.floor( Math.random() * Math.floor( 10000 ) ) }`,
	},
	slickQuizBase64: {
		source: 'attribute',
		selector: '.bulb-question-tf',
		attribute: 'data-question',
		type: 'string',
		default: slickQuizBase64Default,
	},
};

export default attributes;
