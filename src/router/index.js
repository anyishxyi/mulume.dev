import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/pages/redirect/index')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/pages/home'),
        name: 'home',
        // meta: { title: 'events', icon: 'home', affix: true }
      },
      {
        path: '/about',
        component: () => import(/* webpackChunkName: "yajp routes" */ '@/pages/about'),
        hidden: true
      },
      {
        path: '/uses',
        component: () => import(/* webpackChunkName: "yajp routes" */ '@/pages/uses'),
        hidden: true
      },
      {
        path: '/contact',
        component: () => import(/* webpackChunkName: "yajp routes" */ '@/pages/contact'),
        hidden: true
      }
    ]
  },
  { path: '*', redirect: '/', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
