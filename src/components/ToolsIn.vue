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
            <td>{{tool.id}}</td>
            <td>{{tool.name}}</td>
            <td>{{tool.model}}</td>
            <td>{{tool.count}}</td>
            <td>归还</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsIn',
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
