/* 1.EJERCICIO 1: CALLBACKS SECUENCIALES
Utilizando la función asyncRequest() realiza de forma secuencial peticiones para obtener
recurso1, recurso2 y recurso3, en ese orden. Cuando hayas obtenido los tres recursos debes
imprimir “¡Completado!” en la consola */


import { asyncRequest,/*  testFunction */ } from './asyncRequest.js';
/* 
testFunction(); */

function peticionesSecuenciales() {
    asyncRequest("resource1", function(result1) {
        console.log(result1);
        asyncRequest("resource2", function(result2) {
            console.log(result2);
            asyncRequest("resource3", function(result3) {
                console.log(result3);
                
                console.log("¡Completado!");
            });
        });
    });
}

peticionesSecuenciales();