import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/diekrech',
    name: 'diekrech',
    component: () => import(/* webpackChunkName: "about" */ '../views/DiekrechView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/FAQView.vue')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsletterView.vue')
  },
  {
    path: '/site-notice',
    name: 'site-notice',
    component: () => import(/* webpackChunkName: "about" */ '../views/SiteNoticeView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicyView.vue')
  },
  {
    path: '/agb',
    name: 'agb',
    component: () => import(/* webpackChunkName: "about" */ '../views/AGBView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
