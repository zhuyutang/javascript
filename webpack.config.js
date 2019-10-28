const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	entry:"./src/index.js",
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'index.js'
	},
	module:{
		rules:[{
			test:/\.js$/,
			exclude:/(node_modules)/,
			loader:'babel-loader'
		}]
	},
	devServer:{
		port:9000,
		open:true,
		contentBase:'./dist'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html'
		})
	]
}