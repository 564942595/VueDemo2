<template>
    <div id="ForData">
      <h2>{{obj.name}}</h2>
      <ul>
      <li v-for="item in list">
      {{item}}
      </li>
      </ul>
      <ul>
      <li v-for="(a,b) in list">
      {{a}}{{b}}
      </li>
      </ul>
      <hr>

      <ul>
      <li v-for="item in list1">
      {{item.cate}}
      <ol>
      <li v-for="dd in item.inform">
      {{dd.title}}
      </li>
      </ol>
      </li>
      </ul>
      <hr>

      <ul>
      <li v-for="(a,b) in list3">
      {{b}}:{{a}}
      </li>
      </ul>
      <hr>
    </div>
</template>

<script>

export default {
    data() {
      return {
      obj:{
        name:"objName"
      },
      list:[1,2,3],
      list1:[
        {
          "cate":"国内新闻",
          "inform":[
            {"title":"国内111"},
            {"title":"国内222"},
          ]
        },
        {
          "cate":"国际新闻",
          "inform":[
            {"title":"国际111"},
            {"title":"国际222"}
        ]
        }
      ],
      list3:
       {
          name:"名字",
          age:10
        },
      }
    },

}
</script>

<style lang="scss" scoped>
  /*加上scoped后css只作用在此模块中，否则全局作用*/
h2{
  color:red
}
</style>
