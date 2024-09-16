const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

const bulbConfig = {
	...defaultConfig,
	entry: {
		blocks: './src/blocks.js',
		frontend: './src/frontend.js'
	},
};

module.exports = [
	bulbConfig
];
