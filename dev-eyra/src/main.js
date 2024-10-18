import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import CSS dependencies
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Optional Bootstrap JS

// Import global CSS animations for transitions
import './assets/transition.css'; 

// Import Firebase configuration
import './firebase'; 

// Create and mount the Vue app with router
const app = createApp(App);
app.use(router);
app.mount('#app');
