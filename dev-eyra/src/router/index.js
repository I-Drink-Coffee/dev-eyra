import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ProfilePage from '../views/ProfilePage.vue';
import DesignPage from '../views/DesignPage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';
import PhotoPage from '../views/PhotoPage.vue';

// Define the routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/portfolio/showcase', component: PortfolioShowcase },
  { path: '/portfolio/profile', component: ProfilePage, meta: { requiresAuth: true } },
  { path: '/portfolio/design', component: DesignPage },
  { path: '/portfolio/contact', component: ContactPage },
  { path: '/portfolio/creative', component: CreativePage },
  { path: '/portfolio/photos', component: PhotoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to manage layout visibility and session validation
router.beforeEach((to, from, next) => {
  const visitorSession = sessionStorage.getItem('visitor-session');
  const userSession = sessionStorage.getItem('session');

  // Layout visibility management
  if (to.path === '/login') {
    document.body.classList.add('no-layout'); // Hide layout for login
  } else {
    document.body.classList.remove('no-layout'); // Show layout for other pages
  }

  // Route guard: Prevent access to protected pages if not authenticated
  if (to.meta.requiresAuth && !userSession) {
    next('/login'); // Redirect to login if user session is missing
  } else if (to.path.startsWith('/portfolio') && !userSession && !visitorSession) {
    next('/login'); // Redirect visitors if no valid session is found
  } else {
    next(); // Allow navigation if session exists or no guard is needed
  }
});

export default router;
