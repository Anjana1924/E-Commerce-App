<script setup>
import { cart } from '../store/cart'
import { ref, onMounted } from 'vue'

const dark = ref(false)

// load saved theme
onMounted(() => {
  const saved = localStorage.getItem('theme')
  dark.value = saved === 'dark'

  document.documentElement.classList.toggle('dark', dark.value)
})

function toggleDark() {
  dark.value = !dark.value

  document.documentElement.classList.toggle('dark', dark.value)

  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
}
</script>

<template>
  <nav class="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
    
    <div class="text-xl font-bold">
      E-Commerce App
    </div>

    <div class="space-x-4 flex items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/help">Help</router-link>
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/signup" class="bg-white text-blue-600 px-3 py-1 rounded">
        Sign Up
      </router-link>

      <router-link to="/cart">
        🛒 Cart ({{ cart.items.length }})
      </router-link>

      <button 
        @click="toggleDark" 
        class="bg-white text-black dark:bg-gray-700 dark:text-white px-2 py-1 rounded"
      >
        {{ dark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>

  </nav>
</template>