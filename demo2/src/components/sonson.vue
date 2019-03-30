<template>
    <div id="forDataSon">
       我是父组件传过来的String：   {{title}}
      <br>
      <br>
      我是父组件传过来的function：<button @click="func('123456')">触发按钮</button>
      <br>
      <br>
      通过传父组件本身，子组件获取：<button @click="getFatherSelf()">触发按钮</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      props:["title","func","FatherSelf"],
      methods:{
          getFatherSelf(){
           console.log(this.FatherSelf.fatherTit);//可以获取父组件所有的data和function
          }
      },
      mounted(){

      }
    }
</script>

<style lang="scss" scoped>

</style>
