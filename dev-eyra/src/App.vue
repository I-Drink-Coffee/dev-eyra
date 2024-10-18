<template>
  <div id="app">
    <NavBar v-if="showLayout" />

    <!-- Transition wrapper for faster smooth animation -->
    <transition name="drawer-lux" mode="out-in">
      <router-view :key="$route.fullPath" class="content" />
    </transition>

    <AppFooter v-if="showLayout" class="footer" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
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
/* Flexbox layout to stretch the content */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  overflow: hidden; /* Prevents page shifts during transitions */
}

.content {
  flex: 1;
  padding: 20px;
  position: relative; /* Ensures smooth content transition */
  z-index: 1;
}

.footer {
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px 0;
  text-align: center;
}

/* Faster luxurious transition */

/* Active state for sliding with refined easing */
.drawer-lux-enter-active,
.drawer-lux-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

/* Enter: New page starts above with no opacity */
.drawer-lux-enter {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  filter: blur(4px);
}

/* Enter To: New page finishes in position with full opacity */
.drawer-lux-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* Leave: Old page starts in place */
.drawer-lux-leave {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* Leave To: Old page slides down and fades out */
.drawer-lux-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.98);
  filter: blur(4px);
}
</style>
