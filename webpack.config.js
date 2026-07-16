const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

// Spreading the default config into more than one config shares its plugin
// instances between both compilers. A single CleanWebpackPlugin instance shared
// this way cleans after every build using the last compiler's output path, which
// deletes the other config's bundle. Each config below writes to its own
// directory, so drop the clean plugin and keep the remaining plugins.
// See https://github.com/johnagan/clean-webpack-plugin/issues/159
const plugins = defaultConfig.plugins.filter(
	( plugin ) => 'CleanWebpackPlugin' !== plugin.constructor.name
);

const frontendConfig = {
	...defaultConfig,
	plugins,
	name: 'frontend',
	entry: {
		'frontend': './src/frontend.js'
	},
	output: {
		path: path.join(__dirname, './build/frontend'),
		filename: 'frontend.build.js'
	}
};

const blocksConfig = {
	...defaultConfig,
	plugins,
	name: 'blocks',
	entry: {
		'blocks': './src/blocks.js'
	},
	output: {
		path: path.join(__dirname, './build/blocks'),
		filename: 'blocks.build.js'
	}
};

module.exports = [
	frontendConfig, blocksConfig
];
