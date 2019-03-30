<template>
    <div>
        我是生命周期函数的模块
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      beforeCreate(){
          console.log("beforeCreat")
      },
      created(){
        console.log("created");
      },
      beforeMount(){
        console.log("beforeMount")
      },
      mounted(){
        console.log("mounted")
      },
      beforeDestroy(){//在它的父组件v-if的时候触发，销毁前和销毁后
        console.log("beforeDestory")
      },
      destroyed(){
        console.log("destroyed")
      }
    }
</script>

<style lang="scss" scoped>

</style>
