<template>
 <LayoutAuthenticated>
   <SectionMain>
     <FormField label="Add Commission Recipient">
       <FormControl ></FormControl>
     </FormField>
   </SectionMain>
 </LayoutAuthenticated>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import FormControl from '@/components/FormControl.vue'
import FormField from '@/components/FormField.vue'

// Form state and errors
const form = reactive({
  name: '',
  age: '',
  gender: '',
  subscribe: false,
  feedback: ''
});

const errors = reactive({
  name: null,
  age: null,
  gender: null,
  subscribe: null,
  feedback: null
});

const isSubmitting = ref(false);
const flashMessage = ref(null);

// Basic form validation
const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(key => (errors[key] = null));

  if (!form.name) {
    errors.name = 'Name is required.';
    isValid = false;
  }

  if (!form.age) {
    errors.age = 'Age is required.';
    isValid = false;
  }

  if (!form.gender) {
    errors.gender = 'Gender is required.';
    isValid = false;
  }

  if (!form.feedback) {
    errors.feedback = 'Feedback is required.';
    isValid = false;
  }

  return isValid;
};

// Submit form handler with flash messages
const submitForm = async () => {
  if (!validateForm()) {
    flashMessage.value = { type: 'error', message: 'Please fix the errors in the form.' };
    return;
  }

  isSubmitting.value = true;
  flashMessage.value = null;

  try {
    const response = await axios.post('/api/submit', form);

    flashMessage.value = { type: 'success', message: 'Form submitted successfully!' };
    console.log('Server Response:', response.data);

    // Clear form and errors after successful submission
    Object.keys(form).forEach(key => (form[key] = ''));
  } catch (error) {
    if (error.response && error.response.data.errors) {
      Object.keys(error.response.data.errors).forEach(key => {
        errors[key] = error.response.data.errors[key][0];
      });
    }
    flashMessage.value = { type: 'error', message: 'An error occurred while submitting the form.' };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.error-text {
  color: red;
  font-size: 0.875rem;
}

.flash-success {
  background-color: #d4edda;
  color: #155724;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #c3e6cb;
}

.flash-error {
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
}
</style>
