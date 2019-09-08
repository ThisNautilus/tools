<template>
  <div class="login">
    <div v-if="isShow" class="tool-login">
      <i class="iconfont">&#xe612;</i>登录
    </div>
    <div v-else class="tool-login">
      <i class="iconfont">&#xe614;</i>退出
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool-login {
  height: 60px;
  width: 100px;
  font-size: 30px;
  line-height: 60px;
  color: black;
}
.tool-login .iconfont {
  font-size: 30px;
  margin-right: 10px;
}
</style>
