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
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/diekrech',
    name: 'diekrech',
    component: () => import('../views/DiekrechView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FAQView.vue')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import('../views/NewsletterView.vue')
  },
  {
    path: '/site-notice',
    name: 'site-notice',
    component: () => import('../views/SiteNoticeView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
  {
    path: '/agb',
    name: 'agb',
    component: () => import('../views/AGBView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/AHomeView.vue'),
  },
  {
    path: '/admin/products',
    name: 'admin-products',
    component: () => import('../views/admin/AProductsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
