<template>
    <div>
        第一步：定义一个新的vue实例，js文件<br><br>

        第二步：哪里用在哪里引入js文件<br><br>

        第三步：发数据的地方用 vue实例.$emit("名称","数据")<br><br>

        第四步：接数据的地方用 vue实例.$on("名称")<br><br>
        <button @click="transferYounger()">点击我给弟弟组件传值</button>
    </div>
</template>

<script>
import vueEvent from '../model/emit.js'
    export default {
        data() {
            return {
              elderMsg:"哥哥msg"
            }
        },
      methods:{
          transferYounger(){
           vueEvent.$emit("to-younger",this.elderMsg);
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>
