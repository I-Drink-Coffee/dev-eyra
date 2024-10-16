<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card p-4" style="width: 400px;">
        <h1 class="card-title text-center mb-4">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" id="email" class="form-control" placeholder="Enter your email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" placeholder="Enter your password" required />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </form>
        <p v-if="error" class="text-danger mt-3">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase'; // Import Firebase auth instance
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      async login() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push('/portfolio/profile'); // Redirect to profile after successful login
        } catch (err) {
          this.error = 'Login failed. Please check your credentials.';
        }
      },
    },
  };
  </script>
  