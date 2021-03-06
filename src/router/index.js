import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewCon from '@/components/NewCon'
import HellFromVux from '@/components/HelloFromVux'

const inNeedRoute = r => require.ensure([], () => r(require('@/components/inNeedRoute.vue')), 'chunkname3')

// console.log('------HelloWorld', HelloWorld)

Vue.use(Router)

const router= new Router({
    mode:'history',
    routes:[
      { path: "/", redirect: "/NewCon" },
      {
        path: '/NewCon',component: NewCon,name: 'NewCon'
      },
      {
        path: '/HelloWorld/:id',component: HelloWorld,name: 'HelloWorld'
      },
      {
        path: '/HellFromVux',component: HellFromVux,name: 'HellFromVux'
      },
      {
        path: '/inNeedRoute',component: inNeedRoute,name: 'inNeedRoute'
      }
    ]
});

export default router
// router.beforeResolve((to,from,next)=>{
//     console.log('global beforeResolve')
//     next();
// });

// router.afterEach((to,from,next)=>{
//     console.log('global afterEach')
// });

