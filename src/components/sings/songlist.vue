<template>
  <div class="list">
    <!-- {{infodata.name}}
    {{index}}
    {{infodata.title}} -->
    <div class="index">
       {{index}}
    </div>
    <div class="info">
     <p>{{infodata.name}}</p>
     <span>{{infodata.ar[0].name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['infodata', 'index']
}
</script>
<style lang="less" scoped>
.list {
  height: 48px;
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #cccccc;
  .index {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
  }
  .info {
    span {
      font-size: 14px;
    }
  }
}
</style>
