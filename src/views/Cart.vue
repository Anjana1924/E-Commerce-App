<script setup lang="ts">
import { cart } from '../store/cart'
</script>

<template>
  <div class="p-4 bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Cart</h1>

    <div v-if="cart.items.length === 0">
      Cart is empty
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="border p-2 mb-2">
        <h2>{{ item.title }}</h2>
        <p>${{ item.price }}</p>

        <button
          @click="cart.remove(item.id)"
          class="bg-red-500 text-white px-2 py-1 mt-2"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>