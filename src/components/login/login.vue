<template>
     <div class="login">
        <el-form ref="form" :model="form" label-width="80px" class="login-form">
            <h2>用户登录</h2>
            <el-form-item label="账户">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      console.log(123)
      this.$router.push({ path: '/Home' })
    }
  }

}
</script>

<style>
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
