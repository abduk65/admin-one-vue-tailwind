import { defineStore } from 'pinia'
import { getRequest, postRequest } from '@/stores/api'
import { ref } from 'vue'

export const useInventoryItemStore = defineStore("inventory_item", () => {
  const data = ref([])
  const uri = "inventoryItem"
  const getInventoryItem = getRequest({ data }, uri)
  const createInventoryItem = (incoming) => postRequest(incoming, uri)
  return { data, getInventoryItem, createInventoryItem }
})
