<template>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container" :style="containerStyle">
        <!-- Brand (acts as Profile link) -->
        <router-link to="/portfolio/profile" class="navbar-brand" :style="brandStyle">Dev-eyra</router-link>
  
        <!-- Burger button (only visible on smaller screens) -->
        <button class="navbar-toggler d-lg-none" type="button" @click="toggleDrawer">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Full navbar links for larger screens (hidden on small screens) -->
        <div class="collapse navbar-collapse d-none d-lg-flex">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/portfolio/showcase" class="nav-link">Showcase</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/design" class="nav-link">Design</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/photos" class="nav-link">Photos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/creative" class="nav-link">Creative</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
          <!-- Minimalistic Logout Button -->
          <LogoutButton />
        </div>
  
        <!-- Right Drawer (visible on smaller screens) -->
        <div :class="['drawer', { 'drawer-open': isDrawerOpen }]">
          <button class="close-btn" @click="closeDrawer">X</button>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/portfolio/showcase" class="nav-link" @click="closeDrawer">Showcase</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/design" class="nav-link" @click="closeDrawer">Design</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/photos" class="nav-link" @click="closeDrawer">Photos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/creative" class="nav-link" @click="closeDrawer">Creative</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio/contact" class="nav-link" @click="closeDrawer">Contact</router-link>
            </li>
            <!-- Minimalistic Logout Button in Drawer -->
            <li class="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import LogoutButton from './LogoutButton.vue'; // Import the Logout Button component
  
  export default {
    components: {
      LogoutButton, // Register the component
    },
    data() {
      return {
        isDrawerOpen: false,
        brandMarginTop: '0px',
        brandMarginLeft: '0px',
        containerMaxWidth: '1140px',
      };
    },
    computed: {
      brandStyle() {
        return {
          marginTop: this.brandMarginTop,
          marginLeft: this.brandMarginLeft,
        };
      },
      containerStyle() {
        return {
          maxWidth: this.containerMaxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        };
      },
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
      closeDrawer() {
        this.isDrawerOpen = false;
      },
      handleResize() {
        if (window.innerWidth > 992) {
          this.closeDrawer(); // Close drawer on larger screens
        }
      },
    },
    mounted() {
      window.addEventListener('resize', this.handleResize); // Listen for resize events
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize); // Clean up when component is destroyed
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Styling */
  .navbar {
    background-color: #f8f9fa; /* Light background for minimalistic feel */
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0; /* Subtle border for separation */
  }
  
  .navbar-brand {
    font-size: 1.25rem;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .navbar-brand:hover {
    color: #007bff; /* Slight hover effect */
  }
  
  .navbar-nav .nav-item .nav-link {
    font-size: 1rem;
    color: #333;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
  }
  
  .navbar-nav .nav-item .nav-link:hover {
    color: #007bff; /* Subtle hover effect for links */
  }
  
  /* Drawer Styling */
  .drawer {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 1050;
    padding-top: 2rem;
  }
  
  .drawer-open {
    right: 0;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
  }
  
  .close-btn:hover {
    color: #ff0000;
  }
  
  /* Minimalistic Logout Button */
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
  
  /* Responsive behavior for the drawer */
  @media (max-width: 991px) {
    .navbar-toggler {
      display: inline-block;
    }
  
    .navbar-collapse {
      display: none !important;
    }
  }
  </style>
  