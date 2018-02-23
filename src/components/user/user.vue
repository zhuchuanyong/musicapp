<template>
  <div class="user">
    <myheader title="我"></myheader>
    <div class="scroll">
      <div class="userinfo">
        <div class="top">
          <div class="img"></div>
          <div class="username">
            <span>12532用户名</span>
          </div>
          <!-- 签到 -->
          <div class="register">
            <mt-button type="danger" size="large" class="btn">签到</mt-button>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <p>动态</p>
              <p>0</p>
            </li>
            <li>
              <p>关注</p>
              <p>0</p>
            </li>
            <li>
              <p>粉丝</p>
              <p>0</p>
            </li>
            <li class="myinfo">
              <p >我的资料</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="seting">
        <mt-cell title="  我的消息" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-music" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <mt-cell title="  会员中心" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-vimeo" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <mt-cell title="  商城" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-shopping-cart" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <mt-cell title="  设置" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-cog" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <mt-cell title="  扫一扫" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-camera" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <mt-cell title="  主题换肤" icon="more" class="setlist" >
          <i slot="icon"  class="fa fa-wheelchair-alt" ></i>
          <span><i class="fa fa-chevron-right"></i></span>
        </mt-cell>
        <p>登录接口也挂掉了,唉</p>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/header/myheader'
export default {
  components: {
    myheader
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/minxin.less';
.scroll {
  position: relative;;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 500px;
}
.userinfo{
  height: 150px;
  margin-top: 44px;
  background-color: #87CCE9;
  padding: 15px;
  .top {
    display: flex;
    height: 75px;
    align-items:center;
    position: relative;
    >div {
      height: 60px;
      flex-basis: 0;
    }
    .img {
      flex-grow: 1;
      height: 60px;
      background-color: white;
    }
    .username {
      flex-grow: 2;
      span {
        height: 30px;
        line-height: 30px;
      }
    }
    .register {
      position: relative;
      flex-grow: 1;
      .btn {
        .center;
      }
    }
  }
  .bottom {
    ul {
      display: flex;
    }
    li {
      flex: 1;
      height: 75px;
      text-align: center;
      // line-height: 75px;
      p {
        height: 35px;
        line-height: 35px;
      }
    }
    .myinfo {
      line-height: 75px;
      p {
        height: 75px;
        line-height: 75px;
      }
    }
  }
}
.setlist {
  border-bottom: 1px solid #cccccc;
}
</style>
