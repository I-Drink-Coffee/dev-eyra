<template>
    <div class="container my-5">
      <h1 class="text-center">Design Portfolio</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="design in designs" :key="design.id">
          <div class="card h-100">
            <img :src="design.image" class="card-img-top" alt="Design" />
            <div class="card-body">
              <h5 class="card-title">{{ design.title }}</h5>
              <p class="card-text">{{ design.description }}</p>
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
        designs: [
          { id: 1, title: "Web Design", description: "Modern website layout", image: "path_to_web_design.jpg" },
          { id: 2, title: "Logo Design", description: "Creative logo concepts", image: "path_to_logo_design.jpg" },
          { id: 3, title: "App UI", description: "Sleek mobile app interface", image: "path_to_app_ui.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles for design portfolio layout */
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  