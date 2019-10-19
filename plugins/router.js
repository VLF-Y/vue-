import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../src/pages/Home.vue'
import Login from '../src/pages/Login.vue'
import Set from '../src/pages/Set.vue'
import Self from '../src/pages/Self.vue'
import  Compose from '../src/pages/Compose.vue'
import Reg from '../src/pages/Reg.vue'
import Detail from '../src/pages/Detail.vue'
import Gowu from '../src/pages/Gowu.vue'
Vue.use(VueRouter);


// import Follow from '../pages/Follow.vue'
// import Column from '../pages/Column.vue'
// import User from '../pages/User.vue'
// import Detail from '../pages/Detail.vue'
// import Error from '../pages/Error.vue'

let routes=[
  {path:'/Home',component:Home,name:'Home'},
  {path:'/Login',component:Login,name:'Login'},
  {path:'/Reg',component:Reg,name:'Reg'},
  {path:'/Self',component:Self,name:'Self'},
  {path:'/Set',component:Set,name:'Set'},
  {path:'/Compose',component:Compose,name:'Compose'},
  {path:'/Detail',component:Detail,name:'Detail'},
  {path:'/Gowu',component:Gowu,name:'Gowu'},

  // {path:'/Detail/:id',component:Detail,name:'detail',props:true},
  // {path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,dataName:route.query.dataName})},
  // {path:'/Detail/:id',component:Detail,name:'detail',props:(route)=>({id:route.params.id,...route.query})},
  {path:'/*',redirect:'/Home'},
];

export default new VueRouter({routes})