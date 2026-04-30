import { reactive } from 'vue'
import type { Product } from '../types/product'

export const cart = reactive({
  items: [] as Product[],

  add(product: Product) {
    this.items.push(product)
  },

  remove(id: number) {
    this.items = this.items.filter(p => p.id !== id)
  }
})