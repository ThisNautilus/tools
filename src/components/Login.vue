<template>
  <div class="wrap">
    <div class="wpn">
        <div class="form-data pos">
            <a href=""><img src="../../static/img/logo.png" class="head-logo"></a>
            <div class="form1">
                <p class="p-input pos">
                    <label for="num">工号</label>
                    <input type="text" id="num">
                </p>
                <p class="p-input pos">
                    <label for="pass">请输入密码</label>
                    <input type="password" id="pass">
                </p>
            </div>
            <div class="r-forget cl">
                <a href="./reg.html" class="z">账号注册</a>
                <a href="./getpass.html" class="y">忘记密码</a>
            </div>
            <button class="lang-btn off log-btn">登录</button>
            <p class="right">Powered by © 鹦鹉螺</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
