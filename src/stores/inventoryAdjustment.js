import { defineStore } from 'pinia'
import axios from 'axios'

export const useInventoryAdjustmentStore = defineStore('inventoryAdjustment', {
  state: () => ({
    inventoryAdjustments: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchInventoryAdjustments() {
      this.loading = true
      try {
        const response = await axios.get('/api/inventoryAdjustments')
        this.inventoryAdjustments = response.data
        return response.data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchInventoryAdjustment(id) {
      this.loading = true
      try {
        const response = await axios.get(`/api/inventory-adjustments/${id}`)
        return response.data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async createInventoryAdjustment(data) {
      this.loading = true
      try {
        const response = await axios.post('/api/inventory-adjustments', data)
        this.inventoryAdjustments.push(response.data)
        return response.data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateInventoryAdjustment(id, data) {
      this.loading = true
      try {
        const response = await axios.put(`/api/inventory-adjustments/${id}`, data)
        const index = this.inventoryAdjustments.findIndex(item => item.id === id)
        if (index !== -1) {
          this.inventoryAdjustments[index] = response.data
        }
        return response.data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteInventoryAdjustment(id) {
      this.loading = true
      try {
        await axios.delete(`/api/inventory-adjustments/${id}`)
        this.inventoryAdjustments = this.inventoryAdjustments.filter(item => item.id !== id)
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
})
