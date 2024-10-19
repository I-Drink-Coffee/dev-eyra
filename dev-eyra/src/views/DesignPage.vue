<template>
  <div class="design-page">
    <h1 class="page-title">Design Showcase</h1>

    <!-- Album Cards -->
    <div class="grid">
      <div class="album-card" @click="openModal('myLogos')">
        <h2 class="album-title">My Logos</h2>
        <div class="thumbnail-grid">
          <img
            v-for="(image, index) in myLogos.slice(0, 2)" 
            :key="'my-logo-thumb-' + index" 
            :src="image" 
            class="thumbnail" 
            :alt="'Thumbnail ' + (index + 1)" 
          />
        </div>
      </div>

      <div class="album-card" @click="openModal('companyLogos')">
        <h2 class="album-title">Devxotle Logos</h2>
        <div class="thumbnail-grid">
          <img
            v-for="(image, index) in companyLogos.slice(0, 2)" 
            :key="'company-logo-thumb-' + index" 
            :src="image" 
            class="thumbnail" 
            :alt="'Thumbnail ' + (index + 1)" 
          />
        </div>
      </div>
    </div>

    <!-- Modal Window -->
    <transition name="fade">
      <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-grid">
            <img 
              v-for="(image, index) in selectedAlbum" 
              :key="index" 
              :src="image" 
              class="modal-image" 
              :alt="'Image ' + (index + 1)" 
              @click="zoomImage(image)"
            />
          </div>
          <button class="close-button" @click="closeModal">Close</button>
        </div>
      </div>
    </transition>

    <!-- Zoomed Image Modal -->
    <transition name="fade">
      <div v-if="isZoomed" class="zoomed-modal" @click="closeZoom">
        <img :src="zoomedImage" alt="Zoomed View" class="zoomed-image" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DesignPage',
  data() {
    return {
      myLogos: [
        require('../assets/my-logo/dev eyra-01.png'),
        require('../assets/my-logo/dev eyra-02.png'),
        require('../assets/my-logo/dev eyra-03.png'),
      ],
      companyLogos: [
      require('../assets/devxotle/Devxotle-01-01.png'),
        require('../assets/devxotle/Devxotle-02.png'),
        require('../assets/devxotle/Devxotle-04.png'),
        require('../assets/devxotle/Devxotle-05.png'),
        require('../assets/devxotle/Devxotle-07.png'),
        require('../assets/devxotle/Devxotle-08.png'),
        require('../assets/devxotle/Devxotle-09.png'),
        require('../assets/devxotle/Devxotle-10.png'),
        require('../assets/devxotle/Devxotle-27.png'),
        require('../assets/devxotle/Devxotle-28.png'),
      ],
      selectedAlbum: [],
      isModalOpen: false,
      currentAlbum: '',
      isZoomed: false,
      zoomedImage: '',
    };
  },
  methods: {
    openModal(album) {
      this.currentAlbum = album;
      this.selectedAlbum = this[album];
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedAlbum = [];
    },
    zoomImage(image) {
      this.zoomedImage = image;
      this.isZoomed = true;
    },
    closeZoom() {
      this.isZoomed = false;
      this.zoomedImage = '';
    },
  },
};
</script>

<style scoped>
/* Design Page Styling */
.design-page {
  padding: 40px;
  text-align: center;
  background-color: #fafafa;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: #333;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Album Card Styling */
.album-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;
  cursor: pointer;
  overflow: hidden;
}

.album-card:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.album-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #444;
}

/* Thumbnail Grid */
.thumbnail-grid {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.1);
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.3s;
}

.modal-image:hover {
  transform: scale(1.05);
}

/* Zoomed Image View */
.zoomed-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  cursor: zoom-out;
}

/* Close Button */
.close-button {
  margin-top: 15px;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #555;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
