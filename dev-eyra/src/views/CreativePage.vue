<template>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center mb-4">Creative Page</h1>
          
          <!-- Custom content area -->
          <div v-if="customContent.length" class="list-group">
            <div class="list-group-item" v-for="(content, index) in customContent" :key="index">
              <h4>{{ content.title }}</h4>
              <p>{{ content.body }}</p>
            </div>
          </div>
  
          <!-- If no content is added yet -->
          <div v-else>
            <p class="text-center">No creative content added yet. Feel free to add your hobbies, blogs, or mini-app here!</p>
          </div>
  
          <!-- Option to add new creative content -->
          <form @submit.prevent="addContent" class="mt-5">
            <div class="mb-3">
              <input v-model="newContent.title" type="text" class="form-control" placeholder="Enter Title" required />
            </div>
            <div class="mb-3">
              <textarea v-model="newContent.body" class="form-control" rows="3" placeholder="Enter Description" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary w-100">Add Creative Content</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customContent: [], // Store creative content
        newContent: {
          title: '',
          body: '',
        },
      };
    },
    methods: {
      addContent() {
        // Push new content into the custom content array
        this.customContent.push({
          title: this.newContent.title,
          body: this.newContent.body,
        });
        // Reset the form fields
        this.newContent.title = '';
        this.newContent.body = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles for the creative page */
  .list-group-item {
    margin-bottom: 10px;
  }
  
  textarea {
    resize: none;
  }
  </style>
  