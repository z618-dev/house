<template>
    <div class="login" >
        <el-form :model="loginForm" ref="loginForm" label-width="80px" :rules="loginRules" class="login-form">         
            <h2>袋鼠找房--后台登录</h2>
            <el-form-item label="账户">
                <el-input v-model="loginForm.accountNum" prop="accountNum" name="accountNum" placeholder="请输入账号" auto-complete="on"></el-input>
            </el-form-item>
            <el-form-item label="密码">
               <el-input v-model="loginForm.pwd" prop="pwd" name="pwd" placeholder="请输入密码" auto-complete="on"></el-input>
            </el-form-item>
           <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import api from "@/api/api"
export default {
  name: "login",
  data() {
    return {
      loginForm: {
            accountNum:"",pwd:""
      },
      loginRules: {
        accountNum: [{ required: true,message: "请输入账号",trigger: "blur"}],
        pwd: [{ required: true,message: '请输入密码',trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin (){
        console.log(123)
        // this.$refs.loginForm.validate((valid) => {
        //     if(valid){
              api.login(this.loginForm.accountNum,this.loginForm.pwd).then((res) => {
                  console.log(res.data.data)
                  this.userToken=res.data.data
              })
              .catch((err) => console.log(err));
        //     }
        // })
      //   this.$router.push({
      //         name: "Home",
      //         params: {
      //         accountNum: this.loginForm.accountNum
      //     }
      // })
      }
  }
};
</script>
<style scoped>
.login{
    width:100%;text-align:center
}
.login-form{
    border: #ccc 1px solid;
    width: 26%;
    padding: 1%;
    margin: 0 auto;
    margin-top:8%
}
</style>