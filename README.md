# Coprime Guessing Game

## Overview
Coprime Guessing Game is a web-based game where players guess a hidden number using coprime relationships. 
This project was created to explore Claude AI's capabilities in game development. 
All code, including this README, was written by Claude AI under human guidance.

## Game Rules
1. Choose a maximum number (n).
2. A hidden number is selected between 2 and n.
3. Players have log2(n) - 2 guesses (rounded).
4. Each guess reveals if it's coprime to the hidden number.
5. Non-coprime guesses eliminate possible answers.
6. Game ends when the number is guessed or guesses run out.