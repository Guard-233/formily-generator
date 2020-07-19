/**
 * /* config-overrides.js
 *
 * @format
 */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	console.log(config)

	const { plugins } = config

	return {
		...config,
		plugins: [
			...plugins,
			new MonacoWebpackPlugin({
				languages: ['json', 'javascript']
			})
		]
	}
}
