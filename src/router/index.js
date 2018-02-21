import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content/content'
// 个性推荐
import recommend from '@/components/content/recommend/recommend'
// 歌单
import songlist from '@/components/content/songlist/songlist'
// 主播电台
import anchorStation from '@/components/content/anchorStation/anchorStation'
// 排行榜
import rank from '@/components/content/rank/rank'
// 我的音乐
import mymusic from '@/components/mymusic/mymusic'
// 朋友
import friend from '@/components/friend/friend'
// 用户
import user from '@/components/user/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      redirect: 'recommend', // 重定向 打开首页显示个性推荐子路由
      component: content,
      children: [
        // {
        //   path: '/',
        //   component: recommend
        // },
        {
          path: 'recommend',
          component: recommend
        },
        {
          path: 'songlist',
          component: songlist
        },
        {
          path: 'anchorStation',
          component: anchorStation
        },
        {
          path: 'rank',
          component: rank
        }
      ]
    },
    {
      path: '/mymusic',
      component: mymusic
    },
    {
      path: '/friend',
      component: friend
    },
    {
      path: '/user',
      component: user
    }
  ]
})
