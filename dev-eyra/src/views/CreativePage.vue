<template>
  <div class="game-page">
    <h1 class="page-title">Whack-a-Mole!</h1>

    <div class="game-info">
      <p>Score: {{ score }}</p>
      <p>Time Left: {{ timeLeft }}s</p>
    </div>

    <div class="grid">
      <div
        v-for="(isMole, index) in holes"
        :key="index"
        class="hole"
        @click="whackMole(index)"
      >
        <div v-if="isMole" class="mole"></div>
      </div>
    </div>

    <button @click="startGame" class="start-button" :disabled="isPlaying">
      Start Game
    </button>

    <transition name="fade">
      <div v-if="showEndMessage" class="end-message">
        <p>Game Over! Your score: {{ score }}</p>
        <button @click="resetGame">Play Again</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CreativePage',
  setup() {
    const holes = ref(Array(9).fill(false)); // 9 holes with false (no mole initially)
    const score = ref(0);
    const timeLeft = ref(30); // Game lasts for 30 seconds
    const isPlaying = ref(false);
    const showEndMessage = ref(false);

    let moleInterval = null;
    let timerInterval = null;

    const startGame = () => {
      resetGame();
      isPlaying.value = true;
      showEndMessage.value = false;
      startTimer();
      spawnMole();
    };

    const spawnMole = () => {
      moleInterval = setInterval(() => {
        holes.value = Array(9).fill(false); // Reset all holes to false
        const randomIndex = Math.floor(Math.random() * 9); // Random hole index
        holes.value[randomIndex] = true; // Place a mole at the random index
      }, 800); // Moles appear every 800ms
    };

    const whackMole = (index) => {
      if (holes.value[index]) {
        score.value++; // Increment the score if a mole is hit
        holes.value[index] = false; // Remove the mole after being hit
      }
    };

    const startTimer = () => {
      timerInterval = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--; // Decrement the timer every second
        } else {
          endGame(); // End the game when the time is up
        }
      }, 1000);
    };

    const endGame = () => {
      clearInterval(moleInterval);
      clearInterval(timerInterval);
      isPlaying.value = false;
      showEndMessage.value = true;
    };

    const resetGame = () => {
      holes.value = Array(9).fill(false); // Reset the board
      score.value = 0;
      timeLeft.value = 30;
      clearInterval(moleInterval);
      clearInterval(timerInterval);
    };

    return {
      holes,
      score,
      timeLeft,
      isPlaying,
      showEndMessage,
      startGame,
      whackMole,
      resetGame,
    };
  },
};
</script>

<style scoped>
.game-page {
  padding: 40px;
  text-align: center;
  background-color: #f3f4f6;
  min-height: 100vh;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 300;
}

.game-info {
  margin-bottom: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.hole {
  width: 100px;
  height: 100px;
  background-color: #d1d5db;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hole:hover {
  background-color: #cbd5e1;
}

.mole {
  width: 80%;
  height: 80%;
  background-color: #4a5568;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
}

.start-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #4a90e2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #357abd;
}

.end-message {
  margin-top: 20px;
  font-size: 1.4rem;
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #357abd;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
