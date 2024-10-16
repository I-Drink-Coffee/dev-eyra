<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Conditionally render NavBar based on the current route -->
    <NavBar v-if="!isLoginPage" />
    <main class="flex-grow-1 container py-4">
      <router-view /> <!-- Render the routed page here -->
    </main>
    <AppFooter v-if="!isLoginPage" /> <!-- Optionally hide footer on login page too -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue'; // Import footer component

export default {
  components: {
    NavBar,
    AppFooter,
  },
  computed: {
    // Check if the current route is the login page
    isLoginPage() {
      return this.$route.path === '/login';
    },
  },
};
</script>

<style>
/* You can add any custom styles here, or keep them in separate files */
</style>
