<template>
  <div class="design-page">
    <h1 class="page-title">Designs</h1>
    <div class="design-grid">
      <DesignCard
        v-for="(design, index) in designs"
        :key="index"
        :image="design.image"
        :title="design.title"
      />
    </div>
  </div>
</template>

<script>
import DesignCard from '../components/DesignCard.vue';

export default {
  name: 'DesignPage',
  components: {
    DesignCard,
  },
  data() {
    return {
      designs: [
        { image: require('../assets/monkebuild.jpg'), title: 'Minimal Logo Design' },
        { image: require('../assets/monkebuild.jpg'), title: 'Mobile App UI' },
        { image: require('../assets/monkebuild.jpg'), title: 'Modern Website Concept' },
      ],
    };
  },
};
</script>

<style scoped>
.design-page {
  padding: 40px;
  text-align: center;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
  padding: 10px;
}
</style>
