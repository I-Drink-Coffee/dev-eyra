<template>
  <div class="contact-page">
    <h1 class="page-title">Get in Touch</h1>

    <!-- Contact Details Section -->
    <div class="contact-details">
      <div class="contact-item">
        <i class="fas fa-envelope contact-icon"></i>
        <span>Email: <a href="mailto:johnangelodeveyra70@gmail.com">johnangelodeveyra70@gmail.com</a></span>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone contact-icon"></i>
        <span>Phone: +63 929 288 1247</span>
      </div>
      <div class="contact-item">
        <i class="fab fa-github contact-icon"></i>
        <span>
          GitHub: <a href="https://github.com/I-Drink-Coffee" target="_blank">github.com/I-Drink-Coffee</a>
        </span>
      </div>
      <div class="contact-item">
        <i class="fab fa-linkedin contact-icon"></i>
        <span>
          LinkedIn: <a href="https://www.linkedin.com/in/dev-eyra" target="_blank">linkedin.com/in/dev-eyra</a>
        </span>
      </div>
    </div>

    <!-- Contact Form Section -->
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Your Name"
          required
        />
      </div>

      <div class="form-group">
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Your Email"
          required
        />
      </div>

      <div class="form-group">
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>

    <!-- Success Message -->
    <transition name="fade">
      <div v-if="isSubmitted" class="thank-you">
        <p>Thank you for reaching out! We'll get back to you soon.</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      isSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log('Message Sent:', this.form);
      this.isSubmitted = true;
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
/* Main Page Styling */
.contact-page {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(to right, #f7f8fc, #e6e9f0);
  min-height: 100vh;
}

/* Title Styling */
.page-title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #333;
}

/* Contact Details Section */
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
}

.contact-icon {
  font-size: 2rem;
  color: #4a90e2;
}

/* Form Styling */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

input,
textarea {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

input:focus,
textarea:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.6);
}

/* Submit Button */
.submit-button {
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #357abd;
}

/* Success Message */
.thank-you {
  margin-top: 20px;
  font-size: 1.4rem;
  color: #28a745;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
