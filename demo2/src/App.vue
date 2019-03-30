<template>
<!--vue的模板里面，所有的内容都要被一个根节点包含起来-->
    <div id="app">
    <router-link to="/Home">Home</router-link>
    <router-link to="/News">News</router-link>
    <router-view></router-view>


    <br><br><hr>
    <button @click="showForData()">显示隐藏按钮</button>
    <v-forData v-if="showFlag"></v-forData>
    <!--<h1>{{ msg }}</h1>-->
    <!--你好vue-->
    <!--<hr>-->

    <!--<div :title="titleInfor">属性绑定title，鼠标划上去看看</div>-->
    <!--<hr>-->
    <!--<img :src="url" alt="">-->
    <!--<hr>-->
    <!--<div v-html="h"></div>-->
    <!--<hr>-->
    <!--<div v-text="text"></div>-->
    <!--<hr>-->

    <!--<ul>-->
      <!--<li v-for="(item,index) in list" :class="{'red':index==0,'blue':index==1}">{{item}}</li>-->
    <!--</ul>-->
    <!--<hr>-->
    <!--<div class="box" :style="{'width':width+'px'}"></div>-->

    <!--<hr>-->
    <!--<h2>双向数据绑定</h2>-->
    <!--{{msg}}-->
    <!--<input type="text" v-model="msg">-->
    <!--<button @click="getVal()">点击获取value</button>-->
    <!--<button @click="setVal()">点击设置value</button>-->

    <!--<hr>-->
    <!--<p>vue获取demo节点</p>-->
    <!--<input type="text"  ref="RefName" >-->
    <!--<div ref="cont">按钮后我会变成红色</div>-->
    <!--<button @click="refGetDom()">按钮</button>-->

    <!--<hr>-->
    <!--<ul>-->
      <!--<li v-for="item in listArry">{{item}}</li>-->
    <!--</ul>-->
    <!--<button @click="forListArry()">点击我给要循环的数组赋值，实现请求后添加数据的效果</button>-->

    <!--<hr>-->
    <!--<button @click="PassVal('123')">执行方法传值</button>-->

    <!--<hr>-->
    <!--<button data-id="获取属性值" @click="EventElement($event)">传事件对象$event,作用是获取dom节点和利用属性传值</button>-->


    <br>
    <h1>TodoList</h1>
    <input type="text" v-model="todo" @keydown="add($event)">
    <br>
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,index) in todoList" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveLocalStorage()">
        {{item.title}} ------- <button @click="remove(index)">-删除</button>
      </li>
    </ul>

    <br>

    <h2>已完成</h2>
    <ul>
      <li v-for="(item,index) in todoList" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveLocalStorage()">
        {{item.title}} ------- <button @click="remove(index)">-删除</button>
      </li>
    </ul>

    <br><br><br>
    <hr>
    <button @click="showComponent(1)">显示隐藏life观察销毁生命周期</button>
    <v-life v-if="showComFlag1"></v-life>

    <br><br>
    <hr>
    <button @click="showComponent(2)">显示隐藏resource请求</button>
    <v-resource v-if="showComFlag2"></v-resource>

   <br><br>
    <hr>
    <button @click="showComponent(3)">显示隐藏axios请求</button>
    <v-axios v-if="showComFlag3"></v-axios>

     <br><br>
    <hr>
    <button @click="showComponent(4)">显示隐藏父子组件传值</button>
    <v-father  v-if="showComFlag4"></v-father>

    <br><br>
    <hr>
    <button @click="showComponent(5)">显示隐藏兄弟组件传值</button>
    <v-elder v-if="showComFlag5"></v-elder>
    <v-younger v-if="showComFlag5"></v-younger>
  </div>
</template>

<script>
import storage from './model/localstorage.js'
import ForData from './components/ForData.vue'
import Life from './components/Life.vue'
import Resource from './components/Resource.vue'
import Axios from'./components/Axios'
import Father from './components/Father.vue'
import Elder from './components/elderBrother.vue'
import Younger from './components/youngerBrother.vue'
console.log(storage)
export default {
  data () {//业务逻辑里面定义的数据
    return {
//      msg: 'Welcome to Your Vue.js App',
//      flag:true,
//      width:300,
//      titleInfor:"我是一个title",
//      url:"http://imgmini.dfshurufa.com/mobile/20160302053149_1cb6f98c2db99ec2bb90035799391769_12.jpeg",
//      h:"<h2>v-html识别HTML，解析；我是一个h2标签</h2>",
//      text:"绑定数据的另一种方式v-text",
//      listArry:[],
      showFlag:false,
      todo:"",
      todoList:[],
      showComFlag1:false,
      showComFlag2:false,
      showComFlag3:false,
      showComFlag4:false,
      showComFlag5:false
    }
  },
  methods:{
  //  getVal(){
  //    alert(this.msg)
  //  },
  //  setVal(){
  //    this.msg='我是改变后的数据';
  //  },
  //  refGetDom(){
  //    alert(this.$refs.RefName.value);//注意这里用的是$refs
  //    this.$refs.cont.style.background='red'
  //  },
  //  forListArry(){
  //    for(var i=0;i<10;i++){
  //      this.listArry.push("这是第"+i+"条数据！")
  //    }
  //  },
  //  PassVal(val){
  //    alert(val)
  //  },
  //  EventElement(e){
  //    console.log(e);
  //    e.srcElement.style.background="red";
  //    console.log(e.srcElement.dataset.id)
  //  },
    add(e){
      //console.log(e)
      if(e.keyCode==13){//keyCode=13;回车键
        if(this.todo.length>0){
          this.todoList.push({
            title:this.todo,
            checked:false
          });
          this.todo="";
        }else{
          alert("请输入要添加的内容")
        }
      }
      //localStorage.setItem("list",JSON.stringify(this.todoList));
      storage.set("list",this.todoList)
    },
    remove(index){
      this.todoList.splice(index,1);
      storage.set("list",this.todoList)
    },
    saveLocalStorage(){
      storage.set("list",this.todoList)
    },
    showForData(){
      this.showFlag=!this.showFlag;
    },
    showComponent(data){
      switch (data){
        case 1:
        this.showComFlag1=!this.showComFlag1;
        break;
        case 2:
        this.showComFlag2=!this.showComFlag2;
        break;
        case 3:
        this.showComFlag3=!this.showComFlag3;
        break;
        case 4:
        this.showComFlag4=!this.showComFlag4;
        break;
        case 5:
        this.showComFlag5=!this.showComFlag5;
        break;
      }

    }
  },
  mounted(){
    if(localStorage.getItem("list")){//先判断有没有localStorage，不判断没有的时候会报错
      this.todoList=storage.get("list");
    }
  },
  components:{
    "v-forData":ForData,
    "v-life":Life,
    "v-resource":Resource,
    "v-axios":Axios,
    "v-father":Father,
    "v-elder":Elder,
    "v-younger":Younger,
  }
}
</script>

<style lang="scss">
  .red{
    color:red;
  }
  .blue{
    color:blue;
  }
  .box{width:100px;height:100px;background:red}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  //display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
