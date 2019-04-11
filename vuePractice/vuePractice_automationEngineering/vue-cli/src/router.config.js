//引入組件
import home from './components/home.vue' 
import news from './components/news.vue' 
import user from './components/user.vue' 
import login from './components/login.vue' 
import reg from './components/reg.vue' 
import detail from './components/detail.vue' 

//路由配置
let routes = [
    {path:'/home',component:home},
    {
        path:'/news',
        component:news,
        //子路由
        children:[
                //:aid --> 變量
                {
                    name:'detail',
                    path:'detail/:aid',
                    component:detail
                }
        ] 
    },
    {path:'/user', component:user,},
    {path:'/login',component:login},
    {path:'/reg',component:reg}, 
    {path:'/',redirect:'/home'}, //路由跳轉
    {path:'*',redirect:'/home'} //*=任意路由 //**任意子路由
  ]
  
  export default {
      routes
  }