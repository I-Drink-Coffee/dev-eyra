<template>
  <div class="profile-page">
    <ProfileCard
      :profileImage="profileImage"
      :name="name"
      :bio="bio"
    />
    <DetailsSection />
    <ExperienceTimeline />
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue';
import DetailsSection from '../components/DetailsSection.vue';
import ExperienceTimeline from '../components/ExperienceTimeline.vue';

export default {
  components: {
    ProfileCard,
    DetailsSection,
    ExperienceTimeline,
  },
  data() {
    return {
      profileImage: require('../assets/jolo.jpg'), // Load the profile image
      name: 'John Angelo De Veyra',
      bio: 'A computer engineer specializing in data science and mobile development.',
    };
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
