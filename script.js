//Define Constants
//Element for hidden word
const wordPop = document.getElementById('wordPop');
//Element for incorrect guesses
const wrongGuess = document.querySelectorAll('li');
//Element for reset button
const resetBtn = document.querySelector('#resetBtn');
//Grabbing Element for winning/lossing alerts
const showAlert = document.getElementById('alert');
//Grabbing Element for background picture
const backgroundPic = document.querySelector('.gameBox');
//Grabbing Element for letter guess button
let enterBtn = document.querySelector('#enterGuess');
//Variable that holds player's guesses
let userGuesses = [];



//Event Listener for Reset Button
resetBtn.addEventListener('click', resetGame);

let wordBank = [
    'SPACE',
    'ALIEN',
    'PLANET',
    'GAlAXY',
    'ROCKET',
    'STARRY',
    'URANUS',
    'MOON',
    'STARS',
    'SATURN',
    'COSMOS',
    'NEBULA',
    'APOLLO',
    'ASCENT',
    'AURORA',
    'ABDUCT',
    'ORBIT',
];

let randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
//Generates the new word on the page
newWordGenerator();
//Function that takes randomized word and changes into __
function newWordGenerator() {
	wordPop.innerHTML = '';
	for (let i = 0; i < randomWordChoice.length; i++) {
		letter = document.createElement('span');
		letter.innerText = '__';
		letter.style.color = 'black';
		letter.classList.add('letter');
		wordPop.appendChild(letter);
	}
}

//Function that display winning alert 
function winningAlert() {
	showAlert.innerHTML= "Yay! You saved him from an alien abduction!";
}

//Function that determines if player won
function checkWin() {
	if (userGuesses.length === randomWordChoice.length) {
		return winningAlert();
	}
}


//Variable for number of wrong guesses within the function playerGuess
let numberOfWrongGuesses = 0;

// Event listener for Letter Guess button
enterBtn.addEventListener('click', playerGuess);  

//Function for letter guess button
function playerGuess(event) {
	event.preventDefault();

	// variable takes the word and splits into single letters
	let randomWordChoiceLetters = randomWordChoice.split('');
	// user input
	let userInput = document.querySelector('.input').value.toUpperCase();
	// variable for all the blank letter spaces.
	let blankSpaces = document.querySelectorAll('.letter');
	clearButton();

    if (userInput === randomWordChoiceLetters[0]) {
		blankSpaces[0].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[1]) {
		blankSpaces[1].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[2]) {
		blankSpaces[2].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[3]) {
		blankSpaces[3].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[4]) {
		blankSpaces[4].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[5]) {
		blankSpaces[5].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[6]) {
		blankSpaces[6].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[7]) {
		blankSpaces[7].innerText = userInput;
		userGuesses.push(userInput);
	} else if (userInput === randomWordChoiceLetters[8]) {
		blankSpaces[8].innerText = userInput;
		userGuesses.push(userInput);
	} else {
		wrongGuess[numberOfWrongGuesses].innerText = userInput;
		numberOfWrongGuesses++;
		updatePic();
	}
	checkWin();
}


// Function to reset game
function resetGame() {
	numberOfWrongGuesses = 0;
	wrongGuess.forEach((li) => (li.innerText = ' '));
	backgroundPic.src = 'spaceship_beam1.jpeg';
	randomWordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	newWordGenerator();
	userGuesses = [];
}

// Function that updates background picture of ship.
function updatePic() {
	if (numberOfWrongGuesses == 1) {
		backgroundPic.src = 'spaceshiphead.png';
	} else if (numberOfWrongGuesses == 2) {
		backgroundPic.src = 'spaceshipheadbody.png';
	} else if (numberOfWrongGuesses == 3) {
		backgroundPic.src = 'spaceshipheadbodyarm.png';
	} else if (numberOfWrongGuesses == 4) {
		backgroundPic.src = 'spaceshipheadbodyarmleg.png';
	} else if (numberOfWrongGuesses == 5) {
		backgroundPic.src = 'spaceshipheadbodyarmlegs.png';
	} else if (numberOfWrongGuesses == 6) {
		backgroundPic.src = 'spaceshipabducted1.jpg';
	} else if (numberOfWrongGuesses == 7) {
		alert(
			'Oh no! He got abducted by Aliens!'
		);
	}
}
// Clears the input box for the user
function clearButton() {
	document.getElementById('myInput').value = '';
}
