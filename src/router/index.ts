import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { hideNavigation: false }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {

    path: '/selectguestdate',
    name: 'selectguestdate',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectGuestDate.vue'),
    meta: { hideNavigation: false }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthenticationView/LoginView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthenticationView/RegisterView.vue'),
    meta: { hideNavigation: true } 
  },
  {
    path: '/readmore',
    name: 'readmore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ReadMore.vue'),
    meta: { hideNavigation: true } 
  },
  {
    path: '/roomdetail',
    name: 'roomdetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/RoomDetailCard.vue'),
    meta: { hideNavigation: true } 
  },
  {

    path: '/acceptBookingView',
    name: 'acceptBookingView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee/AcceptBookingView.vue'),
    meta: { hideNavigation: false }
  },
  {

    path: '/selectroom',
    name: 'selectroom',
    component: () => import(/* webpackChunkName: "selectroom" */ '../views/SelectRoomView.vue'),
    meta: { hideNavigation: false }
  },

  {
    path: '/inputinfo',
    name: 'inputinfo',
    component: () => import('../views/InputInfoView.vue'),
    meta: { hideNavigation: false }
  },
  {
    path: '/activaty',
    name: 'activaty',
    component: () => import('../views/ActivatyView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/bookingdetail',
    name: 'bookingdetail',
    component: () => import('../views/BookingDetailsView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/readmoreview',
    name: 'readmoreview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReadMoreView.vue'),
    meta: { hideNavigation: true } 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
