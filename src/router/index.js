import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Home
  },/*
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Tables.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/'../views/Forms.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/Profile.vue')
  },
  {
    meta: {
      title: 'New Client'
    },
    path: '/client/new',
    name: 'client.new',
    component: () => import( '../views/ClientForm.vue')
  },
  {
    meta: {
      title: 'Edit Client'
    },
    path: '/client/:id',
    name: 'client.edit',
    component: () => import('../views/ClientForm.vue'),
    props: true
  },*/
  {
    path: '/full-page',
    component: () => import( '../views/FullPage.vue'),
    children: [
      {
        meta: {
          title: 'Login'
        },
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "full-page" */ '../views/full-page/Login.vue')
      },
      {
        meta: {
          title: 'Password Recovery'
        },
        path: '/password-recovery',
        name: 'password-recovery',
        component: () => import( '../views/full-page/PasswordRecovery.vue')
      },
      {
        meta: {
          title: 'Error v.1'
        },
        path: '/error-in-card',
        name: 'error-in-card',
        component: () => import( '../views/full-page/Error.vue')
      },
      {
        meta: {
          title: 'Error v.2'
        },
        path: '/error-simple',
        name: 'error-simple',
        component: () => import( '../views/full-page/Error.vue'),
        props: { isInCard: false }
      },
      {
        meta: {
          title: 'Lock screen'
        },
        path: '/lock-screen',
        name: 'lock-screen',
        component: () => import( '../views/full-page/LockScreen.vue')
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
