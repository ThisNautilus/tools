<template>
  <div class="toolsin">
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">查找</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具名称" aria-describedby="sizing-addon2">
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="tool in tools" :key="tool.id">
            <td style="width:15%;">{{tool.id}}</td>
            <td style="width:20%;">{{tool.name}}</td>
            <td style="width:20%;">{{tool.model}}</td>
            <td style="width:15%;">{{tool.count}}</td>
            <td style="width:30%;"><input type="text" @keyup.enter="getUserNum(tool.id)" placeholder="输入工号归还" @input="inputUserNum"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="isShow" class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>{{showName}}归还成功！</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsIn',
  userNum:'',
  isShow:false,
  showName:'',
  data () {
    return {
      tools:[
              {
                "id": "101",
                "name": "扳手",
                "model": "M5",
                "count": "25"
              },
              {
                "id": "102",
                "name": "手电钻",
                "model": "S12",
                "count": "3"
              },
              {
                "id": "103",
                "name": "裁纸刀",
                "model": "C15",
                "count": "10"
              },
              {
                "id": "104",
                "name": "手电筒",
                "model": "L500",
                "count": "4"
              },
              {
                "id": "105",
                "name": "卷尺",
                "model": "J300",
                "count": "5"
              }
            ]
    }
  },
  methods:{
    toolIn(id){
      this.tools.forEach(tool=>{
        if(tool.id === id){
          tool.count++;
        }
      })
    },
    getUserNum(id){
      this.tools.forEach(tool=>{
        if(tool.id === id){
          tool.count++;
          this.isShow = true;
          this.showName = tool.name;
          event.target.value = '';
        }
      })
    },
    inputUserNum(){
      this.userNum = event.target.value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolsin {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
}
.input-group {
  margin-bottom: 5px;
}
</style>
