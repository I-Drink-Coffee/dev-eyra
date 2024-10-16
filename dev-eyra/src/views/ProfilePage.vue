<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card p-4 mt-4">
          <div class="d-flex justify-content-center mb-4">
            <!-- Correct image source binding -->
            <img :src="profilePhoto" class="rounded-circle" alt="Profile Photo" width="150" height="150" />
          </div>
          <h2 class="text-center">{{ bio }}</h2>
          <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item" v-for="link in socialMediaLinks" :key="link">{{ link }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Use require() to resolve the path to the image
      profilePhoto: require('../assets/monkey.jpg'),
      bio: 'This is a short bio.',
      socialMediaLinks: ['Twitter', 'GitHub', 'LinkedIn'],
    };
  },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
