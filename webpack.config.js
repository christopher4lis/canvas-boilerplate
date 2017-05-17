const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/canvas.js',
	output: {
		path: __dirname + '/dist/js',
		filename: 'canvas.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!postcss-loader!sass-loader"
				})
			},
			{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        use: {
			        loader: 'babel-loader',
			        options: {
				        presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("../css/style.css"),
	    new BrowserSyncPlugin({
	        host: 'localhost',
      		port: 3000,
	        server: {baseDir: ['dist']},
	        files: ['./dist/*']
		}),
	],
	watch: true,
	devtool: 'source-map'
};