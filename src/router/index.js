import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/shareRoom",
  },
  {
    path: '/shareRoom',
    name: 'shareRoom',
    component: () => import('../views/shareRoom/index'),
    meta: { title: '语聊房付费分享'}
  },
  {
    path: '/shareImg',
    name: 'shareImg',
    component: () => import('../views/shareImg/index'),
    meta: { title: '分享二维码'}
  },
  {
    path: '/shareChat',
    name: 'shareChat',
    component: () => import('../views/shareChat/index'),
    meta: { title: '预约房间分享'}
  },
  {
    path: '/shareFree',
    name: 'shareFree',
    component: () => import('../views/shareFree/index'),
    meta: { title: '语聊房免费分享'}
  },
  {
    path: '/shareCircle',
    name: 'shareCircle',
    component: () => import('../views/shareCircle/index'),
    meta: { title: '语聊圈分享'}
  },
  {
    path: '/shareInformation',
    name: 'shareInformation',
    component: () => import('../views/shareInformation/index'),
    meta: { title: '个人信息分享'}
  },
  {
    path: '/fail',
    name: 'fail',
    component: () => import('../views/fail/index'),
    meta: { title: '失败'}
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/download/index'),
    meta: { title: '下载桃壳app'}
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('../views/partner/introduce'),
    meta: { title: '合伙人'}
  },
  {
    path: '/joinIn',
    name: 'joinIn',
    component: () => import('../views/partner/joinIn'),
    meta: { title: '加盟'}
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/guide/index'),
    meta: { title: '新手指南'}
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
