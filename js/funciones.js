    // funcion que genera un número aleatorio de una binomial 
    function binomialAleatorio(n, p) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (Math.random() < p) {
                count++;
            }
        }
        return count;
    }
    // funcion que selecciona de manera aleatoroia un valor de un arreglo 
    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    
    // funcion para llenar la tabla, siempre tendrá dos filas asi que el numero da datos a generar debe ser par 
    // funcion para llenar la tabla, siempre tendrá dos filas asi que el numero da datos a generar debe ser par 
    // funcion para llenar la tabla, siempre tendrá dos filas asi que el numero da datos a generar debe ser par 
// funcion para llenar la tabla, siempre tendrá dos filas asi que el numero da datos a generar debe ser par 
function llenarTabla(datos,idTabla) {
    const tableBody = document.getElementById(idTabla);
    const half = datos.length / 2;

    // Crear la primera fila
    const row1 = document.createElement("tr");
    for (let i = 0; i < half; i++) {
        const cell = document.createElement("td");
        cell.textContent = datos[i];
        row1.appendChild(cell);
    }

    // Crear la segunda fila
    const row2 = document.createElement("tr");
    for (let i = Math.ceil(half); i < datos.length; i++) {
        const cell = document.createElement("td");
        cell.textContent = datos[i];
        row2.appendChild(cell);
    }

    // Agregar las filas al cuerpo de la tabla
    tableBody.appendChild(row1);
    tableBody.appendChild(row2);
}

function sumaArreglo(arreglo){
    let suma=0; // acumuladora 
    let N=arreglo.length;
    for(i=0;i<N;i++){
      suma+=arreglo[i];
    }
  return suma;  
  }
 

  // función que genera un número aleatorio entre dos numeros enteros dados, para generar el tamaño de la muestra 

function NumeroAleatorioEntre(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  function redondearACuatroCifras(numero) {
    if (numero === 0) return 0;

    const factor = Math.pow(10, 4 - Math.ceil(Math.log10(Math.abs(numero))));
    return Math.round(numero * factor) / factor;
}


// función que obtiene la suma de los números de un arreglo 

function sumaArreglo(arreglo){
    let suma=0; // acumuladora 
    let N=arreglo.length;
    for(i=0;i<N;i++){
      suma+=arreglo[i];
    }
  return suma;  
  }

// función que obtiene la suma de los números de un arreglo 

function sumaCuadradoArreglo(arreglo){
    let suma=0; // acumuladora 
    let N=arreglo.length;
    for(i=0;i<N;i++){
      suma+=arreglo[i]**2; 
    }
  return suma;  
  }

  


