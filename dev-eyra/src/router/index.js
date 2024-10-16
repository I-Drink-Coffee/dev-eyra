import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';
import PhotoPage from '../views/PhotoPage.vue';  // Import the new Photo page
import DesignPage from '../views/DesignPage.vue'; // Import the new Design page


const routes = [
  { path: '/login', component: LoginPage },
  {
    path: '/portfolio',
    children: [
      { path: 'profile', component: ProfilePage },
      { path: 'showcase', component: PortfolioShowcase },
      { path: 'contact', component: ContactPage },
      { path: 'creative', component: CreativePage },
      { path: 'photos', component: PhotoPage },     // Add route for Photo page
      { path: 'design', component: DesignPage },    // Add route for Design page
    ],
  },
  { path: '/:catchAll(.*)', redirect: '/login' }, // Redirect unknown paths to login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
