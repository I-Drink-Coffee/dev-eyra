<template>
    <div class="profile-card">
      <img :src="profileImage" alt="Profile Photo" class="profile-image" />
      <div class="profile-details">
        <h2>{{ name }}</h2>
        <p>{{ bio }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileCard',
    props: {
      profileImage: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Profile Card Layout */
  .profile-card {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Profile Image Styling */
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* Profile Details */
  .profile-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h2 {
    margin: 0 0 5px 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
  }
  
  p {
    margin: 0 0 10px 0;
    color: #666;
  }
  
  /* Responsive Styling */
  @media (max-width: 768px) {
    .profile-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .profile-image {
      margin-bottom: 10px;
    }
  
    .profile-details {
      align-items: center;
    }
  }
  </style>
  