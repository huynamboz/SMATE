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
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
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
    component: () => import('@/views/auth/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
