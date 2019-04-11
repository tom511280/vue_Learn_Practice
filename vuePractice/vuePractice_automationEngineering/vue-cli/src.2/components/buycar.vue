<template>
    <div class="container">
                <h4>購物車</h4>
                <dl v-for="(val) of list" :key="val.id">
                    <dt>商品名稱: <span class="badge badge-primary">{{val.name}}</span></dt>
                    <dd class="ml-3">單價:<span class="badge badge-info">{{val.price | currency('$',2)}}</span></dd>
                    <!-- 輸入最大值 最小值用法 -->
                    <dd class="ml-3">數量:<input type="number" v-model="val.count" :min="val.min" :max="val.max"></dd>
                    <dd class="ml-3">小記:<span class="badge badge-info"></span>{{val.count * val.price | currency('$',3)}}</span></dd>
                </dl>
                總價:{{cptSum | currency}}
            </div>
</template>
<script>

//定義組件
export default {
        data(){
            return {
                list:[
                    {id:1,name:'西紅柿',price:4.6,count:3, max:3, min:0},
                    {id:2,name:'雞蛋',price:2.5,count:7, max:5, min:0},
                    {id:3,name:'黃瓜',price:8.6,count:1, max:7, min:0}
                ]
             }
        },
        filters:{
                  toFix:function(data){
                    console.log("do toFix");
                    return data.toFixed(2);
                  },
                  //dight=2 --> 表示默認值為2 未輸入參數時dight=2
                  currency:function(data, currency, dight=2){
                    //此用法表示currency入參數時currency = '#'
                    currency = currency || '#';

                    console.log("do currency");
                    return currency+data.toFixed(dight);
                  }
                },
        computed : {
                  cptSum:function(){
                    var result = 0;
                    this.list.forEach(function(item,index){
                      result+= item.price * item.count;
                    });
                    return result;
                  }
                }
    }

</script>
