/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var cssnext = require('cssnext');
var postcssImport = require('postcss-import');
var postMixins = require('postcss-mixins');
var postNested = require('postcss-nested');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

/* eslint-enable */
module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        vendor: ['jquery'],
        index: './index',
        development: './development',
        groupIntro: './groupIntro',
        learn: './learn',
        main: './main',
        news: './news',
        newsDetail: './newsDetail',
        payment: './payment',
        subbrand: './subbrand',
        webstore: './webstore',
    },
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: '[name].bundle.js',
        publicPath: './assets/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css!postcss'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000'},
            {test: /\.html$/, exclude: /node_modules/, loader: 'html!html-minify'},
            {test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/, loader: 'file'},
            {test: /\.woff(2)?(\?v=\d(\.\d){2})?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
        ],
    },
    postcss: function () {
        return [
            postcssImport({
                onImport: function (files) {
                    files.forEach(this.addDependency);
                }.bind(this),
            }),
            cssnext({
                features: {
                    'browers': ['> 10%, last 2 versions, ie >= 9, not opera >= 33'],
                },
            }),
            postMixins,
            postNested,
        ];
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
};
