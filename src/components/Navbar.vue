<template>
  <nav class="bg-blue-600 text-white p-4 flex justify-between items-center">
    
    
    <div class="text-xl font-bold">
      E-Commerce App
    </div>

    
    <div class="space-x-4">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/contact" class="hover:underline">Contact</router-link>
      <router-link to="/help" class="hover:underline">Help</router-link>
      <router-link to="/signin" class="hover:underline">Sign In</router-link>
      <router-link to="/signup" class="bg-white text-blue-600 px-3 py-1 rounded">
        Sign Up
      </router-link>
    </div>

  </nav>
</template>