<template>
    <div class="container">
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="project.image" class="card-img-top" alt="Project Image" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Project 1', description: 'Description of project 1', image: 'project1.jpg' },
          { id: 2, title: 'Project 2', description: 'Description of project 2', image: 'project2.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  