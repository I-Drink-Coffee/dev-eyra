<template>
  <div class="portfolio-showcase">
    <h1 class="page-title">My Portfolio Showcase</h1>
    <!-- Project Grid -->
    <div class="project-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card" @click="openModal(project)">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="overlay">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.shortDescription }}</p>
          <p class="languages">Built with: {{ project.languages }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <h2>{{ selectedProject.title }}</h2>
          <p class="modal-description">{{ selectedProject.description }}</p>

          <!-- Screenshot Grid -->
          <div class="screenshot-grid">
            <img v-for="(screenshot, idx) in selectedProject.screenshots" :key="idx" :src="screenshot" class="screenshot" :alt="'Screenshot ' + (idx + 1)" @click="zoomImage(screenshot)" />
          </div>

          <!-- Conditionally Render Link for VetSharp -->
          <p v-if="selectedProject.title === 'VetSharp'" class="live-link">
            <a :href="selectedProject.link" target="_blank" class="btn btn-primary">Visit VetSharp</a>
          </p>
          <!-- Video Link -->
          <p v-if="selectedProject.title === 'Image Classification App'" class="video-link">
            <a :href="selectedProject.videoLink" target="_blank" class="btn btn-primary">Watch Demo Video</a>
          </p>
          <p v-if="selectedProject.title === 'OS CPU Scheduling Simulator'" class="live-link">
            <a :href="selectedProject.link" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Project</a>
          </p>
          <p v-if="selectedProject.title === 'Login System with Role-Based Access Control'" class="video-link">
            <a :href="selectedProject.videoLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Watch Demo Video</a>
          </p>
          

          <button class="close-button" @click="closeModal">Close</button>
        </div>
      </div>
    </transition>

    <!-- Zoomed Image Overlay -->
    <transition name="fade">
      <div v-if="zoomedImage" class="zoom-overlay" @click="closeZoom">
        <img :src="zoomedImage" class="zoomed-image" />
      </div>
    </transition>
  </div>
</template>



<script>
export default {
  name: 'PortfolioShowcase',
  data() {
    return {
      projects: [
        {
          title: 'TIP Tool Room Borrowing Software',
          image: require('../assets/tip-tool-room/image0.png'),
          shortDescription: 'A comprehensive tool borrowing system.',
          description:
            'A complete software solution to manage tool borrowing at the TIP Tool Room. Features include user login, real-time tool availability, borrowing and return tracking, and an admin dashboard with reporting tools. Built with a focus on user-friendliness and efficiency.',
          languages: 'JavaScript, Next.js, CSS',
          screenshots: [
            require('../assets/tip-tool-room/image0.png'),
            require('../assets/tip-tool-room/image3.png'),
            require('../assets/tip-tool-room/image5.png'),
            require('../assets/tip-tool-room/image6.png'),
            require('../assets/tip-tool-room/image8.png'),
            require('../assets/tip-tool-room/image9.png'),
            require('../assets/tip-tool-room/image10.png'),
            require('../assets/tip-tool-room/image16.png'),
            require('../assets/tip-tool-room/image17.png'),
          ],
        },
        {
        title: 'Portable Amplifier',
        image: require('../assets/circuit/image1.png'), // Thumbnail image for the card
        shortDescription: 'Amplify audio signals for various outputs.',
        description: 'The Portable Amplifier circuit is designed to amplify audio signals from an input device to headphones, with the versatility to also enhance subwoofer or speaker output by adjusting a few jumpers. This project highlights my skills in electronic circuit design and practical application of audio engineering concepts.',
        languages: 'Electronics, Circuit Design',
        screenshots: [
          require('../assets/circuit/image2.png'),
          require('../assets/circuit/image3.png'),
          require('../assets/circuit/image4.png'),
          require('../assets/circuit/image5.png'),
          require('../assets/circuit/image6.png'),
          require('../assets/circuit/image7.png'),
          require('../assets/circuit/image8.png'),
          require('../assets/circuit/image9.png'),
          require('../assets/circuit/image10.png'),
        ],
        
      },
      {
        title: 'VetSharp',
        image: require('../assets/vetsharp/vet.png'), // Thumbnail image for the card
        shortDescription: 'Veterinary management software.',
        description: 'VetSharp is a comprehensive veterinary management system built to streamline clinic operations. It provides tools for appointment scheduling, patient records, and billing. This project showcases my skills in full-stack web development using JavaScript, TypeScript, Next.js, and CSS.',
        languages: 'JavaScript, TypeScript, Next.js, CSS',
        link: 'https://vetsharp.vercel.app', // Link to the deployed application
        screenshots: [ // Optional: Include screenshots if available
          require('../assets/vetsharp/vet.png'),
        ],
      },
      
      {
        title: 'Login System with Role-Based Access Control',
        image: require('../assets/logink/kotlin.png'), // Thumbnail or a relevant image
        shortDescription: 'A secure login system with role-based access control, built using SQLite or Firebase.',
        description: `This project implements a comprehensive login system supporting multiple user roles including Super Admin, Admin, and User. Each role has specific privileges, such as adding, editing, and deleting users. The system features multipage intent, layout design, and integration with SQLite or Firebase for data management. It includes a video demonstration of its features.`,
        languages: 'kotlin, java, Firebase',
        videoLink: 'https://drive.google.com/file/d/1mvhWZVK2BTrkB-B_cxhZZkdnxhuNbxS8/view', // Google Drive link to the video
      },
      {
        title: 'Image Classification App',
        image: require('../assets/image-classifier/image0.png'), // Thumbnail or a relevant image from the assets
        shortDescription: 'Deep learning app for classifying images.',
        description: 'This image classification app utilizes TensorFlow and Python to accurately classify images into predefined categories. The app demonstrates the application of neural networks and deep learning techniques to solve real-world problems in image recognition.',
        languages: 'Python, TensorFlow',
        videoLink: 'https://drive.google.com/file/d/14syXRQjmav1xEbxUDpCOOzgbAjus4eU-/view?usp=sharing', // Google Drive link to the video
        screenshots: [
          require('../assets/image-classifier/image0.png'),
          require('../assets/image-classifier/image2.png'),
          require('../assets/image-classifier/image5.png'),
          require('../assets/image-classifier/image6.png'),
          require('../assets/image-classifier/image7.png'),
          require('../assets/image-classifier/image8.png'),
          require('../assets/image-classifier/image9.png'),
        ],
      },
      {
        title: 'License Plate Reader',
        image: require('../assets/license-plate-reader/image0.png'), // Thumbnail image for the card
        shortDescription: 'Real-time license plate detection and recognition.',
        description: 'This desktop application uses a webcam to detect and read license plates in real-time. It is built using Python and TensorFlow, incorporating advanced OCR techniques to accurately extract license plate numbers. This tool is particularly useful for security and traffic management applications.',
        languages: 'Python, TensorFlow, OCR',
        screenshots: [
          require('../assets/license-plate-reader/image0.png'),
          require('../assets/license-plate-reader/image1.png'),
          require('../assets/license-plate-reader/image3.png'),
          require('../assets/license-plate-reader/image4.png'),
          require('../assets/license-plate-reader/image5.png'),
        ],
      },
      {
        title: 'OS CPU Scheduling Simulator',
        image: require('../assets/cpu-scheduling/image1.png'), // Thumbnail or a representative image from the assets
        shortDescription: 'Interactive simulator for OS CPU scheduling algorithms.',
        description: 'This project is an interactive simulator designed to help students and enthusiasts understand the intricacies of CPU scheduling algorithms used in operating systems. It features simulations of various scheduling strategies, providing real-time visual feedback and comparative analysis to enhance learning.',
        languages: 'JavaScript, CSS',
        link: 'https://os-prelim-exam.vercel.app', // Direct link to the project
        screenshots: [
          require('../assets/cpu-scheduling/image1.png'),
          require('../assets/cpu-scheduling/image2.png'),
          require('../assets/cpu-scheduling/image3.png'),
          require('../assets/cpu-scheduling/image5.png'),
          require('../assets/cpu-scheduling/image6.png'),
        ],
      },
      
      ],
      isModalOpen: false,
      selectedProject: {},
      zoomedImage: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProject = {};
    },
    zoomImage(image) {
      this.zoomedImage = image;
    },
    closeZoom() {
      this.zoomedImage = null;
    },
  },
};
</script>

<style scoped>
.portfolio-showcase {
  padding: 40px;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 300;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-left: auto;  /* Centers the grid and adds margin on the left */
  margin-right: auto; /* Centers the grid and adds margin on the right */
  max-width: 1200px;  /* Optional: max-width can be adjusted to fit your design */
}

.project-card {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.video-player {
  width: 100%;
  max-width: 600px; 
  border-radius: 10px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: opacity 0.3s;
}

.project-card:hover .overlay {
  opacity: 1;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.languages {
  font-size: 0.9rem;
  margin-top: 5px;
  font-style: italic;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  text-align: center;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.screenshot {
  width: 100%;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.screenshot:hover {
  transform: scale(1.1);
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

.close-button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #0056b3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
