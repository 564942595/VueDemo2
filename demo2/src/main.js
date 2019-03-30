import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource'

import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import News from './components/News.vue'
import Details from './components/Details.vue'
import HomeDetails from './components/HomeDetails.vue'

Vue.use(vueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/Home', component: Home },
  { path: '/News', component: News },
  { path: '/Details/:key', component: Details },
  { path: '/HomeDetails', component: HomeDetails },
  {path:'*',redirect:"/Home"}//重定向，默认打开的是Father组件
]


const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  el: '#app',
  router,//第七步
  render: h => h(App)
})

/*
第一步：安装cnpm install vue-router --save
第二步：import VueRouter from 'vue-router'
第三步：vue.use(VueRouter)
第四步：import  路由要用到的组件
第五步：配置路由
         const routes=[
          {path："/路由名"，component：引入的组件},
          {path："/路由名"，component：引入的组件},
         	{path:"*",redirect:"默认要打开的路由名"}
         ]
第六步：实例化路由
		const router=new VueRouter({
			routes
		})
第七步：挂载到跟组件

第八步：在跟组件添加<router-view></router-view>
第九步：<router-link to="路由名称"></router-link>
 */
