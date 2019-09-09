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
    <div v-show="isShow" class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>{{showName}}已借完，暂无可用工具！</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsOut',
  data () {
    return {
      isShow:false,
      showName:'',
      keywords:'',
      userNum:'',
      tools:[
              {
                "id": 101,
                "name": "扳手",
                "model": "M5",
                "count": 25,
                'using':['N331']
              },
              {
                "id": 102,
                "name": "手电钻",
                "model": "S12",
                "count": 3,
                'using':[]
              },
              {
                "id": 103,
                "name": "裁纸刀",
                "model": "C15",
                "count": 10,
                'using':['N230','N189']
              },
              {
                "id": 104,
                "name": "手电筒",
                "model": "L500",
                "count": 4,
                'using':[]
              },
              {
                "id": 105,
                "name": "卷尺",
                "model": "J300",
                "count": 5,
                'using':['N521']
              }
            ]
    }
  },
  methods:{
    toolsBy(keywords){
      return this.tools.filter(tool => {
        if(tool.name.includes(keywords)){
          return tool;
        }
      })
    },
    getUserNum(id){
      this.tools.forEach(tool=>{
        if(tool.id === id){
          if(tool.count>0){
            tool.count--;
            tool.using.push(this.userNum);
          }else{
            this.isShow = true;
            this.showName = tool.name;
          }
          event.target.value = ''; // 清空工号文本框
        }
      })
    },
    inputUserNum(event){
      this.userNum = event.target.value;
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
