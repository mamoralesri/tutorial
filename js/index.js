
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
            for (let i = half; i < datos.length; i++) {
                const cell = document.createElement("td");
                cell.textContent = datos[i];
                row2.appendChild(cell);
            }

            // Agregar las filas al cuerpo de la tabla
            tableBody.appendChild(row1);
            tableBody.appendChild(row2);
        }


// posibles tamaños de muestra 
const numeros = [6, 8, 10, 12, 14];
// tamaño de la muestra para el ejemplo  
const NumDat = getRandomElement(numeros);
// tamaño de la muestra para el ejercicio 
const NumDatEjer = getRandomElement(numeros);
// tamaño de la muestra para el ejemplo de varianza 
const NumDatVar = getRandomElement(numeros);



// Ejemplo de uso:
const n = 10;   // Número de ensayos
const p = 0.5;  // Probabilidad de éxito en cada ensayo
// para generar y guardar los datos del ejemplo  
let datos = new Array(NumDat);
// generar los datos del ejemplo  
for(i=0;i<NumDat;i++){
    const result = binomialAleatorio(n, p); 
    datos[i]=result;
}  

// para generar y guardar los datos del ejercicio   
let datosEjer = new Array(NumDatEjer);
// generar los datos del ejemplo  
for(i=0;i<NumDatEjer;i++){
    const result = binomialAleatorio(n, p);
    datosEjer[i]=result; 
} 



// función que obtiene la suma de los datos 

function sumaArreglo(arreglo){
  let suma=0; // acumuladora 
  let N=arreglo.length;
  for(i=0;i<N;i++){
    suma+=arreglo[i];
  }
return suma;  
}


//function escribirValor(valor,idParrafo){
//document.getElementById(idParrafo).textContent = valor;
//}
function escribirValor(valor,idParrafo){
     document.getElementById(idParrafo).innerHTML=`${valor}`;
    } 


 // Llamar a la función para poblar la tabla
llenarTabla(datos,"tableBody"); 

// imprime la suma 
let Suma=sumaArreglo(datos);
let promedio=Suma/NumDat

escribirValor(NumDat,"NDatos"); 
escribirValor(Suma,"SumaDatos");
escribirValor(NumDat,"NDBis");
escribirValor(Suma,"SDBis");
escribirValor(promedio,"MediaDatos");  
// escribir valores de suma y promedio del ejercicio para verificar 
let SumaEjer=sumaArreglo(datosEjer);
let PromEjer=sumaArreglo(datosEjer)/NumDatEjer;

escribirValor(SumaEjer,"SumaDatosEjer");
escribirValor(PromEjer,"PromedioDatosEjer");  



// para llenar la tabla con datos del ejercicio 

 // Llamar a la función para poblar la tabla de los datos del ejercicio 
 llenarTabla(datosEjer,"tablaEjercicio"); 
 //llenarTabla(datosEjer,"tableBodyVar"); 


/*
este bloque de codigo da las alertas: si la respuesta  es correcta se manda una felicitación en verde  
si es incorrecta se manda un mensaje en rojo  
*/
document.getElementById('CapturaRespuesta').addEventListener('submit',function(event){
    event.preventDefault(); 
    const suma = document.getElementById('Suma').value.trim();
    const media = document.getElementById('Promedio').value.trim();
    const alertaExito = document.getElementById('alertaExito');
    const alertaError = document.getElementById('alertaError');
    const alertaExitoPromedio = document.getElementById('alertaExitoPromedio');
    const alertaErrorPromedio = document.getElementById('alertaErrorPromedio'); 
    console.log("Valor digitado suma " + suma );
    console.log("Valor digitado media " + media );
    console.log("Promedio   " + redondearACuatroCifras(sumaArreglo(datos)/NumDat  )  );
    ocultarAlertas()
    if(suma==sumaArreglo(datosEjer)){
        mostrarAlerta(alertaExito);   
        }else{
            mostrarAlerta(alertaError);
        }
    if(media==(redondearACuatroCifras(sumaArreglo(datosEjer)/NumDatEjer  )) ){
            mostrarAlerta(alertaExitoPromedio);   
            }else{
                mostrarAlerta(alertaErrorPromedio);
            }
});


// Para mostrar las alertas 

function mostrarAlerta(alertaDiv) {
    // Oculta todas las alertas primero
    
    // Muestra la alerta correspondiente
    alertaDiv.style.display = 'block';

    // Oculta la alerta después de 5 segundos
    setTimeout(function() {
        alertaDiv.style.display = 'none';
    }, 5000);
}

// para ocultar las alertas 

function ocultarAlertas(){
    document.querySelectorAll('.alert').forEach(function(alerta) {
        alerta.style.display = 'none';
    });
} 

// redondear a cuatro cifras decimal 

function redondearACuatroCifras(numero) {
    if (numero === 0) return 0;

    const factor = Math.pow(10, 4 - Math.ceil(Math.log10(Math.abs(numero))));
    return Math.round(numero * factor) / factor;
}


// respuestaSuma= parseFloat(prompt("La suma de los datos es : "));  