# Number Guessing Game (CLI)

A simple Command Line Interface (CLI) Number Guessing Game built using Node.js.
The computer randomly selects a number between **1 and 100**, and the player must guess the number within a limited number of attempts.

---

## Project URL

https://roadmap.sh/projects/number-guessing-game

---

## Features

* Random number generation between **1 and 100**
* **Three difficulty levels**
* Easy – 10 chances
* Medium – 5 chances
* Hard – 3 chances
* Hints after each guess (higher / lower)
* Displays number of attempts taken
* Option to play multiple rounds

---

## Tech Stack

Node.js
readline-sync

---

## Installation

Clone the repository

git clone https://github.com/SivaSanjaykumar/Number-Guessing-Game.git

Go to the project folder

cd number-guessing-game

Install dependencies

npm install

---

## Run the Game

node game.js

---

## Example Gameplay

Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please Select the Difficulty Level

1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great! You selected Medium difficulty.

Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50

Enter your guess: 25
Incorrect! The number is greater than 25

Enter your guess: 30
Congratulations! You guessed the correct number in 3 attempts.

---

## Project Structure

number-guessing-game
│
├── game.js
├── package.json
├── README.md
└── .gitignore

---

## Author

Siva Sanjay
