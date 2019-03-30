<template>
    <div>
      <h4>第一种：父组件给子组件传值和方法</h4>
      <v-son :title="fatherTit" :func="Transfer" :FatherSelf="this"></v-son>

      <br><br>

      <h4>第二种：父组件主动获取子组件的数据和方法</h4>
      <button @click="getChild()">ref获取dom节点方法，获取子组件的数据和方法</button>
      <v-sonsecond ref="SonComponent"></v-sonsecond>

      <br><br>

      <h4>第三种：子组件主动获取父组件的数据和方法</h4>
      <v-sonthird></v-sonthird>

    </div>
</template>

<script>
  import son from './sonson'
  import sonSecond from './Son2.vue'
  import sonThird from './Son3.vue'
    export default {
        data() {
            return {
              fatherTit:"父组件的title"
            }
        },
      components:{
        "v-son":son,
        "v-sonsecond":sonSecond,
        "v-sonthird":sonThird
      },
      methods:{
          Transfer(data){
            alert("触发父组件的function，并接到参数"+data)
          },
        getChild(){
            alert(this.$refs.SonComponent.son2msg);//获取子组件的数据
            this.$refs.SonComponent.run();//获取子组件的方法
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
