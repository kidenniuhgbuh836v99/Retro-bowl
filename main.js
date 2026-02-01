import Player from './core/Player.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const qb = new Player('Tom Brady', 'QB', { speed: 40 });

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Basic render logic
  qb.sprint(100);
  
  requestAnimationFrame(gameLoop);
}

console.log('🏈 Retro Bowl Engine Initialized...');
gameLoop();
