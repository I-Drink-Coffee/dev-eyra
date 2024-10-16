<template>
    <div>
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <textarea v-model="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        console.log(`Message from ${this.name}: ${this.message}`);
      },
    },
  };
  </script>
  