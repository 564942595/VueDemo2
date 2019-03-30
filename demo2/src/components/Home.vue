<template>
  <div>
      我是Home组件 <ul>
    <li v-for="item in msg">
      <router-link :to="'/HomeDetails?id='+item.key">{{item.key}}--Home组件{{item.title}}</router-link>
      <router-view></router-view>
    </li>
  </ul>
  </div>
</template>

<script>

  /*
  get传值：
  第一步： :to="'/路由名?id='+参数"

  第二步： 路由正常配置

  第三步： 在接收的地方
           this.$route.query


   */

  import vueEvent from '../model/emit.js'
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
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

<style lang="scss" scoped>
</style>
