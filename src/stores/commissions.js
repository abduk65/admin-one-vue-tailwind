import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getRequest, postRequest, putRequest } from '@/stores/api'

export const useCommissionStore = defineStore('commission', () => {
  const data = ref([])
  const uri = 'commissions'

  const getCommission = getRequest({ data }, uri)
  const createCommission = (incomingData) => postRequest(incomingData, uri)
  const updateCommission = (payload) => putRequest(payload, uri)

  return { data, updateCommission, getCommission, createCommission }
})
