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
import api from "@/api/api";
import { mapMutations } from 'vuex';
export default {
  name: "login",
  data() {
    return {
      loginForm: {
          accountNum:'',
          pwd:''
      },
      loginRules: {
        accountNum: [{ required: true,message: "请输入账号",trigger: "blur"}],
        pwd: [{ required: true,message: '请输入密码',trigger: 'blur'}]
      }
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    handleLogin (){
        console.log(123)
         var _this = this;
        this.loading = true;
        api.login({accountNum:this.loginForm.accountNum,pwd:this.loginForm.pwd}).then(res=> {
          console.log(11,res)
          _this.loading = false;
          if (res.status == 200) {
            //成功
              _this.userToken = 123;
              // localStorage.setItem('Authorization',_this.userToken);
              _this.changeLogin({Authorization:_this.userToken});
              this.$router.push({path:'/Home'});
          } else {
            //失败
            _this.$alert('登录失败!', '失败!');
          }
        }, res=> {
          _this.loading = false;
          _this.$alert('服务器端出错');
        })
      
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