// Setup your quiz text and questions here
let questionId = document.querySelector( '.bulb-question' ).id;
let question = window[questionId];
console.log(JSON.stringify(question, null, 4));

// NOTE: pay attention to commas, IE struggles with those bad boys

const quizJSON = {
	info: {
        // name: question.header[0],
		main: '<p>' + question.header[0] + '</p>',
		// results:
		// 	'<h5>Learn More</h5><p><a href="https://en.wikipedia.org/wiki/Jerry_Garcia">About Jerry</a></p>',
		// level1: 'Jeopardy Ready',
		// level2: 'Jeopardy Contender',
		// level3: 'Jeopardy Amateur',
		// level4: 'Jeopardy Newb',
		// level5: 'Stay in school, kid...', // no comma here
	},
	questions: [
		{
			// Question 1 - Multiple Choice, Single True Answer
		// 	q: question.body[0],
		// 	a: [
		// 		{ option: '8', correct: false },
		// 		{ option: '14', correct: false },
		// 		{ option: '1', correct: true },
		// 		{ option: '23', correct: false }, // no comma here
		// 	],
		// 	correct:
		// 		'<p><span>That\'s right!</span> The letter A is the first letter in the alphabet!</p>',
		// 	incorrect:
		// 		'<p><span>Uhh no.</span> It\'s the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>', // no comma here
		// },
		// {
		// 	// Question 2 - Multiple Choice, Multiple True Answers, Select Any
		// 	q:
		// 		'Which of the following best represents your preferred breakfast?',
		// 	a: [
		// 		{ option: 'Bacon and eggs', correct: false },
		// 		{ option: 'Fruit, oatmeal, and yogurt', correct: true },
		// 		{ option: 'Leftover pizza', correct: false },
		// 		{ option: 'Eggs, fruit, toast, and milk', correct: true }, // no comma here
		// 	],
		// 	select_any: true,
		// 	correct:
		// 		'<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>',
		// 	incorrect:
		// 		'<p><span>Hmmm.</span> You might want to reconsider your options.</p>', // no comma here
		// },
		// {
		// 	// Question 3 - Multiple Choice, Multiple True Answers, Select All
		// 	q: 'Where are you right now? Select ALL that apply.',
		// 	a: [
		// 		{ option: 'Planet Earth', correct: true },
		// 		{ option: 'Pluto', correct: false },
		// 		{ option: 'At a computing device', correct: true },
		// 		{ option: 'The Milky Way', correct: true }, // no comma here
		// 	],
		// 	correct:
		// 		'<p><span>Brilliant!</span> You\'re seriously a genius, (wo)man.</p>',
		// 	incorrect:
		// 		'<p><span>Not Quite.</span> You\'re actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>', // no comma here
		// },
		// {
		// 	// Question 4
		// 	q: 'How many inches of rain does Michigan get on average per year?',
		// 	a: [
		// 		{ option: '149', correct: false },
		// 		{ option: '32', correct: true },
		// 		{ option: '3', correct: false },
		// 		{ option: '1291', correct: false }, // no comma here
		// 	],
		// 	correct:
		// 		'<p><span>Holy bananas!</span> I didn\'t actually expect you to know that! Correct!</p>',
		// 	incorrect:
		// 		'<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>', // no comma here
		// },
		// {
		// 	// Question 5
			q: question.body[0],
			a: [
				{ option: 'True', correct: true },
				{ option: 'False', correct: false }, // no comma here
			],
			correct:
				'<p><span>Good Job!</span> You have a good memory!</p>',
			incorrect:
                '<p>Nope. He died in 1995</p>', // no comma here
		}, // no comma here
	],
};
