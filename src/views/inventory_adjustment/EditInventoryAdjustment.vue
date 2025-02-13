<script setup>
import { ref, onMounted } from 'vue'
import { useInventoryAdjustmentStore } from '@/stores/inventoryAdjustment'
import { useRouter, useRoute } from 'vue-router'
import CardBox from '@/components/cardbox/CardBox.vue'
// import TitleBar from '@/components/TitleBar.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import FormField from '@/components/form/FormField.vue'
import FormControl from '@/components/form/FormControl.vue'
import { useInventoryItemStore } from '@/stores/inventoryItem'

const router = useRouter()
const route = useRoute()
const store = useInventoryAdjustmentStore()
const inventoryItemStore = useInventoryItemStore()

const inventoryItems = ref([])
const form = ref({
  inventory_item_id: '',
  quantity: 0,
  adjustment_type: '',
  date: '',
  notes: ''
})

const loadInventoryItems = async () => {
  await inventoryItemStore.getInventoryItem
  inventoryItems.value = inventoryItemStore.data
}

const loadAdjustment = async () => {
  const adjustment = await store.fetchInventoryAdjustment(route.params.id)
  form.value = {
    ...adjustment,
    inventory_item_id: adjustment.inventory_item_id.toString()
  }
}

onMounted(async () => {
  await Promise.all([loadInventoryItems(), loadAdjustment()])
})

const submit = async () => {
  try {
    await store.updateInventoryAdjustment(route.params.id, form.value)
    router.push({ name: 'InventoryAdjustment' })
  } catch (error) {
    console.error('Failed to update inventory adjustment:', error)
  }
}
</script>

<template>

  <CardBox>
    <form @submit.prevent="submit">
      <FormField label="Inventory Item">
        <FormControl v-model="form.inventory_item_id" type="select">
          <option value="">Select an item</option>
          <option v-for="item in inventoryItems" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </FormControl>
      </FormField>

      <FormField label="Quantity">
        <FormControl v-model="form.quantity" type="number" placeholder="Enter quantity" />
      </FormField>

      <FormField label="Adjustment Type">
        <FormControl v-model="form.adjustment_type" type="select">
          <option value="">Select type</option>
          <option value="increase">Increase</option>
          <option value="decrease">Decrease</option>
        </FormControl>
      </FormField>

      <FormField label="Date">
        <FormControl v-model="form.date" type="date" />
      </FormField>

      <FormField label="Notes">
        <FormControl v-model="form.notes" type="textarea" placeholder="Enter notes" />
      </FormField>

      <div class="flex justify-end space-x-2">
        <BaseButton type="button" color="info" outline label="Cancel" @click="router.back()" />
        <BaseButton type="submit" color="info" label="Save" />
      </div>
    </form>
  </CardBox>
</template>
