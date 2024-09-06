export const updateUI = {
    startGame(maxNum, totalGuesses) {
        document.getElementById('setupArea').style.display = 'none';
        document.getElementById('gameArea').style.display = 'block';
        document.getElementById('gameInfo').textContent = `Game started with maximum number: ${maxNum}`;
        const numbersDiv = document.getElementById('numbers');
        numbersDiv.innerHTML = '';
        for (let i = 2; i <= maxNum; i++) {
            const numDiv = document.createElement('div');
            numDiv.classList.add('number');
            numDiv.textContent = i;
            numbersDiv.appendChild(numDiv);
        }
        document.getElementById('guessHistory').innerHTML = '';
        this.updateResult(totalGuesses, totalGuesses);
    },

    updateNumbers(guess, coprimeResult, maxNum) {
        const numbersDiv = document.getElementById('numbers');
        const numberDivs = numbersDiv.getElementsByClassName('number');
        for (let numDiv of numberDivs) {
            const num = parseInt(numDiv.textContent);
            if (coprimeResult && num % guess === 0 && num !== guess) {
                numDiv.classList.add('removed');
            } else if (!coprimeResult && num % guess !== 0) {
                numDiv.classList.add('removed');
            }
        }
    },

    updateResult(remainingGuesses, totalGuesses) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Guesses remaining: ${remainingGuesses}/${totalGuesses}`;
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = `${(remainingGuesses / totalGuesses) * 100}%`;
    },

    addToHistory(guess, isCoprime) {
        const historyDiv = document.getElementById('guessHistory');
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.classList.add(isCoprime ? 'coprime' : 'not-coprime');
        historyItem.textContent = `${guess} is ${isCoprime ? 'coprime' : 'not coprime'}`;
        historyDiv.prepend(historyItem);
    },

    endGame(isWin, answer) {
        const numbersDiv = document.getElementById('numbers');
        const answerDiv = numbersDiv.children[answer - 2];
        answerDiv.classList.add('answer');
        
        const modal = document.getElementById('endGameModal');
        const title = document.getElementById('endGameTitle');
        const message = document.getElementById('endGameMessage');

        if (isWin) {
            title.textContent = 'Congratulations!';
            message.textContent = `You won! You found the answer: ${answer}`;
        } else {
            title.textContent = 'Game Over';
            message.textContent = `You lost. The correct answer was: ${answer}`;
        }

        modal.style.display = 'block';
    },

    restartGame() {
        document.getElementById('setupArea').style.display = 'block';
        document.getElementById('gameArea').style.display = 'none';
        document.getElementById('maxNumber').value = '100';
        document.getElementById('guessNumber').value = '';
        document.getElementById('checkCoprime').disabled = false;
        document.getElementById('endGameModal').style.display = 'none';
    }
};