<template>
  <div class="photo-page">
    <h1 class="page-title">Photo Gallery</h1>
    <div class="photo-grid">
      <PhotoCard 
        v-for="(photo, index) in photos" 
        :key="index" 
        :image="photo.image" 
        :alt="photo.alt" 
        :class="photo.size" 
      />
    </div>
  </div>
</template>

<script>
import PhotoCard from '../components/PhotoCard.vue'; // Import PhotoCard component

export default {
  name: 'PhotoPage',
  components: {
    PhotoCard,
  },
  data() {
    return {
      photos: [
        { image: require('../assets/pie.jpg'), alt: 'Photo 1', size: 'large' },
        { image: require('../assets/burger.jpg'), alt: 'Photo 2', size: 'medium' },
        { image: require('../assets/leaves.jpg'), alt: 'Photo 3', size: 'small' },
        { image: require('../assets/leaves2.jpg'), alt: 'Photo 4', size: 'large' },
        { image: require('../assets/leaves3.jpg'), alt: 'Photo 5', size: 'medium' },
        { image: require('../assets/gdd.jpg'), alt: 'Photo 6', size: 'small' },
        { image: require('../assets/gd2.jpg'), alt: 'Photo 7', size: 'large' },
        { image: require('../assets/pink.jpg'), alt: 'Photo 8', size: 'medium' },
        { image: require('../assets/pink2.jpg'), alt: 'Photo 9', size: 'small' },

      ],
    };
  },
};
</script>

<style scoped>
.photo-page {
  padding: 40px;
  text-align: center;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Add margins left and right to center the grid */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  padding: 10px;
  max-width: 1200px; /* Optional max width to prevent it from becoming too wide */
  margin: 0 auto; /* Center the grid horizontally */
}
  
/* Grid item size variations */
.large {
  grid-column: span 2;
  grid-row: span 2;
}

.medium {
  grid-column: span 2;
}

.small {
  grid-column: span 1;
}
</style>
