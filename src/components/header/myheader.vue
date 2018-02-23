<template>
   <mt-header fixed :title="title" class="header">
      <mt-button slot="left" class="left">
        <i class="fa fa-microphone"></i>
      </mt-button>
      <mt-button slot="right" class="right" v-on:click="toTarget">
        <i class="fa fa-align-left fa-rotate-270"></i>
      </mt-button>
    </mt-header>
</template>
<script>
export default {
  props: ['title'],
  methods: {
    toTarget () {
      this.$router.push('/playpage')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/variable.less";
.header {
  height: 44px;
  background-color: @backgroundred;
  // line-height: 44px;
  // vertical-align: middle;
  i {
    font-size: 0.2rem;
    // line-height: 44px;
    color: @fontawesome;
    vertical-align: middle;
  }
  .left,.right {
    //  line-height: 44px;
    //  vertical-align: middle;
    height: 44px;
    width: 0.44rem;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
}
</style>
