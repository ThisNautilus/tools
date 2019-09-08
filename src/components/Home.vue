<template>
  <div class="home">
    <div class="content">
      <div class="main">
        <div class="tool toolsout">
          <router-link to="/out" tag="a"><i class="iconfont">&#xe61d;</i><h5>工具借出</h5></router-link>
        </div>
        <div class="tool toolsin">
          <router-link to="/in" tag="a"><i class="iconfont">&#xe624;</i><h5>工具归还</h5></router-link>
        </div>
        <div class="tool toolsin">
          <router-link to="/add" tag="a"><i class="iconfont">&#xe62c;</i><h5>添加工具</h5></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1200px;
  height: 500px;
  /* background-color: pink; */
  margin: 10px auto;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;
}
.tool {
  margin: 100px 20px;
  width: 150px;
  height: 100px;
  border: 2px solid #336699;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 5px 8px;
  transition: all .5s ease;
}
.content .main .tool:hover {
  transform: scale(1.4);
}
.tool .iconfont {
  display: block;
  font-size: 40px;
  color: #336699;
}
h5 {
  font-size: 20px;
  color: #336699;
}
</style>
