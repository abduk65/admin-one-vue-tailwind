import { defineStore } from 'pinia'
import { getRequest, postRequest } from '@/stores/api'
import { ref } from 'vue'

export const useStandardBatchVarietyStore = defineStore("standard_batch_variety", () => {
  const data = ref([])

  const uri = "standardBatchVariety"
  const getStandardBatchVariety = getRequest({ data }, uri)

  const createStandardBatchVariety = (incoming) => postRequest(incoming, uri)

  return { data, getStandardBatchVariety, createStandardBatchVariety }

})
