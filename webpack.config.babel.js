import webpack from 'webpack'
import path from 'path'

module.exports = {
	entry: './src/demo.js',
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
		filename: '[name].js',
		path: path.resolve(__dirname, 'demo'),
		publicPath: '/'
	}
}
