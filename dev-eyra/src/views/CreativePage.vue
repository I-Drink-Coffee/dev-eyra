<template>
  <div class="creative-page">
    <h1 class="page-title">Creative Works</h1>
    <div class="creative-grid">
      <CreativeCard 
        v-for="(item, index) in creativeItems" 
        :key="index" 
        :title="item.title" 
        :description="item.description" 
      />
    </div>
  </div>
</template>

<script>
import CreativeCard from '../components/CreativeCard.vue'; // Import CreativeCard component

export default {
  name: 'CreativePage',
  components: {
    CreativeCard,
  },
  data() {
    return {
      creativeItems: [
        { 
          title: 'Photography', 
          description: 'A personal collection of nature and street photography.' 
        },
        { 
          title: 'Blog', 
          description: 'Thoughts on design, development, and personal growth.' 
        },
        { 
          title: 'Testimonials', 
          description: 'What people say about my work and creative pursuits.' 
        },
        { 
          title: 'Mini Apps', 
          description: 'A collection of small interactive web apps and tools.' 
        },
      ],
    };
  },
};
</script>

<style scoped>
.creative-page {
  padding: 40px;
  text-align: center;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Grid layout for creative content */
.creative-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
