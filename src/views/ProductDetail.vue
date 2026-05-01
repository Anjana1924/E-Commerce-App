<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Product } from '../types/product'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const route = useRoute()
const product = ref<Product | null>(null)

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
  product.value = await res.json()
})
</script>

<template>
  <div v-if="product" class="p-4 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
    <img :src="product.thumbnail" class="w-64" />
    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p class="text-blue-600 text-xl">${{ product.price }}</p>
    <p class="text-yellow-400">
  ⭐ {{ product.rating }}
</p>
<button 
  @click="goBack"
  class="mb-4 bg-gray-500 text-white px-4 py-2 rounded"
>
  ← Back
</button>
  </div>
</template>