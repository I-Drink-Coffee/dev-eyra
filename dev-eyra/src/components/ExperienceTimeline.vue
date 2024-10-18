<template>
    <div class="timeline">
      <ul>
        <li v-for="(item, index) in timeline" :key="index">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <small>{{ item.date }}</small>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timeline: [

          {
            title: 'Taking BSCpE Computer Engineering',
            description: 'technological institute of the philippines.',
            date: '2021 - 2025',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .timeline ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 15px;
  }
  
  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  
  p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #666;
  }
  
  small {
    color: #999;
  }
  </style>
  