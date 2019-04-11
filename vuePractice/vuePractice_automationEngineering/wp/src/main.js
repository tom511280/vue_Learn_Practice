//es5的方式輸入模塊
var modA = require('./mod/a.js')

//es6的方式輸入模塊 可以不用加檔案類型
import {str2} from './mod/a.js'

//因為基本上webpack不認CSS為一模塊，所以必須要使用轉換器
//css-loader
//style-loader
//使用!可以引入多模塊

//以下為沒有webpack.config.js控管時的引用方式
//require('style-loader!css-loader!./css/a.css')
require('./css/a.css')

console.log(modA);
var odiv = document.getElementById('app');
//使用ES5引入資料
odiv.innerHTML = modA.str;

//使用ES6引入資料
odiv1.innerHTML = str2;
