<template>
    <footer class="bg-light py-3 mt-auto">
      <div class="container text-center">
        <p class="mb-0">© 2024 Your Portfolio. All rights reserved.</p>
        <div class="mt-2">
          <a href="https://github.com/I-Drink-Coffee" target="_blank" class="text-dark me-3">
            <i class="bi bi-github"></i> GitHub
          </a>
          <a href="www.linkedin.com/in/dev-eyra" target="_blank" class="text-dark">
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #f8f9fa; /* Light gray background */
    color: #6c757d; /* Muted text color */
  }
  
  footer a {
    text-decoration: none;
  }
  
  footer a:hover {
    color: #0056b3; /* Darker blue on hover */
  }
  </style>
  