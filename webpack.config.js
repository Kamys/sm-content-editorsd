'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		library: "myLibs"
	},
	module: {
		rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|resvg)$/i,
				use: ['url-loader?limit=10000', 'img-loader']
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			}
		]
	},
	watchOptions: {
		aggregateTimeout: 1000,
		poll: 1000
	},
	devtool: "source-map"
};