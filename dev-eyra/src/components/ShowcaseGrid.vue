<template>
    <div class="showcase-grid">
      <PortfolioCard
        v-for="(project, index) in projects"
        :key="index"
        :image="project.image"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </template>
  
  <script>
  import PortfolioCard from './PortfolioCard.vue';
  
  export default {
    name: 'ShowcaseGrid',
    components: {
      PortfolioCard,
    },
    data() {
      return {
        projects: [
          {
            image: require('../assets/monkebuild.jpg'),
            title: 'Project 1',
            description: 'This is a description of project 1.',
          },
          {
            image: require('../assets/monkebuild.jpg'),
            title: 'Project 2',
            description: 'This is a description of project 2.',
          },
          {
            image: require('../assets/monkebuild.jpg'),
            title: 'Project 3',
            description: 'This is a description of project 3.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

  </style>
  