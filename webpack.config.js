const path = require('path');

const DEFAULT_CONFIG_PATH = require.resolve( '@wordpress/scripts/config/webpack.config' );

/**
 * Returns a fresh copy of the @wordpress/scripts default config.
 *
 * The default config is a plain object, so requiring it more than once returns
 * the same plugin instances. Spreading it into both configs below would hand a
 * single set of instances to two compilers. A shared CleanWebpackPlugin cleans
 * after every build using the last compiler's output path, which deletes the
 * other config's bundle, so `npm run build` only emitted one of the two.
 * See https://github.com/johnagan/clean-webpack-plugin/issues/159
 *
 * Re-requiring the module gives each compiler its own plugin instances, each
 * bound to its own output directory.
 *
 * @return {Object} A new default config object.
 */
function freshDefaultConfig() {
	delete require.cache[ DEFAULT_CONFIG_PATH ];
	return require( DEFAULT_CONFIG_PATH );
}

const frontendConfig = {
	...freshDefaultConfig(),
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
	...freshDefaultConfig(),
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
