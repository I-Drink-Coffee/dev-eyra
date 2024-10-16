<template>
    <div class="container my-5">
      <h1 class="text-center">Photo Gallery</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="photo in photos" :key="photo.id">
          <div class="card h-100">
            <img :src="photo.url" class="card-img-top" alt="Photo" />
            <div class="card-body">
              <h5 class="card-title">{{ photo.title }}</h5>
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
        photos: [
          { id: 1, title: "Sunset", url: "path_to_sunset_photo.jpg" },
          { id: 2, title: "Mountain", url: "path_to_mountain_photo.jpg" },
          { id: 3, title: "Beach", url: "path_to_beach_photo.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles for photo gallery layout */
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  