import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getRequest, postRequest } from './api'

export const useWorkOrderStore = defineStore('workOrderStore', () => {
  const loading = ref(false)
  const error = ref(null)
  const data = ref([])

  const getWorkOrders = getRequest({ data }, 'workOrder')
  const createWorkOrder = async (incoming) => postRequest(incoming, 'workOrder')

  return {
    getWorkOrders, loading, error, data, createWorkOrder
  }
})
