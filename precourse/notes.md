# Clase 17/03/18 - Scopes & Closures

## Compilador de JavaScript
El compilador lee cada uno de los elementos de una linia, y así va bajanado. 
Este compilador (motor de JS) leerá todo dos veces. 
- La primera de ellas buscará declaración. Ya sean 'Variables' o 'Funciones' y comprueba si ya existen. Así sabrá cuanto espacio debe reservarles. La pregunta que se hará es: ¿Empieza por Var o Funcion? Si no, la ignorará. 
- La segunda aplicará el valor a las variables. Por ejemplo: 'let' se ejecuta en la segunda lectura, lo que nos obliga a asignar previamente las variables que vamos a trabajar.  

function expression: es una función que se asigna como valor a una variable. 
function declaration: es una función que no se le asigna ninguna variable, si no que empieza directamente con la función. 

## Scopes
Definición de Scope: 
Aquel conjunto de reglas que definen cómo se guarda una variable en JS y cómo podemos acceder a ellas. 

El Script es un Scope Global. 
Una Función tiene su propio Scope, se genera un Scope. 

Los Scopes se ejecutan de forma jerarquica, por lo que el que tiene preferencia sería el global, y luego las declaraciones incluidas dentro del Scope.

Cuando metemos () a una función la convertimos en una expresión, y la podemos ejecutar directamente. 
Una variable declarada en un Scope no puede ser accesible desde fuera de él. --> A este se le conoce cómo IIFE (Inmediately Invoked Function Expression).

Hoisting => Izar, elevar. Las funciones y las Variables se elevan y por lo tanto son accesibles en cualquier momento. A este efecto se le llama Hoisting. Que es un efecto debido a la compilación que tiene JS. 

Características del Let: 
1. Se ejecuta en la segunda lectura del Compilador. Por lo que no guarda igual que una variable. 
2. Nos guarda y nos recuerda que ya hemos declarado una variable.
3. Cuando declaramos con Let dentro de un if nos genera Scope. 

## Closures

Un "Closure" es la habilidad que tiene una función cuando es llamada de acceder al Scope dónde fue declarada.




