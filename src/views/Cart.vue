<script setup lang="ts">
import { cart } from '../store/cart'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back() // go to previous page
}

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price, 0)
)
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
        <div class="mt-4 text-xl font-bold">
    Total: ${{ total.toFixed(2) }}
  </div>
  <div class="mt-6 flex justify-between items-center">

  

  <!-- 💳 Checkout Button -->
  <button 
    class="bg-blue-600 text-white px-4 py-2 rounded ml-auto"
  >
    Checkout
  </button>

</div>

</div>
<button 
    @click="goBack"
    class="bg-gray-500 text-white px-4 py-2 rounded"
  >
    ← Back
  </button>
    </div>
  
</template>