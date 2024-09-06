import { updateUI } from './ui.js';
import { gcd, isPrime } from './mathUtils.js';

let maxNum, totalGuesses, remainingGuesses, answer;
let guessedNumbers = new Set();

export function initGame() {
    maxNum = parseInt(document.getElementById('maxNumber').value);
    if (maxNum < 2) {
        document.getElementById('maxNumberError').textContent = 'Please enter a number greater than or equal to 2';
        return;
    }
    document.getElementById('maxNumberError').textContent = '';
    totalGuesses = Math.max(1, Math.round(Math.log2(maxNum)) - 2);
    remainingGuesses = totalGuesses;
    answer = Math.floor(Math.random() * (maxNum - 1)) + 2;
    while (isPrime(answer)) {
        answer = Math.floor(Math.random() * (maxNum - 1)) + 2;
    }

    guessedNumbers.clear();
    updateUI.startGame(maxNum, totalGuesses);
}

export function checkCoprime() {
    if (remainingGuesses <= 0) {
        endGame(false);
        return;
    }

    const guess = parseInt(document.getElementById('guessNumber').value);
    if (isNaN(guess) || guess < 2 || guess > maxNum) {
        document.getElementById('guessNumberError').textContent = `Please enter a number between 2 and ${maxNum}`;
        return;
    }
    if (guessedNumbers.has(guess)) {
        document.getElementById('guessNumberError').textContent = 'You have already guessed this number';
        return;
    }
    document.getElementById('guessNumberError').textContent = '';

    guessedNumbers.add(guess);
    remainingGuesses--;

    if (guess === answer) {
        endGame(true);
        return;
    }

    const coprimeResult = isCoprime(guess, answer);
    updateUI.updateNumbers(guess, coprimeResult, maxNum);
    updateUI.updateResult(remainingGuesses, totalGuesses);
    updateUI.addToHistory(guess, coprimeResult);
    document.getElementById('guessNumber').value = '';
}

function isCoprime(a, b) {
    return gcd(a, b) === 1;
}

function endGame(isWin) {
    updateUI.endGame(isWin, answer);
    document.getElementById('checkCoprime').disabled = true;
}

export function restartGame() {
    updateUI.restartGame();
}