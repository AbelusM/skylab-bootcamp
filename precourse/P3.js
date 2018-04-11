// BINGO GAME

function bingo (){
    let playerName = prompt('Bienvenido al BINGO! Por favor, dinos tu nombre: ');
    console.log('Hola ' + playerName);
    let numbers = getRandomNumbersArray();
    let turn = 1; 
    let continuePlaying;
    let isBingo = false;
    
    showCarton();


askForNewTurn();

    while (continuePlaying && !isBingo){
        turn += 1;
        let currentNumber = getRandomNumber();
        console.log('Número del turno ', turn, ' es: ', getRandomNumber());
        checkNumber(currentNumber);
        showCarton();
        checkForLine();
        askForNewTurn();
    }

    if (isBingo) {
        console.log('Has ganado! Enhorabuena!!');
    }
    console.log('Hasta otra!');
    
    function checkForLine(){
        isBingo = false;
        for (let i = 0; i < numbers.length; i+=1) {
            if (typeof numbers[i] === 'number'){
                isBingo = false;
                }        }

    }


    function checkNumber(numberToCheck){
    for (let i = 0; i < numbers.length; i+= 1) {
        if(numberToCheck === numbers[i]){
            numbers[i] = 'X';
        }
        
    }      
    }
function showCarton(){
    console.log('Tu cartón es: ');
    console.log(numbers.join(' | '));
}
function askForNewTurn(){
    continuePlaying = confirm('Jugar siguiente turno?');
}
    function getTurnInfo() {
        console.log('Turno: ' + turn);
    }

    function getRandomNumbersArray(){
        let arraToReturn = [];
        // lógica para obtener los 15 números al azar 
        //let randonNumber = getRandomNumber();

        for(let i = 0; i < 15; i += 1){
            let randonNumber = getRandomNumber();
            arrayToReturn.push(randonNumber);
        }

        function getRandomNumber(){
            return Math.floor(Math.random() * 15) + 1 ;
        }

        return arraToReturn;
    }


}

bingo();