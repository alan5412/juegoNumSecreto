
let numeroSecreto = 0;
let intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero en: ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTexto('p','El numero es menor')
        }else{
            asignarTexto ('p','El numero es mayor')
        }

        intentos++;
        limpiarBoton();
    }
    return;
}

function numeroRandom(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTexto('p', 'Ya se sortearon todos los numeros posibles')
    }else{
    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return numeroRandom();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarBoton(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(){
    asignarTexto('h1', 'Juego del numero secreto!!');
    asignarTexto('p',`Elige Un Numero del 1 al ${numeroMaximo}!`);
    numeroSecreto = numeroRandom();
    intentos = 1;

}

function reiniciarJuego(){
    limpiarBoton();
    condicionesIniciales(); 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

//dev by AlanCamarena, for ORACLEone-Alura.