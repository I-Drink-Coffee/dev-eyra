<template>
    <button class="logout-button" @click="logout">Logout</button>
  </template>
  
  <script>
  import { getAuth, signOut } from 'firebase/auth';
  
  export default {
    name: 'LogoutButton',
    methods: {
      logout() {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // Redirect to login page after logout
            this.$router.push('/login');
          })
          .catch((error) => {
            console.error('Logout failed:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .logout-button {
    background: none;
    border: none;
    color: #333;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .logout-button:hover {
    color: #007bff; /* Subtle hover effect */
  }
  </style>
  