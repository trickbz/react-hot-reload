var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	context: path.join(__dirname, '/app'),
	entry: {
		javascript: './app.jsx',
		html: './index.html'
	},
	output: {
		filename: 'app.js',
		path: path.join(__dirname, '/dist')
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react']
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};