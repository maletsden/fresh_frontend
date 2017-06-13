//scripts
import script_main from './script_main';
import ajax from './ajax';
import responsive from './responsive';
//css
import '../postcss/bootstrap/bootstrap.min.css';
import '../postcss/font-awesome/css/font-awesome.css';
import  '../postcss/style.css';
import  '../postcss/progressively.css';
import  '../postcss/ihover.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
  console.log('success');
});


script_main();
ajax();
responsive();
