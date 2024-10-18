<template>
    <div class="creative-card">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreativeCard',
    props: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .creative-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: left;
    transition: transform 0.2s ease-in-out;
  }
  
  .creative-card:hover {
    transform: scale(1.05);
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 1rem;
    color: #555;
  }
  </style>
  