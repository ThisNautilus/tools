<template>
  <div class="addtools well">
    <h4>新工具入库：</h4>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">编号</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具编号">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">名称</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具名称">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">型号</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具型号">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">数量</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具数量 ">
    </div>
    <button type="button" class="btn btn-default">录入</button>
  </div>
</template>

<script>
export default {
  name: 'AddTools',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addtools {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
}
.input-group {
  margin: 10px auto;
}
</style>
