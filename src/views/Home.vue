<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import type { Product } from '../types/product'

const products = ref<Product[]>([])
const search = ref("")

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

const filteredProducts = computed(() =>
  products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
<div class="p-4 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <input v-model="search" placeholder="Search....." class="border p-2 mb-4 w-full rounded-lg" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
    </div>
  </div>
</template>