<template>
    <div class="details-section">
      <ul>
        <li><strong>Email:</strong> {{ email }}</li>
        <li><strong>Phone:</strong> {{ phone }}</li>
        <li><strong>Location:</strong> {{ location }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: 'johnangelodeveyra70@gmail.com',
        phone: '+639292881247',
        location: 'Manila, Philippines',
      };
    },
  };
  </script>
  
  <style scoped>
  .details-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 10px 0;
    font-size: 0.9rem;
    color: #555;
  }
  </style>
  