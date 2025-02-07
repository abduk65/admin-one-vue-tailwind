import { getRequest, postRequest } from './api'
import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUnitStore = defineStore('unit', () => {
  const units = ref([])
  const loading = ref(false)
  const error = ref(null)

  const url = 'units'
  const data = ref([])

  const getUnits = getRequest({ data }, url)

  const createUnit = (incoming) => postRequest(incoming, url)

  return { units, loading, error, getUnits, data, createUnit }
})
