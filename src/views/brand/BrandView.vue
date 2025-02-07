
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Tables" main>

      </SectionTitleLineWithButton>
      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>


      <CardBox class="mb-6" has-table>
        <AddRecordBtn label="Add New Brand" to="/addBrand"/>
        <TableSampleClients @delete="deleteRecord" @edit="editRecord" :columns="columns" :received="data" />
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiTableOff" title="Empty variation" />

      <NotificationBar color="danger" :icon="mdiTableOff">
        <b>Empty table.</b> When there's nothing to show
      </NotificationBar>

      <CardBox>
        <CardBoxComponentEmpty />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<style scoped>

</style>

<script setup>

import { mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CardBoxComponentEmpty from '@/components/CardBoxComponentEmpty.vue'
import AddRecordBtn from '@/components/RecordBtnComponent.vue'
import { onMounted, ref } from 'vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import { useBranchStore } from '@/stores/branches'
import { storeToRefs } from 'pinia'
import { useBrandStore } from '@/stores/brands'
import { useRoute, useRouter } from 'vue-router'

const dataStore = useBrandStore();
const { data } = storeToRefs(dataStore)
const router = useRouter()

onMounted(() => {
  dataStore.getData
});

const editRecord = (record) =>{
  router.push({name: "EditBrand", params: {id: record.original.id}})
}

const deleteRecord = (record) => {
  console.log('id', record.id, record.original)
  dataStore.deleteData(record.original.id)
}

const columns = [
  {
    "accessorKey": "name",
    "header": "Name"
  },
  {
    "accessorKey": "product_type.name",
    "header": "Type"
  },
  {
    "accessorKey": "created_at",
    "header": "Created"
  },
  {
    "accessorKey": "updated_at",
    "header": "Modified"
  },

]

</script>
