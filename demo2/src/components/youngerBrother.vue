<template>
    <div>

    </div>
</template>

<script>
import vueEvent from '../model/emit.js'
export default {
    data() {
        return {
          youngerMsg:"弟弟msg"
        }
    },
  methods:{
     
      },
      mounted(){
          vueEvent.$on("to-younger",function(data){
          console.log("我是从哥哥组件获取到的：‘"+data+"’")
          })
      }
}
</script>

<style lang="scss" scoped>
