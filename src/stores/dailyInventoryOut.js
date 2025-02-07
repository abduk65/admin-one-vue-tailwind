import { ref } from "vue";
import { defineStore } from "pinia";
import { getRequest, postRequest } from "@/stores/api";

export const useDailyInventoryOut = defineStore('daily_inventory_out', () => {
  const data = ref([])
  const uri = 'dailyInventoryOut'
  const getDailyInventoryOut = getRequest({ data }, uri)
  const createDailyInventoryOut = (postData) => postRequest(postData, uri)
  return { getDailyInventoryOut, data, createDailyInventoryOut }
})
