<template>
  <div class="header">
    <div class="tool-header">
      <i class="iconfont">&#xe62e;</i>工具进出管理
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  background-color: #336699;
}
.header .tool-header {
  width: 1200px;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  color: #fff;
  margin:auto;
}
.header .tool-header .iconfont {
  color: #fff;
  font-size: 30px;
  line-height: 60px;
  padding: 0 10px;
}
</style>
