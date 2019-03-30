<template>
    <div>
      我是news组件
      <ul>
        <li v-for="item in msg">
          <router-link :to="'/Details/'+item.key">{{item.key}}--News组件{{item.title}}</router-link>
          <router-view></router-view>
        </li>
      </ul>
    </div>
</template>

<script>

  /*
  一、动态路由传值：
  第一步：  ：to ="'路由名/'+参数"

  第二步：在main.js中设置动态路由，参数是key
  {path："Details/:key",Component:Details}

  第三步：在要接收的页面
         this.$route.params
   */


    export default {
        data() {
            return {
              msg:[
                {key:"001",title:"subisa"},
                {key:"002",title:"sksdj"},
                {key:"003",title:"sudbia"},
                {key:"004",title:"skdsdj"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
