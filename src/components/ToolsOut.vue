<template>
  <div class="toolsout">
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">查找</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具名称" v-model="keywords">
    </div>
    <div class="panel panel-default">
      <table class="table text-center">
        <thead>
          <tr>
            <td>编号</td>
            <td>名称</td>
            <td>型号</td>
            <td>数量</td>
            <td>操作</td>
            <td>正在使用</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tool in toolsBy(keywords)" :key="tool.id">
            <td style="width:10%;">{{tool.id}}</td>
            <td style="width:15%;">{{tool.name}}</td>
            <td style="width:15%;">{{tool.model}}</td>
            <td style="width:10%;">{{tool.count}}</td>
            <!-- <td style="width:20%;"><input type="text" @keyup.enter="getUserNum(tool.id)" placeholder="输入工号借出" v-model="userNum"></td> -->
            <!-- <td style="width:20%;"><input type="text" @keyup.enter="getUserNum(tool.id)" placeholder="输入工号借出" :value="userNum" @input="inputUserNum"></td> v-bind和v-on实现v-model -->  
            <td style="width:20%;"><input type="text" @keyup.enter="getUserNum(tool.id)" placeholder="输入工号借出" @input="inputUserNum"></td>
            <td style="width:30%;"><span>{{tool.using | userFormat }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div v-show="isSuccess" class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>{{showName}}已成功借出！</strong>
    </div> -->
    <!-- <div v-show="isFailed" class="alert alert-info alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>{{showName}}已借完，暂无可用工具！</strong>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ToolsOut',
  data () {
    return {
      isSuccess:false,
      showName:'',
      keywords:''
    }
  },
  methods:{
    toolsBy(keywords){
      return this.$store.state.tools.filter(tool => {
        if(tool.name.includes(keywords)){
          return tool;
        }
      })
    },
    getUserNum(id){
      this.$store.commit("decrement",id);
      event.target.value = ''; // 清空工号文本框
      this.isSuccess = true;
      this.$store.state.tools.forEach(tool =>  {
        if(tool.id == id){
          this.showName = tool.name;
        }
      })
    },
    inputUserNum(event){
      // this.userNum = event.target.value;
      this.$store.commit("getUserNum",event.target.value)
    }
  },
  filters:{
    userFormat:function(users){
      return users.join(','); // 注意：数组才可以使用join()方法
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolsout {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
}
.input-group {
  margin-bottom: 5px;
}
</style>
