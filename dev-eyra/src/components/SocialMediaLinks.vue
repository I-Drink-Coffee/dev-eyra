<template>
    <div class="social-links">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="link.icon"></i>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialMediaLinks',
    props: {
      socialLinks: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-links i {
    font-size: 1.2rem;
    color: #333;
    transition: color 0.3s;
  }
  
  .social-links i:hover {
    color: #007bff;
  }
  </style>
  