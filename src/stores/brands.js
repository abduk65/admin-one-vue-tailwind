import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosClient from '@/stores/axios'
import { getRequest, postRequest, deleteRequest, putRequest } from '@/stores/api'

export const useBrandStore = defineStore('brands_store', () => {

  const data = ref([])
  const uri = 'brands'
  const getData = getRequest({ data }, uri)
  console.log(data.value, 'ADDIS MENGED EYEMOKERKU NEW')
  const postData = (postData, postUrl) => postRequest(postData, postUrl)
  const putData = (putData, putUrl) => putRequest(putData, putUrl)
  const deleteData = (id) => deleteRequest(uri, id)
  return { getData, data, postData, deleteData, putData }
})
