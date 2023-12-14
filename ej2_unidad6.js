/* 2.EJERCICIO 2: CALLBACKS PARALELOS
Utilizando la función asyncRequest() realiza de forma simultánea peticiones para obtener
recurso1, recurso2 y recurso3.
Debes imprimir el contenido de cada recurso en orden y lo antes posible. Cuando se hayan
obtenido los tres recursos debes imprimir “¡Completado!” en la consola.
Esto es un ejemplo de cómo se podrían recibir los datos y qué tendría que imprimirse por pantalla:
Datos recibidos Impreso en consola
resource2 (No se imprime nada ya que aún no tenemos
el resultado de resource1)
resource1 The first resource
The second resource
resource3 The third resource
¡Completado! */

import { asyncRequest, DEFAULT_RESOURCES } from './asyncRequest.js';   



  function peticionesParalelas() {
    let resultados = [];
    let contador = 0; // Contador para rastrear cuántos recursos se han cargado.
  
    const mostrarResultados = () => {
      contador++;
      if (contador === resultados.length) {
        resultados.forEach(resultado => console.log(resultado));
        console.log("¡Completado!");
      }
    };



 /*  const mostrarResultados = () => {
    if (resultados[0] && resultados[1] && resultados[2]) {
      console.log(resultados[0]); 
      console.log(resultados[1]); 
      console.log(resultados[2]);
      console.log("¡Completado!");
    }
  };
 */
 /*  asyncRequest("resource1", (recurso1) => {
    resultados[0] = recurso1; 
    mostrarResultados();
  });

  asyncRequest("resource2", (recurso2) => {
    resultados[1] = recurso2; 
    mostrarResultados();
  });

  asyncRequest("resource3", (recurso3) => {
    resultados[2] = recurso3;
    mostrarResultados();
  }); */

/*   const nombresRecursos = ["resource1", "resource2", "resource3"]; */
/* const nombresRecursos = Object.keys(DEFAULT_RESOURCES); */
const nombresRecursos = Object.keys(DEFAULT_RESOURCES).filter(key => key.includes("resource"));

  nombresRecursos.forEach((nombreRecurso, index) => {
    asyncRequest(nombreRecurso, (resultado) => {
      resultados[index] = resultado; 
      mostrarResultados(); 
    });
  });
}


peticionesParalelas();
