var webpack = require ('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './client/index.js',

    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
	
	devtool: 'source-map',
	
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015', 'react', 'react-hmre', 'stage-0']}
            }
        ]
    }
};