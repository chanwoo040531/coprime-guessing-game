import { initGame, checkCoprime, restartGame } from './game.js';
import { setupEventListeners } from './eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners(initGame, checkCoprime, restartGame);
});