'use stict';
let path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./css/style.css');
var postcssUrl = require("postcss-url");
var helpers = require('./helpers');
module.exports = {
  context: __dirname + '/src',
  entry: {
    script_min:'./js/script',
    pages_min:'./js/pages/common',
    common_min:'./js/no_babel/common'/*,
    polyfills: './ts/config/polyfills',
    vendor: './ts/config/vendor',
    app: './ts/main'*/
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    publicPath: '/',
    library: '[name]'
  },
  watch: NODE_ENV == 'development',

  watchOptions:{
    aggregateTimeout: 300
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV : JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common_min'
    }),
    extractCSS,/*
    new webpack.ContextReplacementPlugin(
     // The (\\|\/) piece accounts for path separators in *nix and Windows
     /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
     helpers.root('./ts/config'), // location of your src
     {} // a map of your routes
   )
//
*/
new webpack.optimize.UglifyJsPlugin({
      include: /\_min\.js$/
    })
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },


  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, "js"),
        exclude: path.resolve(__dirname, "js/no_babel"),
        use: {
          loader: 'babel',
          options: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
          }
        }
      }/*,
      {
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: { configFileName: helpers.root('src', 'tsconfig.json') }
        }, 'angular2-template-loader']
      }*/,
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader', 'postcss-loader' ])
      }
    ]

  }
}
