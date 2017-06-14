//scripts
import script_main from './script_main';
import ajax from './ajax';
import responsive from './responsive';
//css
import  '../postcss/style.css';
//fonts
import CSSFontLoader from 'css-font-loader';
CSSFontLoader.loadFromCSS ( 'postcss/fonts/myfonts.css',function () {
  console.log('success');
});


script_main();
ajax();
responsive();
