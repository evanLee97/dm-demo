// import router from './router'
// import store from '@/store'

// const whiteList = ['/login']
// // 路由前置守卫
// router.beforeEach((to, from, next) => {
//   if (store.getters.token) {
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     if (whiteList.indexOf(to.path) > -1) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
