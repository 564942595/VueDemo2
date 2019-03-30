<template>
    <div>
      <h4>v-resource请求，vue的官方请求方式,得到数据后循环添加到页面</h4>
      <ul>
        <li v-for="item in list">
          {{item.title}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              list:[]
            }
        },
      methods:{
          getData(){
            var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.get(url).then((response)=>{
                  console.log(response);
                  this.list=response.body.result;
            },(err)=>{
              console.log(err)
            })
          }
      },
      mounted(){
          this.getData()
      }
    }
</script>

<style lang="scss" scoped>

</style>
