<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form action="">
          <!--短信登录-->
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button class="get_verification" disabled="disabled">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!--密码登录-->
          <div>
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="密码">
              <div class="switch_button off">
                <div class="switch_circle"></div>
                <span class="switch_text">...</span>
              </div>
            </section>
            <section class="login_message">
              <input type="text" maxlength="4" placeholder="验证码">
              <img src="images/captcha.svg" alt="captcha" class="get_verification">
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:;" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script lang="stylus" rel="stylesheet/stylus">
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #ffffff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header // 登录头部区域
        .login_logo
          font-size 40px
          font-weight bold
          color $green
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color $green
              font-weight 700
              border-bottom 2px solid $green
      .login_content  // 登录内容区域
        >form // 表单
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid $green
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #ffffff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #cccccc
                font-size 14px
                background transparent
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #ffffff
              .switch_button
                font-size 12px
                border 1px solid #dddddd
                border-radius 8px
                transition background-color.3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #ffffff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #ffffff
                  .switch_text
                    float right
                    color #dddddd
                &.on
                  background $green
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #dddddd
                  border-radius 50%
                  background #ffffff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999999
              font-size 14px
              line-height 20px
              >a
                color $green
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background $green
            color #ffffff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us // 关于我们
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999999
</style>
