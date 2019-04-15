import home from './components/home.vue'
import follow from './components/follow.vue'
import column from './components/column.vue'
import user from './components/user.vue'
import login from './components/login.vue'
import detail from './components/detail.vue'
import reg from './components/reg.vue'
import error from './components/error.vue'

let routes = [
    {path:'/home',component:home},
    {path:'/follow',component:follow},
    {path:'/column',component:column},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/detail/:id',component:detail},
    {path:'/reg',component:reg},
    {path:'',redirect:'/home'},
    {path:'*',component:error}
]

export default {
    routes:routes,
    //mode:'history' //配合後端
}