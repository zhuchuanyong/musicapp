<template>
  <div class="special">
    <specialmvlist :infodata='item' v-for="(item , index) in infodata" :key="index" :index="index+1"></specialmvlist>
    专辑
  </div>
</template>
<script>
import specialmvlist from '@/components/sings/specialmvlist'
export default {
  data () {
    return {
      infodata: [
        {
          name: '告白气球',
          title: '周杰伦床边的故事',
          img: '111'
        },
        {
          name: '晴天',
          title: '叶惠美',
          img: '222'
        }
      ]
    }
  },
  components: {
    specialmvlist
  }
}
</script>
<style lang="less" scoped>
</style>
