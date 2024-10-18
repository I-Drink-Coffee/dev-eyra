<template>
  <div class="design-card">
    <img :src="image" alt="Design Image" class="design-image" />
    <h3 class="design-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'DesignCard',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
  },
};
</script>

<style scoped>
.design-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.design-card:hover {
  transform: scale(1.02);
}

.design-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.design-title {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}
</style>
