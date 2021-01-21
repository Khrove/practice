'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById("score--1");
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function() {
    // Player rolled a 1, change player and reset currentScore
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // If activeplayer strictly equals 0 then activeplayer becomes 1, else activeplayer becomes o
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Change active player background to display on the correct player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

let scores, currentScore, activePlayer, playing;

const init = function() {
    // Starting conditions
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

// Begin the game on page load
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) {
        // Generate a random dice roll between 1 - 6
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check for a rolled 1: if true, switch to next player and clear score
        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(playing) {
        //  1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
        if(scores[activePlayer] >= 20) {
            // If yes, then finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        } else {
            // If no then switch to next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);