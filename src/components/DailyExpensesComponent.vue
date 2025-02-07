<template>
  <div>
    <div v-for="(expense, index) in expenses" :key="index" class="mb-3">
      <input
        v-model="expense.name"
        class="bg-gray-800"
        placeholder="Expense name"
        @input="updateExpense(index, 'name', $event.target.value)"
      />
      <input
        v-model="expense.amount"
        type="number"
        class="bg-gray-800"
        placeholder="Amount"
        @input="updateExpense(index, 'amount', $event.target.value)"
      />
      <BaseButton :id="index" @click="removeExpense(index)" class="ml-8" :color="randomHex" :icon="mdiCloseBoxMultipleOutline" />
    </div>
    <BaseButton label="Add A new Expense" class="mr-4" @click="addExpense"></BaseButton>
    <BaseButton label="Calculate Expense" @click="calculateExpense"></BaseButton>
  </div>
</template>

<script setup>
import { isRef, ref, unref, watch } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { mdiCloseCircle } from '@mdi/js/commonjs/mdi'
import { mdiCloseBoxMultipleOutline } from '@mdi/js/commonjs/mdi'

const  emit = defineEmits(['expenses-updated'])
const initialExpense = { name: '', amount: '' }
const expenses = ref([initialExpense]);
const removeExpense = (index) => {
  expenses.value.splice(index, 1)
};

const randomHex = ()=>'#'+Math.floor(Math.random()*(16**6)).toString(16);

watch(
  expenses, // Directly watch the expenses ref
  (newVal, oldVal) => {
    console.log('Expenses changed: ', newVal); // Log the updated array
  },
  { deep: true } // Add deep: true to watch changes within the array itself
);
// watch(()=>expenses.value, ()=>{console.log(expenses.value)});
const addExpense = () => {
  expenses.value.push({ name: '', amount: '' });
  emit('expenses-updated', expenses.value);
};

const updateExpense = (index, field, value) => {
  expenses.value[index][field] = value;
  emit('expenses-updated', expenses.value);
};

const calculateExpense = () => {
  console.log(expenses.value);
}
</script>

<style scoped>
/* Add styling for your inputs and buttons */
</style>
