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

    path: '/selectguestdate/:type',
    name: 'selectguestdate',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectGuestDateView.vue'),
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

    path: '/selectroom/:type',
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
    path: '/activity',
    name: 'activity',
    component: () => import('../views/ActivityView.vue'),
    meta: { hideNavigation: false }
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
  {
    path: '/historyConfirmReservation',
    name: 'historyConfirmReservation',
    component: () => import('../views/Employee/HistoryAcceptBookingView.vue'), // Ensure the path is correct here
    meta: { hideNavigation: true } 
  },
  {
    path: '/historyBookings',
    name: 'historyBookings',
    component: () => import('../views/HistoryBookingView.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/checkInManagement',
    name: 'checkInManagement',
    component: () => import('../views/Employee/CheckInManagementView.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/checkOutManagement',
    name: 'checkOutManagement',
    component: () => import('../views/Employee/CheckOutManagementView.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/complete',
    name: 'completes',
    component: () => import('../components/Employee/CompleteCheckin.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/checkCheckIn',
    name: 'checkCheckIn',
    component: () => import('../views/Employee/CheckCheckInView.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/finecheckout',
    name: 'finecheckouts',
    component: () => import('../components/Employee/FineCheckout.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/historycustomer',
    name: 'historycustomers',
    component: () => import('../components/Employee/HistoryCustomer.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/checkcheckout',
    name: 'checkcheckouts',
    component: () => import('../views/Employee/CheckCheckOutView.vue'),
    meta: { hideNavigation: false } 
  },
  {
    path: '/historyCheckInOutCus',
    name: 'historyCheckInOutCus',
    component: () => import('../views/Employee/HistoryCheckInOutView.vue'),
    meta: { hideNavigation: false } 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
