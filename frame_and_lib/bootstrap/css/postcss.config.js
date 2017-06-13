//var postcssCssnext = require('postcss-cssnext');
var cssnano = require('cssnano');
var postcssUrl = require("postcss-url");

module.exports = {
    //parser: 'postcss-scss',
    plugins: [
        //require('postcss-import'),
        //require('autoprefixer'),
        new cssnano ({}),
        new postcssUrl ({
          url: 'inline'
        }),
        //new postcssCssnext({warnForDuplicates:false}),
        //require('postcss-nested'),
        //require('postcss-short')
    ]
}
