<template>
<div class="wrap">
        <div class="wpn">
            <div class="form-data pos">
                <a href=""><img src="../../static/img/logo.png" class="head-logo"></a>
                <form>
                    <p class="p-input pos">
                        <label for="tel">工号</label>
                        <input type="text" id="tel" autocomplete="off">
                        <span class="tel-warn tel-err hide"><em></em><i class="icon-warn"></i></span>
                    </p>
                    <p class="p-input pos" id="pwd">
                        <label for="passport">输入密码</label>
                        <input type="password" style="display: none"/>
                        <input type="password" id="passport">
                        <span class="tel-warn pwd-err hide"><em></em><i class="icon-warn" style="margin-left: 5px"></i></span>
                    </p>
                    <p class="p-input pos" id="confirmpwd">
                        <label for="passport2">确认密码</label>
                        <input type="password" style="position:absolute;top:-998px"/>
                        <input type="password" id="passport2">
                        <span class="tel-warn confirmpwd-err hide"><em></em><i class="icon-warn" style="margin-left: 5px"></i></span>
                    </p>
                </form>
                <button class="lang-btn">注册</button>
                <div class="bottom-info">已有账号，<router-link to="/login">马上登录</router-link></div>
                <p class="right">Powered by © 鹦鹉螺</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Reg'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
