import { defineStore } from 'pinia'
import axiosClient from './axios'
import { getRequest, postRequest } from './api'
import { ref } from 'vue'


export const useCashCollectedStore = defineStore('cashCollected', () => {

  const data = ref([])

  const getCashCollected = getRequest({ data }, 'cashCollected')

  const createCashCollected = (incoming) => postRequest(incoming, 'cashCollected')

  return {
    data,
    getCashCollected,
    createCashCollected
  }

})
