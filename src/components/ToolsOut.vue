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
            <td>{{tool.id}}</td>
            <td>{{tool.name}}</td>
            <td>{{tool.model}}</td>
            <td>{{tool.count}}</td>
            <td @click="toolOut(tool.id)"><a href="javasvript:;">借出</a></td>
            <td><span>{{tool.using | userFormat }}</span></td>
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
    toolOut(id){
      this.tools.forEach(tool=>{
        if(tool.id === id){
          if(tool.count>0){
            tool.count--;
          }else{
            this.isShow = true;
            this.showName = tool.name;
          }
        }
      })
    },
    toolsBy(keywords){
      return this.tools.filter(tool => {
        if(tool.name.includes(keywords)){
          return tool;
        }
      })
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
