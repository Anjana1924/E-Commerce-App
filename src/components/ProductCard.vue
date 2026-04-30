<script setup lang="ts">
import type { Product } from '../types/product'
import { cart } from '../store/cart'

// ✅ assign props to a variable
const props = defineProps<{ product: Product }>()

const addToCart = () => {
  cart.add(props.product) // ✅ use props.product
}
</script>

<template>
  <div class="border p-4 rounded shadow hover:scale-105 transition">
    <img :src="props.product.thumbnail" class="w-full h-40 object-cover" />
    <h2 class="font-bold">{{ props.product.title }}</h2>
    <p>${{ props.product.price }}</p>

    <button @click="addToCart" class="bg-green-500 text-white px-2 py-1 mt-2">
      Add to Cart
    </button>

    <router-link :to="'/product/' + props.product.id" class="text-blue-500 block mt-2">
      View Details
    </router-link>
  </div>
</template>