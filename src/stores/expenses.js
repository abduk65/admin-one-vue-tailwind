import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getRequest, postRequest, putRequest } from '@/stores/api'

export const useExpensesStore = defineStore('expense', () => {
  const data = ref([])
  const uri = 'expenses'
  const getExpense = getRequest({ data }, uri)
  const updateExpense = (incomingData) => putRequest(incomingData, uri);
  const createExpense = (incomingData) => postRequest(incomingData, uri)
  return { data, getExpense, createExpense, updateExpense }
})
