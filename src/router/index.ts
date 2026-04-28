import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})