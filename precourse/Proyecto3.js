//BINGO

function bingo(){
    let username = prompt('Bienvenido! Por favor, dime tu nombre:');

    console.log('Hola ' + username + '. A continuación te mostramos los números de tu cartón: ');

    function firstTurn (){
        let carton1 = [];
        
        for (let i = 0; i < 15; i++){
        carton1.push(Math.floor((Math.random() * 15) + 1));
        }

        console.log(carton1.join(' | '));
        
        // // let prep = confirm('Preparado??');
        // // if (repetir === true) {
        // // bombo();
        // }
        
        
    let azar = []; 
       function bombo(){

            for(let x = 0; x < 1; x++){  
                console.log(azar.push(Math.floor((Math.random() * 15) + 1)));        
                if (carton1[x] == azar[x]){
                    console.warn('Lo tienes!');
                    carton1[x] = 'X'; 
                }else{
                    console.log('Este número no lo tienes!');
                }
            }
            console.log(carton1.join(' | '));        
            
            let next = confirm('Siguiente número?');
            if (next === true) {
            bombo();
            } else {
            console.log('Hasta otra!');
            }
        }

        bombo();
        }
    firstTurn();
        // let repetir = confirm('Quieres seguir jugando?');
        // if (repetir === true) {
        // firstTurn();
        // } else {
        // console.log('Hasta otra!');
        // }
}
bingo();