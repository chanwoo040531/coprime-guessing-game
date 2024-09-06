export function setupEventListeners(initGame, checkCoprime, restartGame) {
    document.getElementById('startGame').addEventListener('click', initGame);
    document.getElementById('checkCoprime').addEventListener('click', checkCoprime);
    document.getElementById('newGameButton').addEventListener('click', restartGame);

    // Close modal when clicking on <span> (x)
    document.querySelector('.close').onclick = function() {
        document.getElementById('endGameModal').style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('endGameModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}