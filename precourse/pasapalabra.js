//PASAPALABRA

// Chequear si el array tiene alguna letra con nc
// si tiene, jugamos
// Iteramos por el array
// Mostramos la letra actual y la pregunta
// pedimos respuesta con un propmt
// si el valor es igual a 'pasapalabra'
// continuamos con la siguiente letra
// si el valor del propmt es igual al awnser
// sumamos 1 punto
// cambiamos status de la letra a 'ok'
// continuamos con la siguiente letra
// si el valor del prompt NO es igual awnser
// cambiamos status de la letra a 'fail'
// continuamos con la siguiente letra
// si no tiene nos vamos

function game() {

    let questions = [
        { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
        { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
        { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
        { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
        { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
        { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
        { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
        { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
        { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
        { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
        { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
        { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
        { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
        { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
        { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
        { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
        { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
        { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
        { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
        { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
        { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
        { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
        { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
        { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
        { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
        { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
        { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
    ];

    let playerName = prompt('Bienvenido a Pasapalabra, dinos tu nombre: ') || 'Jugador Anónimo';
    alert('Bienvenido ' + playerName + ', empezarás con 0 puntos, sumarás 1 punto cada vez que aciertes, si contestas: Pasapalabra, pasaremos a la siguiente palabra. \nMucha suerte! ');
    let points = 0;
    let ranking = [];
    let questionsLeft = false;


    while (!questionsLeft) {

        firstplayer()
        checkQuestions()
        console.warn('Puntos Totales:' + points);
        addCurrentPlayerToRanking()
        showRanking()
    }

    function checkQuestions() {
        questionsLeft = true;
        for (let i = 0; i < questions.length; i += 1) {
            if (questions[i].status === 0) {
                questionsLeft = false;
            }
        }
    }

    function addCurrentPlayerToRanking() {
        ranking.push({
            player: playerName,
            points: points
        });
        console.warn(ranking);
    }

    function showRanking() {
        let rankingText = 'Ranking Actual: \n';
        ranking.sort(sortFunction)
        for (let player of ranking) { // for of
            rankingText += ('\n ' + player.player + ': ' + player.points + ' Puntos');
        }
        alert(rankingText);

        function sortFunction(currentElement, nextElement) {
            if (currentElement.points > nextElement.points) {
                return -1;
            } else {
                return 1;
            }
        }
    }

    function firstplayer() {
        for (let i = 0; i < questions.length; i += 1) {
            if (questions[i].status === 0) {
                let questAnswer = prompt(questions[i].question).toLowerCase();
                if (questAnswer === 'pasapalabra') {
                    console.log('Ok, siguiente palabra');
                }
                else if (questAnswer === questions[i].answer) {
                    points += 1;
                    questions[i].status = 1; //1 es acierto
                    console.log('Has acertado! +1 punto.' + ' Total: ' + points);
                } else {
                    questions[i].status = 2; //2 es fallo
                    console.log('Lástima! Respuesta incorrecta.' + ' Total: ' + points);
                }
            }
        }

    }

}
game();
