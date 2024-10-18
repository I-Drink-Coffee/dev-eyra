<template>
  <div class="contact-page">
    <h1 class="page-title">Get in Touch</h1>
    <div class="contact-details">
      <div class="contact-item">
        <i class="fas fa-envelope contact-icon"></i>
        <span>Email: <a href="johnangelodeveyra70@gmail.com">youremail@example.com</a></span>
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
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
.contact-page {
  padding: 40px;
  text-align: center;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Styling for contact details */
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
}

.contact-icon {
  font-size: 1.5rem;
  color: #007bff;
}

/* Link styling */
a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #0056b3;
}
</style>
