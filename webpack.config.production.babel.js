import webpack from 'webpack'
import path from 'path'

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, "src")
			]
		}]
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'lib'),
		publicPath: '/'
	}
}
