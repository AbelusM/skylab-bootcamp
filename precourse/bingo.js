
function bingo() {

    let playerName = prompt('Por favor, antes de empezar dinos tu nombre: ');
    let numbers = getRandomNumbersArray();
    let turn = 1;
    let continuePlaying;
    let isBingo = false;
    
    
    showCarton();
    
    askForNewTurn();
    
    
    while (continuePlaying && !isBingo) {
    
    let currentNumber = getRandomNumber();
    turn += 1;
    console.log('Numero del turno ', turn, ' es: ', currentNumber);
    checkNumber(currentNumber);
    checkForLine()
    showCarton();
    askForNewTurn();
    }

    
    if (isBingo) {    
    console.log('Has ganado! Enhorabuena!!!!!');
    }
    
    console.log('Adios!!!! Gracias por jugar!!!');

    
    function checkForLine() {
    
    isBingo = true;
    
    for (let i = 0; i < numbers.length; i += 1) {
    
    if (typeof numbers[i] === 'number') {
    isBingo = false;
    }
    }
    }
    
    
    function checkNumber(numberToCheck) {
    
    for (let i = 0; i < numbers.length; i += 1) {
    if (numberToCheck === numbers[i]) {
    numbers[i] = 'X';
    }
    }
    }
    
    
    function showCarton() {
    console.log('Tu cartón en estos momentos es:');
    console.log(numbers.join(' | '));
    }
    
    
    function askForNewTurn() {
    continuePlaying = confirm('Siguiente número?');
    }
    
    
    function getTurnInfo() {
    console.log('Turno: '+ turn);
    }
    
    
    function getRandomNumbersArray() {
    let arrayToReturn = [];
    let randomArray = [];

    for (let i = 0; i < 15; i += 1) {
    randomNumber = getRandomNumber();
    randomArray.push(randomNumber);
    if(randomArray[i] !== arrayToReturn[i]){
    arrayToReturn.push(randomNumber); 
    }    
    }    
    return arrayToReturn;
    } 
    
    
    function getRandomNumber() {
    return Math.floor((Math.random() * 15) + 1);
    }
    }
    
    
    bingo();
    
    