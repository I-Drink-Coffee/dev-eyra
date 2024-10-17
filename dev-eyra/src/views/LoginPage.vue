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

      <!-- Alert for Success or Error -->
      <div v-if="alertMessage" :class="['alert', alertType]">
        {{ alertMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.alertMessage = 'Login successful!';
          this.alertType = 'alert-success';
          setTimeout(() => {
            this.$router.push('/portfolio/profile'); // Redirect on success
          }, 1500);
        })
        .catch((error) => {
          this.alertMessage = 'Login failed: ' + error.message;
          this.alertType = 'alert-error';
          setTimeout(() => {
            this.alertMessage = ''; // Clear after 3 seconds
          }, 3000);
        });
    },
  },
};
</script>

<style scoped>
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fullscreen setup */
html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* Flexbox to center the login form */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: #ffffff;
}

/* Login form styling */
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Form heading */
h2 {
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}

/* Input field styling */
.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
}

.input-field:focus {
  border-color: #007bff;
}

/* Login button */
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

/* Alert messages */
.alert {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  text-align: center;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
