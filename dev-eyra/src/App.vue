<template>
  <div id="app">
    <!-- Conditionally render Navbar -->
    <NavBar v-if="showLayout" />

    <!-- Main content area that grows to fill available space -->
    <main class="content">
      <router-view /> <!-- Render route components -->
    </main>

    <!-- Footer pinned to the bottom -->
    <AppFooter v-if="showLayout" class="footer" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'; // Vue Router hook for the current route
import { ref, watchEffect } from 'vue'; // Vue's reactive tools
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  },
  setup() {
    const route = useRoute();
    const showLayout = ref(true);

    // Watch route changes to control layout visibility
    watchEffect(() => {
      showLayout.value = route.path !== '/login'; // Hide layout on login
    });

    return {
      showLayout,
    };
  },
};
</script>

<style>
/* Flexbox layout for sticky footer */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
  margin: 0;
}

/* Main content fills available space */
.content {
  flex: 1;
  padding: 20px;
}

/* Ensure the footer spans the full width */
.footer {
  width: 100%;
}
</style>
