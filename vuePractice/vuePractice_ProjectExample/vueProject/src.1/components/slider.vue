<template>
    <div class="banner">
      <ul class="clearfix">
        <li><img src="src/assets/images/img_1.jpg" alt=""/>
          <div class="text-box">
            <h2>还可以降低首付款健身房11111</h2>
            <p>刘德华11 / 文</p>
          </div>
        </li>
        <li><img src="src/assets/images/img_2.jpg" alt=""/>
          <div class="text-box">
            <h2>还可以降低首付款健身房2222</h2>
            <p>刘德华22 / 文</p>
          </div>
        </li>
        <li><img src="src/assets/images/img_3.jpg" alt=""/>
          <div class="text-box">
            <h2>还可以降低首付款健身房333</h2>
            <p>刘德华33 / 文</p>
          </div>
        </li>
        <li><img src="src/assets/images/img_1.jpg" alt=""/>
          <div class="text-box">
            <h2>还可以降低首付款健身房11111</h2>
            <p>刘德华11 / 文</p>
          </div>
        </li>
      </ul>

    </div>
</template>
<script>

//import $ from '../assets/js/jquery-1.7.2'; //因為1.7.2不是工程化的庫
import $ from 'jquery';//npm i jquery 可以模塊化

//使用模塊方法
//import {swipe} from '../assets/js/swipe.js';
import Swipe from '../assets/js/swipe.js';

export default {
    mounted(){
        var mySwipe=new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    }
}
</script>