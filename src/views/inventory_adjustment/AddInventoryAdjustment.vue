<script setup>
import { ref } from 'vue'
import { useInventoryAdjustmentStore } from '@/stores/inventoryAdjustment'
import { useRouter } from 'vue-router'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import { useInventoryItemStore } from '@/stores/inventoryItem'

const router = useRouter()
const store = useInventoryAdjustmentStore()
const inventoryItemStore = useInventoryItemStore()

const inventoryItems = ref([])
const form = ref({
  inventory_item_id: '',
  quantity: 0,
  adjustment_type: '',
  date: new Date().toISOString().split('T')[0],
  notes: ''
})

const loadInventoryItems = async () => {
  inventoryItems.value = await inventoryItemStore.fetchInventoryItems()
}

loadInventoryItems()

const submit = async () => {
  try {
    await store.createInventoryAdjustment(form.value)
    router.push({ name: 'InventoryAdjustment' })
  } catch (error) {
    console.error('Failed to create inventory adjustment:', error)
  }
}
</script>

<template>
  <TitleBar :title-stack="['Inventory Management', 'Add Inventory Adjustment']" />

  <CardComponent>
    <form @submit.prevent="submit">
      <FormField label="Inventory Item">
        <FormControl v-model="form.inventory_item_id" type="select">
          <option value="">Select an item</option>
          <option
            v-for="item in inventoryItems"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </FormControl>
      </FormField>

      <FormField label="Quantity">
        <FormControl
          v-model="form.quantity"
          type="number"
          placeholder="Enter quantity"
        />
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
        <FormControl
          v-model="form.notes"
          type="textarea"
          placeholder="Enter notes"
        />
      </FormField>

      <div class="flex justify-end space-x-2">
        <BaseButton
          type="button"
          color="info"
          outline
          label="Cancel"
          @click="router.back()"
        />
        <BaseButton type="submit" color="info" label="Save" />
      </div>
    </form>
  </CardComponent>
</template>
