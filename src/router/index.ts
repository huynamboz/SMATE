import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '@/views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/preview/WelcomePage.vue')
  },
  {
    path: '/type-travel',
    component: () => import('@/views/preview/TypeTravelPage.vue')
  },
  {
    path: '/age-range',
    component: () => import('@/views/preview/AgeRangePage.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        name: 'tabs',
        redirect: '/tabs/home'
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        name: 'profile',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'create',
        component: () => import('@/views/create/Create.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'favorites',
        component: () => import('@/views/FavoritesPage.vue')
      },
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/_id/DetailPage.vue')
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('@/views/auth/register.vue')
  },
  {
    path: '/detail/:id/address/:addressId',
    name: 'address-detail',
    component: () => import('@/views/_id/_address/AddressDetailPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
