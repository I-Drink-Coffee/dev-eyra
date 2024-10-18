<template>
  <button @click="logout" class="logout-button">
    Logout
  </button>
</template>

<script>
import { auth } from '../firebase'; // Firebase auth instance
import { signOut } from 'firebase/auth'; // Firebase signOut function

export default {
  name: 'LogoutButton',
  methods: {
    async logout() {
      try {
        await signOut(auth); // Sign out the user
        sessionStorage.clear(); // Clear session storage
        this.$router.push('/login'); // Redirect to login page
      } catch (error) {
        console.error('Logout failed:', error); // Log errors if any
      }
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
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
}

.logout-button:hover {
  color: #007bff;
  transform: scale(1.05);
}

.logout-button:focus {
  outline: none;
}
</style>
