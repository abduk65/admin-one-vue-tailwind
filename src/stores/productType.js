import { defineStore } from 'pinia'
import { getRequest, postRequest, putRequest } from '@/stores/api'
import { ref } from 'vue'

export const useProductTypeStore = defineStore("product_type", () => {
  const data = ref([])

  const uri = "productType"
  const getProductType = getRequest({ data }, uri)
  const createProductType = (incoming) => postRequest(incoming, uri)
  const updateProductType = (incoming) => putRequest(incoming, uri)
  
  return { data, getProductType, createProductType, updateProductType }
})
