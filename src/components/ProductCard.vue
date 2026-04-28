<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{ product: Product }>()
</script>

<template>
  <div class="border p-4 rounded shadow hover:scale-105 transition">
    <img :src="product.thumbnail" class="w-full h-40 object-cover" />
    <h2 class="font-bold">{{ product.title }}</h2>
    <p>${{ product.price }}</p>
    <router-link :to="'/product/' + product.id" class="text-blue-500">
      View Details
    </router-link>
  </div>
</template>