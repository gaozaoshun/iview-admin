<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      // 获取token,并设置到cookie
      this.handleLogin({ userName, password }).then(errMsg => {
        // 获取token失败，抛出错误信息
        if (errMsg) {
          this.$Message.error(errMsg)
        } else {
          // 获取用户信息
          this.getUserInfo().then(res => {
            this.$router.push({
              name: 'home'
            })
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
