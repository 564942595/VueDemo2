<template>
    <div>
      <button @click="getParent()">son3组件的按钮；parent获取父组件的方法和数据</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      methods:{
        getParent(){
          alert(this.$parent.fatherTit);
          this.$parent.Transfer('this.$parent方法获取父组件发方法')
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
