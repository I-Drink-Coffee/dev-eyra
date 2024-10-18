<template>
  <div class="portfolio-showcase">
    <h1>My Portfolio</h1>
    <ShowcaseGrid />
  </div>
</template>

<script>
import ShowcaseGrid from '../components/ShowcaseGrid.vue';

export default {
  name: 'PortfolioShowcase',
  components: {
    ShowcaseGrid,
  },
};
</script>

<style scoped>
.portfolio-showcase {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}
</style>
