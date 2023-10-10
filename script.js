var visor = document.getElementById("Visor");
var btnJug = document.getElementById("botonJugar");
var btnAgreg = document.getElementById("botonAgregar");
var btnVolver = document.getElementById("botonVolver");
var lista = document.getElementById("lista-jugadores");

var ronda = 0;
var prenda = -1 ;
var anterior = -2 ;
var anteayer = -3 ;
let players = [];
let historial = [];


var teclas = {
    INTRO : 13,
    SPACE : 32,
};

document.addEventListener("keydown", presionar);

function presionar(evento){
    switch (evento.keyCode) {
        case teclas.INTRO:
            evento.preventDefault();
            agregarNombres();
            break;
        // case teclas.SPACE:
        //     tirarPrendas();
        //     evento.preventDefault();
        //     break;
        default:
            break;
    }
}

eventListeners(); 
function eventListeners(){
    
    btnAgreg.addEventListener("click", agregarNombres);
    btnJug.addEventListener("click", tirarPrendas);
    btnVolver.addEventListener("click", atras);
    lista.addEventListener("click", borrarNombres);
    // document.addEventListener('DOMContentLoaded', agregarNombres);

    document.addEventListener('click', function (event) {

        // para ignorar cualquier click que no sea del exit
        if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
    
        // If there's an element in fullscreen, exit
        // Otherwise, enter it
        if (document.fullscreenElement) {
            document.exitFullscreen();
            document.getElementById("boton-pantalla").innerHTML = '↖↗<br>↙↘';
        } else {
            document.documentElement.requestFullscreen();
            document.getElementById("boton-pantalla").innerHTML = '↘↙<br>↗↖';
        }
    
    }, false);
}

//Service Worker
//###################################################
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }

//###################################################

saludo();
function saludo() { 
       fadeOut()

    setTimeout(()=>{
    }, 1000); 
   

    setTimeout(()=>{
        visor.innerHTML = "Quiénes se van a emborrachar? ";
        fadeIn()
    }, 3000); 
}

function agregarNombres(){

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-texto';
    botonBorrar.innerText = 'X';

    var jugadores = document.getElementById("jugadores").value;

    if(jugadores !== ""){     

        //chequear si el valor de la caja ya está en la lista
    
        if (players.includes(jugadores)){         
            visor.innerHTML = "Sin Repetir!!";
      
        }else{
            // Si no serepite el nombre se agrega el nuevo jugador
            document.getElementById("jugadores").value=""
            const li = document.createElement('li');
            li.innerText = jugadores;
            // añade el botón de borrar al nombre
            li.appendChild(botonBorrar);
            // añade el tweet a la lista
            lista.appendChild(li); 
            players.push(jugadores);
            btnAppear();
        };

    };


};

function borrarNombres(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-texto') {
        let pos = e.target.parentElement.childNodes[0].data;
        pos = players.indexOf(pos);
        players.splice(pos, 1);
        e.target.parentElement.remove();

    } 
};

var reloj = '<span id="reloj">15</span>';
var segundo = 16;
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
    
    var cronometro = !!document.getElementById("reloj");
    if (segundo > 0) {
        segundo--;  
        if(cronometro == true){
        document.getElementById("reloj").innerHTML = segundo;
        }
    }
}


function tirarPrendas(){
    segundo = 16;
    fadeOut();
    clearInterval(identificadorIntervaloDeTiempo);
    repetirCadaSegundo();

  console.log(prenda);
console.log(anterior);
console.log(anteayer);  

var numUno = '<span id="sorteado">'+ [Math.floor(Math.random() * 10) + 11] +'</span>';
var numDos = '<span id="sorteado">'+ [Math.floor(Math.random() * 7) + 3 ] +'</span>';
var numTres = '<span id="sorteado">'+ [Math.floor(Math.random() * 140) + 10 ] +'</span>';
var numCuatro = '<span id="sorteado">'+ [Math.floor(Math.random() * 140) + 10 ] +'</span>';
    
var randomPlayer = '<span id="sorteado">'+ lista.childNodes[Math.floor(Math.random() * lista.childElementCount)].firstChild.data +'</span>';
var randomPlayer2 = '<span id="sorteado">'+ lista.childNodes[Math.floor(Math.random() * lista.childElementCount)].firstChild.data +'</span>';


    while (randomPlayer2 == randomPlayer && lista.childElementCount >1 ){ 
        randomPlayer2 = '<span id="sorteado">'+ lista.childNodes[Math.floor(Math.random() * lista.childElementCount)].firstChild.data +'</span>';
    }

/*
################################################################################################
######################################----PRENDAS----###########################################
#############################################v##################################################
*/
    var prendas = [

        "Los que tengan el celu en la mano TOMAN!",        
        randomPlayer + " tu copa tiene hielo? Si no mandale uno y TOMA!",
        "Si " + randomPlayer + " y " + randomPlayer2 +  " se sentaron al lado TOMAN!",
        "Si " + randomPlayer + " tiene las piernas cruzadas TOMA!",
        randomPlayer + " toma un shot!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numUno + " por " + numDos + " o TOMA!" + reloj,
        "REGLA: El proximo que putea TOMA!",
        randomPlayer + " tiene que hacer 10 flexiones o TOMA!",
        randomPlayer + " elige quien toma!",
        randomPlayer + " y " + randomPlayer2 +  " mirense a los ojos, quien parpadee primero TOMA!",
        randomPlayer + ", si tenes reloj fijate que es hora de TOMAR!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numDos + " mas " + numTres + " menos " + numUno + " o TOMA!" + reloj,
        randomPlayer + " zafa la poxima vez que le toque tomar.",
        randomPlayer + " tiene que twerquear 10 veces o TOMA!",
        randomPlayer + " tiene 15 segundos para decir una frase de Los Simpsons o TOMA!" + reloj,
        randomPlayer + " tiene que silbar una cancion y " + randomPlayer2 +  " tiene que adivinar cual es o TOMAN!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numDos + " por su edad o TOMA!" + reloj,
        "Si " + randomPlayer + " se está tocando la cara TOMA!",
        randomPlayer + " tira una moneda, cara TOMA! Cruz toma AGUA!",
        randomPlayer + " tiene que hacer 10 abdominales o TOMA!",
        randomPlayer + " y " + randomPlayer2 +  " mirense a los ojos, quien se ría primero TOMA!",
        randomPlayer + " le plantea a " + randomPlayer2 +  " un VERDAD o CONSECUENCIA",
        "REGLA: A quien le suene el celular TOMA!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numUno + " por el número de jugadores o TOMA!" + reloj,
        randomPlayer + " y " + randomPlayer2 +  ", piedra papel y tijeras. Quien pierda TOMA!",
        randomPlayer + " TOMA en lugar de " + randomPlayer2 +  " la proxima vez que le toque",
        randomPlayer + " TOMA! pero si tomó en la ronda anterior entonces TOMA quien esté a su izquierda.",
        "El ultimo que fue al baño TOMA!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numTres + " menos su edad o TOMA!" + reloj,
        randomPlayer + " TOMA! pero si tomó en la ronda anterior entonces TOMA quien esté a su derecha.",
        "Si " + randomPlayer + " está de pie que TOME para no cansarse.",
        randomPlayer + " y " + randomPlayer2 +  " TOMAN!",
        "REGLA: El proximo que bosteza TOMA!",
        randomPlayer + " tiene 15 segundos para decir cuanto es " + numTres + " mas " + numCuatro + " o TOMA!" + reloj,
        randomPlayer + " tiene que decir su apellido al revez o TOMA!",
        randomPlayer + " y " + randomPlayer2 +  ", quien tenga más años, TOMA!",
        "El ultimo en pararse TOMA!",
        randomPlayer + " y " + randomPlayer2 +  " quien mida mas TOMA!",
        randomPlayer + " mandale un mensaje a tu EX o TOMA!",
        "Quienes tuvieron covid19 TOMAN!",
        "Las mujeres TOMAN!",
        "Los hombres TOMAN!",
        "Los solteros TOMAN!",
        randomPlayer + " dice un 'yo nunca', los que lo hicieron TOMAN!",
        "Todos tomen AGUA!",
        randomPlayer + " publica ahora mismo una selfie de este momento o TOMA!",
        "TODOS TOMAN!",
        randomPlayer + " hace fondo blanco!",
        randomPlayer + " toma AGUA!",
        randomPlayer + " y " + randomPlayer2 +  ", quien tenga más años, TOMA!",
        randomPlayer + " y " + randomPlayer2 +  ", quien tenga menos años, TOMA!",
        randomPlayer + " y " + randomPlayer2 +  ", se besan o TOMAN!",
        randomPlayer + " se quita la camiseta o TOMA!",
        "Todos tomen AGUA!",
        "Quien tenga más años, TOMA!",
        "Quien tenga menos años, TOMA!",
        "El proximo en cumplir años TOMA!",
        "Quien puso la casa TOMA!",
        "Quienes mañana no trabajan aprovechan y TOMAN!",
        "Todos tomen AGUA!",
        randomPlayer + " te veo muy en pedo, fondo blanco de AGUA!",


        //FIN
        "No están ya muy en pedo?",
        
    ];
/*
################################################################################################
################################################################################################
################################################################################################
*/

   if(lista.innerHTML === ""){
        setTimeout(() => {
            visor.innerHTML = "Agregame nombres";
            fadeIn();  
        }, 2000);
       
    } else {        
        historial.push(visor.innerHTML);
        ronda++;




        if (ronda > (prendas.length/3)) {
                
            // prenda = Math.floor(Math.random() * prendas.length); 

            while(prenda == anterior){
                prenda = Math.floor(Math.random() * prendas.length);
            }

        }else{
            // prenda = Math.floor(Math.random() * ronda);
            do {prenda = Math.floor(Math.random() * (ronda*3));
            } while (prenda == anterior);
           
        }

        setTimeout(() => {
            visor.innerHTML = prendas[prenda];
            fadeIn();
            anterior = prenda;
        
        }, 1000);
         
        document.getElementById("botonVolver").classList.remove("nomostrar");    
        document.getElementById("botonVolver").classList.add("mostrar");

    }
    
}

function atras(){
    fadeOut();
    if(ronda > 1){

setTimeout(() => {
    visor.innerHTML = historial[historial.length- 1];
    fadeIn();
    ronda --;
    historial.pop();
}, 1000);

     } else {
         document.getElementById("botonVolver").classList.remove("mostrar");    
         document.getElementById("botonVolver").classList.add("nomostrar");
     }
};

function btnAppear(){
    fadeOut();
    setTimeout(() => {
      visor.innerHTML = "Listos?";  
      fadeIn();
    }, 500);
    
    document.getElementById("Participantes").classList.remove("nomostrar");    
    document.getElementById("Participantes").classList.add("mostrar");
    document.getElementById("botonAgregar").classList.remove("nomostrar");    
    document.getElementById("botonAgregar").classList.add("mostrar");
    document.getElementById("botonJugar").classList.remove("nomostrar");    
    document.getElementById("botonJugar").classList.add("mostrar");
};

function fadeOut() {
    visor.style.opacity = '0%';
//     setTimeout(() => {
//         visor.style.opacity = '1%';
//     }, 1000);
};

function fadeIn() {
    visor.style.opacity = '100%'; 
    // setTimeout(() => {
    //    visor.style.opacity = '100%'; 
    // }, 1000);
};



