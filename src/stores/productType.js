import { defineStore } from 'pinia'
import { getRequest } from '@/stores/api'
import { ref } from 'vue'

export const useProductTypeStore = defineStore("product_type", ()=>{
  const data = ref([])

  const uri = "productType"
  const getProductType = getRequest({data}, uri )
  return {data, getProductType}
})
