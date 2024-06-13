<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import html2canvas from 'html2canvas'

const canvas = ref(null);
const ctx = ref(null);
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const score = ref(0);
const gameLoop = ref(null);
const player = ref(null);
const obstacles = ref([]);
const obstacleSpeed = ref(5);
const obstacleSpawnRate = ref(0.02);
const speedUpTimer = ref(null);
const gameStarted = ref(false);
const gameOver = ref(false);
const keys = ref({
  up: false,
  down: false,
  left: false,
  right: false
});
const playerImage = new Image();
const rocketImage = new Image();
const bulletImage = new Image();

import playerUrl from '../assets/player.png'
import rocketUrl from '../assets/rocket.png'

playerImage.src = playerUrl;
rocketImage.src = rocketUrl;
bulletImage.src = rocketUrl;

onMounted(() => {
  canvas.value = document.querySelector('#app canvas');
  ctx.value = canvas.value.getContext('2d');
  canvas.value.width = canvasWidth;
  canvas.value.height = canvasHeight;

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('keyup', handleKeyUp);
});

function startGame() {
  player.value = new Player(canvasWidth, canvasHeight);
  obstacles.value = [];
  score.value = 0;
  obstacleSpeed.value = 20;
  obstacleSpawnRate.value = 0.02;
  gameStarted.value = true;
  gameOver.value = false;
  gameLoop.value = setInterval(gameUpdate, 1000 / 60);
  speedUpTimer.value = setInterval(speedUp, 20000);
}

function gameUpdate() {
  ctx.value.clearRect(0, 0, canvasWidth, canvasHeight);

  player.value.update(keys.value);
  player.value.draw(ctx.value, playerImage);

  if (Math.random() < obstacleSpawnRate.value) {
    const type = Math.random() < 0.5 ? 'rocket' : 'bullet';
    obstacles.value.push(new Obstacle(type, canvasWidth, canvasHeight));
  }

  obstacles.value.forEach((obstacle, index) => {
    obstacle.update(obstacleSpeed.value);
    obstacle.draw(ctx.value, rocketImage, bulletImage);

    if (player.value.collidesWith(obstacle)) {
      endGame();
    }

    if (obstacle.x + obstacle.width < 0) {
      obstacles.value.splice(index, 1);
      score.value++;
      increaseGameDifficulty();
    }
  });
}

function speedUp() {
  obstacleSpeed.value *= 1.1;
  obstacleSpawnRate.value *= 1.1;
}

function increaseGameDifficulty() {
  if (score.value % 10 === 0) {
    obstacleSpeed.value *= 1.1;
    obstacleSpawnRate.value *= 1.1;
  }
}

function endGame() {
  clearInterval(gameLoop.value);
  clearInterval(speedUpTimer.value);
  gameOver.value = true;
}

function saveScore() {
  html2canvas(document.body).then(function(canvas) {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = dataURL;
    link.click();
  });

}

function handleKeyDown(event) {
  switch (event.code) {
    case 'ArrowUp':
      keys.value.up = true;
      break;
    case 'ArrowDown':
      keys.value.down = true;
      break;
    case 'ArrowLeft':
      keys.value.left = true;
      break;
    case 'ArrowRight':
      keys.value.right = true;
      break;
  }
}

function handleKeyUp(event) {
  switch (event.code) {
    case 'ArrowUp':
      keys.value.up = false;
      break;
    case 'ArrowDown':
      keys.value.down = false;
      break;
    case 'ArrowLeft':
      keys.value.left = false;
      break;
    case 'ArrowRight':
      keys.value.right = false;
      break;
  }
}

class Player {
  constructor(canvasWidth, canvasHeight) {
    this.x = 50;
    this.y = canvasHeight / 2;
    this.width = 50;
    this.height = 50;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.friction = 0.9;
  }

  draw(ctx, image) {
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }

  update(keys) {
    if (keys.up) {
      this.yVelocity -= 0.5;
    }
    if (keys.down) {
      this.yVelocity += 0.5;
    }
    if (keys.left) {
      this.xVelocity -= 0.5;
    }
    if (keys.right) {
      this.xVelocity += 0.5;
    }

    this.xVelocity *= this.friction;
    this.yVelocity *= this.friction;

    this.x += this.xVelocity;
    this.y += this.yVelocity;

    if (this.x < 0) {
      this.x = 0;
      this.xVelocity = 0;
    } else if (this.x + this.width > canvasWidth) {
      this.x = canvasWidth - this.width;
      this.xVelocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.yVelocity = 0;
    } else if (this.y + this.height > canvasHeight) {
      this.y = canvasHeight - this.height;
      this.yVelocity = 0;
    }
  }

  collidesWith(obstacle) {
    return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
    );
  }
}

class Obstacle {
  constructor(type, canvasWidth, canvasHeight) {
    this.type = type;
    this.width = 50;
    this.height = 50;
    this.x = canvasWidth;
    this.y = Math.random() * (canvasHeight - this.height);
  }

  draw(ctx, rocketImage, bulletImage) {
    if (this.type === 'rocket') {
      ctx.drawImage(rocketImage, this.x, this.y, this.width, this.height);
    } else if (this.type === 'bullet') {
      ctx.drawImage(bulletImage, this.x, this.y, this.width, this.height);
    }
  }

  update(obstacleSpeed) {
    this.x -= obstacleSpeed;
  }
}

</script>

<template>
  <canvas ref="gameCanvas"></canvas>
  <div class="score">Score: {{ score }}</div>
  <button class="start-button" @click="startGame" v-if="!gameStarted">Start Game</button>
  <div class="game-over" v-if="gameOver">
    <h2>Game Over</h2>
    <p>Your score: {{ score }}</p>
    <button class="start-button" @click="startGame">Restart</button>
    <button class="save-score" @click="saveScore">Save Score</button>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}
.score {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.start-button {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  font-size: 24px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  text-align: center;
}
.save-score {
  font-size: 18px;
  padding: 5px 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

</style>
