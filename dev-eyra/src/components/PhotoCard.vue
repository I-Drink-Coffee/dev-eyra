<template>
    <div :class="['photo-card', size]">
      <img :src="image" :alt="alt" class="photo-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhotoCard',
    props: {
      image: { type: String, required: true },
      alt: { type: String, required: true },
      size: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .photo-card {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .photo-card:hover {
    transform: scale(1.05);
  }
  
  .photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  