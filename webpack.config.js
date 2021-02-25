const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

const appConfig = { 
	...defaultConfig,
	name: 'frontend',
	entry: {
		'frontend': './src/frontend.js'
	},
	output: {
		path: path.join(__dirname, './build'),
		filename: 'frontend.build.js'
	}
};

const adminConfig = Object.assign( {}, defaultConfig, {
	name: 'blocks',
	entry: {
		'blocks': './src/blocks.js'
	},
	output: {
		path: path.join(__dirname, './build'),
		filename: 'blocks.build.js'
	}
} );

module.exports = [
	appConfig, adminConfig
];