<template>
    <div class="portfolio-card">
      <img :src="image" alt="Project Image" class="project-image" />
      <div class="project-details">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortfolioCard',
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .portfolio-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .portfolio-card:hover {
    transform: translateY(-5px);
  }
  
  .project-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .project-details {
    padding: 10px;
  }
  
  h3 {
    margin: 0 0 5px;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0;
    color: #555;
    font-size: 0.9rem;
  }
  </style>
  