
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

// función que obtiene la suma de los números

function sumaArreglo(arreglo){
  let suma=0; // acumuladora 
  let N=arreglo.length;
  for(i=0;i<N;i++){
    suma+=arreglo[i];
  }
return suma;  
}


/* 
función que recibe un vector de datos y calcula la mediana 
y ademas entrega toda la información del proceso de cálculo 
regresa un vector 
*/

function calculaMediana(datos){
    let resultado = new Array(5);
    const N=datos.length;
    const  datosOr=datos.sort((a, b) => a - b); 

    if(N%2==0){
        resultado[0]=" par ";
        resultado[1]=" las observaciones en las pósiciones "+`${N/2}`+" y " + `${N/2+1}` + ", luego promediarlas para obtener la mediana." ; 
        resultado[2]=" Estos datos son  "+`${datosOr[N/2]}` + " y " + `${datosOr[N/2+1]}` + " respectivamente.";    
        suma=datosOr[N/2] + datosOr[N/2+1];
        mediana=suma/2; 
        resultado[3]=" Luego, la mediana es \\( \\frac{"+`${datosOr[N/2]}`+ " + " + `${datosOr[N/2+1]}`+"}{2}=\\frac{"+`${suma}` + "}{2}="+`${mediana}`+"\\) " ; 
        resultado[4]=mediana ;
        }else{
            resultado[0]=" impar "
            resultado[1]=" la observación en la pósición "+`${(N+1)/2}` + " y ese sería en valor de la mediana" ;
            resultado[2]=" esta observación corresponde a "+`${datosOr[(N+1)/2]}`+"."; 
            mediana=datosOr[(N+1)/2];  
            resultado[3]=" Luego, la mediana es " + `${datosOr[(N+1)/2]}`; 
            resultado[4]=mediana ;
        } ;
        return resultado;

}


// función que genera un número aleatorio entre dos numeros enteros dados, para generar el tamaño de la muestra 

function NumeroAleatorioEntre(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }


// para escribir lo que significa el sub indice entre parentesis 
const EjemploPos=NumeroAleatorioEntre(1,9);

 
 const NumeroEjemploPos2 = document.getElementById("NumeroEjemploPos2");
 const abreLaTeX="\\( X_{( ";
 const cierraLaTeX=" )} \\)";
 NumeroEjemploPos2.textContent = `${abreLaTeX} ${EjemploPos} ${cierraLaTeX}`;  
 const NumeroEjemploPos = document.getElementById("NumeroEjemploPos");
 NumeroEjemploPos.textContent = `${EjemploPos}`;  


// tamaño de la muestra para el ejemplo 
const Tmuestra=NumeroAleatorioEntre(9,21); 
// tamaño de la muestra para el ejercicio  
const TmuestraEjer=NumeroAleatorioEntre(9,21); 

console.log(Tmuestra);
//console.log(parOimpar(Tmuestra));

// parámetros para la binomial que genera los datos 
const ParNumEnsayos=NumeroAleatorioEntre(5,30)
// probabilidad de exito 
const ParametrosProbExito= [0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.8]; 
const ParProbExito = getRandomElement(ParametrosProbExito);

// generar los datos para el ejemplo 
let datosEjemploMediana = new Array(Tmuestra);
// generar los datos del ejemplo  
for(i=0;i<Tmuestra;i++){
    const result = binomialAleatorio(ParNumEnsayos, ParProbExito);  
    datosEjemploMediana[i]=result;
}  

// para generar y guardar los datos del ejercicio   
let datosEjerMediana = new Array(TmuestraEjer);
// generar los datos del ejerecicio 
const NumeroEnsayosEjer=NumeroAleatorioEntre(5,30) ; 
const ProbExitoEjer=getRandomElement(ParametrosProbExito)

for(i=0;i<TmuestraEjer;i++){
    const result = binomialAleatorio(NumeroEnsayosEjer,ProbExitoEjer);
    datosEjerMediana[i]=result; 
}


// coloca los datos del ejemplo de la mediana 
llenarTabla(datosEjemploMediana,"tablaEjemploMediana");  


const SpanNumeroDatos = document.getElementById("NDatosMediana"); 
console.log(SpanNumeroDatos); 
 SpanNumeroDatos.textContent = `${Tmuestra}`;  

// se determina si n es impar o par 
 const ComoEsN=calculaMediana(datosEjemploMediana)[0];  
 //console.log(ComoEsN); 
 // escribe si n es par o impar 
 const SpanParOImpar = document.getElementById("TexParOImpar");
 SpanParOImpar.style.backgroundColor = "lightskyblue";
 SpanParOImpar.textContent = ComoEsN; 
 
 // lo que se debe hacer en caso que n sea impar 
 const MensajeMediana=calculaMediana(datosEjemploMediana)[1];  

 
 // el procedimientio 
 const  VarProcedimiento=calculaMediana(datosEjemploMediana)[2]; 
 console.log(VarProcedimiento);   
 const SpamProcedimiento =  document.getElementById("Procedimiento"); 
 SpamProcedimiento.textContent=VarProcedimiento;  
 
 const  VarResultado=calculaMediana(datosEjemploMediana)[3]; 
 //console.log(VarResultado);   
 const SpamResultado =  document.getElementById("Resultado"); 
 SpamResultado.textContent=VarResultado;  
 

 // el resultado 
 console.log(calculaMediana(datosEjemploMediana)[3]); 

 
 const SpanQueHacerParOImpar= document.getElementById("QueHacerParoImpar");
 
 SpanQueHacerParOImpar.textContent = MensajeMediana; 


 // coloca los datos ordenados en una tabla 

 
 let datosEjemploMedianaOrdenados=datosEjemploMediana.sort((a, b) => a - b); 
 console.log("Datos ordenados"+datosEjemploMedianaOrdenados) ; 
 llenarTabla(datosEjemploMedianaOrdenados,"DatosOrdenados");  


// coloca los datos de el ejercicio en la tabla 

llenarTabla(datosEjerMediana,"tablaEjercicioMediana"); 
let randomNumber = calculaMediana(datosEjerMediana)[4];  

// para validar la respuesta 
// del usuario 
const guesses = document.querySelector(".guesses");
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");
      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");

      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = "Respuesta anterior:";
        }
        guesses.textContent = `${guesses.textContent} ${userGuess}`;
      
        if (userGuess === randomNumber) {
          lastResult.textContent = "Felicitaciones! La respuesta es correcta!";
          lastResult.style.backgroundColor = "powderblue";
          lowOrHi.textContent = "";
          setGameOver();
        } else if (guessCount === 3) {
          lastResult.textContent = "!!!INTENTOS AGOTADOS!!!";
          lowOrHi.textContent = "";
          setGameOver();
        } else {
          lastResult.textContent = "Incorrecto!";
          lastResult.style.backgroundColor = "red";
          if (userGuess < randomNumber) {
            lowOrHi.textContent = "Última respuesta demasiado pequeña!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Última respuesta demasiado grande!";
          }
        }
      
        console.log("Numero aleatorio ",randomNumber);
       
        console.log("Numero del usuario ",userGuess);
      
      
        guessCount++;
        guessField.value = "";
        guessField.focus();
      }
      guessSubmit.addEventListener("click", checkGuess);
      
      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Practica de nuevo";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
      }
      
      function resetGame() {
        guessCount = 1;
      
        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas) {
          resetPara.textContent = "";
        }
      
        resetButton.parentNode.removeChild(resetButton);
      
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        lastResult.style.backgroundColor = "white";
        //randomNumber = Math.floor(Math.random() * 100) + 1;
        location.reload(true);
      }



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

function mostrarAlerta(alertaDiv) {
    // Oculta todas las alertas primero
    

    // Muestra la alerta correspondiente
    alertaDiv.style.display = 'block';

    // Oculta la alerta después de 5 segundos
    setTimeout(function() {
        alertaDiv.style.display = 'none';
    }, 5000);
}

function ocultarAlertas(){
    document.querySelectorAll('.alert').forEach(function(alerta) {
        alerta.style.display = 'none';
    });
} 

function redondearACuatroCifras(numero) {
    if (numero === 0) return 0;

    const factor = Math.pow(10, 4 - Math.ceil(Math.log10(Math.abs(numero))));
    return Math.round(numero * factor) / factor;
} 