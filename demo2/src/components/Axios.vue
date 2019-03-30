<template>
    <div>
     axios请求：注意哪里用在哪里引入
      <br>
      <ul>
        <li v-for="item in list">
          {{item.title}}
        </li>
      </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
              list:[],
            }
        },
      methods:{
          getData(){
            var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
             axios.get(url).then((res)=>{
               this.list=res.data.result
               console.log(res)
             }).catch((err)=>{
               console.log(err)
             })
          }
      },
      mounted(){
          this.getData();
      }
    }
</script>

<style lang="scss" scoped>

</style>
