<template>
  <div class="design-card" @click="emitOpen">
    <img :src="image" :alt="alt" class="design-image" />
    <div class="card-overlay">
      <p class="overlay-text">View Album</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignCard',
  props: {
    image: { type: String, required: true },
    alt: { type: String, default: 'Design Image' },
  },
  methods: {
    emitOpen() {
      this.$emit('open'); // Emit open event when the card is clicked
    },
  },
};
</script>

<style scoped>
.design-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: #fff;
}

.design-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.design-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.design-card:hover .design-image {
  transform: scale(1.1);
}

/* Overlay for hover effect */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.design-card:hover .card-overlay {
  opacity: 1;
}

.overlay-text {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
