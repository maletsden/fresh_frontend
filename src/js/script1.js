//scripts
import script_main from './script_main';
//css
import '../postcss/bootstrap/bootstrap.min.css';
import '../postcss/font-awesome/css/font-awesome.css';
import  '../postcss/style.css';
import  '../postcss/progressively.css';
import  '../postcss/ihover.css';
//fonts
import CSSFontLoader from 'css-font-loader';
script_main();

exports.script_main=script_main;

CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
  console.log('success');
});
