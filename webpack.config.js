const webpack = require("webpack");
const path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
	context: path.join(process.cwd(), ""),
	entry: ["babel-polyfill", "./src/index.js"],

	output: {
		filename: "[name].[hash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "react-app", "es2015-ie"],
						plugins: ["transform-class-properties"]
					}
				}
			},
			{
				test: /\.(scss|css)$/,

				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loaders: ["url-loader", "img-loader"]
			},
		]
	},
	resolve: {
		extensions: [".js"], // extensions that are used
		modules: [path.join(process.cwd(), ""), "node_modules"], // directories where to look for modules
		alias: {
			components: path.resolve(__dirname, "src") + "/components",
			config: path.resolve(__dirname, "src") + "/config",
			reducer: path.resolve(__dirname, "src") + "/reducer",
			routers: path.resolve(__dirname, "src") + "/routers",
			styles: path.resolve(__dirname, "src") + "/components/styles",

		},
	},
	devServer: {
		publicPath: "/",
		port: 3000,
		contentBase: path.join(process.cwd(), "dist"), // static file location
		host: "localhost",
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		noInfo: false,
		stats: "minimal",
		hot: true // hot module replacement. Depends on HotModuleReplacementPlugin
	},
	plugins: [
		new CleanWebpackPlugin(["dist"], {
			root: process.cwd()
		}),
		//new UglifyJSPlugin(),
		new HtmlWebpackPlugin({
			template: "public/index.html"
		}),
		new ExtractTextPlugin({
			filename: "[name].css",
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	performance: {
		hints: false,
	},
};

