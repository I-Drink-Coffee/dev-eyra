<template>
  <div class="login-page">
    <form class="login-form" @submit.prevent="login">
      <h2>Login</h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="input-field"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="input-field"
      />
      <button type="submit" class="login-button">Login</button>

      <div v-if="alertMessage" :class="['alert', alertType]">
        {{ alertMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase'; // Import Firebase auth instance
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import auth function

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      alertMessage: '',
      alertType: '', // 'alert-success' or 'alert-error'
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log('User logged in:', userCredential.user);

        // Store session in sessionStorage or handle redirection
        sessionStorage.setItem('session', JSON.stringify({ role: 'user', timestamp: Date.now() }));
        this.alertMessage = 'Login successful!';
        this.alertType = 'alert-success';

        // Redirect to the profile or dashboard page
        this.$router.push('/portfolio/profile');
      } catch (error) {
        console.error('Login failed:', error);
        this.alertMessage = 'Invalid login credentials.';
        this.alertType = 'alert-error';
        setTimeout(() => (this.alertMessage = ''), 3000); // Clear alert after 3s
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.alert {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
