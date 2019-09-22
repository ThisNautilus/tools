<template>
  <div class="wrap">
    <div class="wpn">
        <div class="form-data pos">
            <!-- <a href=""><img src="../../static/img/logo.png" class="head-logo"></a> -->
            <div class="form1">
                <p class="p-input pos">
                    <!-- <label for="num">账号</label> -->
                    <!-- <input type="text" id="num" v-model="user"> -->
                    <input type="text" placeholder="账号" v-model="user">
                </p>
                <p class="p-input pos">
                    <!-- <label for="pass">密码</label> -->
                    <!-- <input type="password" id="pass" v-model="pw"> -->
                    <input type="password" placeholder="密码" v-model="pw">
                </p>
            </div>
            <div class="r-forget cl">
                <!-- <router-link to="/reg" class="z">账号注册</router-link> -->
                <!-- <router-link to="javasscript:;" class="y">忘记密码</router-link> -->
                <a href="javasscript:;" class="y" @click="alert">忘记密码</a>
            </div>
            <button class="lang-btn off log-btn" @click="login">登录</button>
            <p class="right">Powered by © 鹦鹉螺工业技术有限公司</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'Login',
data(){
    return {
        user:'',
        pw:''
    }
},
methods:{
    alert(){
        alert("请与管理员联系！")
    },
    login(){
        let loginMessage = {
            user:this.user,
            pw:this.pw
        }
        sessionStorage.setItem("loginMessage",JSON.stringify(loginMessage))
        this.$router.push('/home')
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
