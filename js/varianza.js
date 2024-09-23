
// tamaño de la muestra para el ejemplo varianza  
const Tmuestra=NumeroAleatorioEntre(5,12); 
// tamaño de la muestra para el ejercicio  
const TmuestraEjer=NumeroAleatorioEntre(5,12); 

// mostrar en la consola 
// console.log("Ejemplo ",Tmuestra,"Ejercicio ", TmuestraEjer);

// parámetros para la binomial que genera los datos 
const ParNumEnsayos=NumeroAleatorioEntre(5,30)
// probabilidad de exito 
const ParametrosProbExito= [0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.8]; 
const ParProbExito = getRandomElement(ParametrosProbExito);
// mostrar en la consola 
//console.log("Número de ensayos para ejemplo  ",ParNumEnsayos,"Prob de éxito para ejemplo  ", ParProbExito);

// generar los datos 
let datosEjemploVar = new Array(Tmuestra);
// generar los datos del ejemplo  
for(i=0;i<Tmuestra;i++){
    const result = binomialAleatorio(ParNumEnsayos, ParProbExito);  
    datosEjemploVar[i]=result;
}  
// mostrar en la consola 
//console.log('Datos para el ejemplo ',datosEjemploVar); 

// para generar y guardar los datos del ejercicio   
let datosEjerVar = new Array(TmuestraEjer);
// generar los datos del ejerecicio 
const NumeroEnsayosEjer=NumeroAleatorioEntre(5,30) ; 
const ProbExitoEjer=getRandomElement(ParametrosProbExito)
//console.log("Número de ensayos para ejercicio ",NumeroEnsayosEjer,"Prob de éxito para ejercicio ", ProbExitoEjer);

//NumeroAleatorioEntre(5,30) 
for(i=0;i<TmuestraEjer;i++){
    const result = binomialAleatorio(NumeroEnsayosEjer,ProbExitoEjer);
    datosEjerVar[i]=result; 
}

// mostrar en consola 
//console.log(datosEjerVar); 

// coloca los datos del ejemplo de la mediana 
llenarTabla(datosEjemploVar,'tabla-ejemplo-varianza');   


// colocar el tamaño de la muestra para el ejemplo 
const NumeroDatosEjemplo= document.getElementById('n-datos-var'); 
NumeroDatosEjemplo.textContent = `${Tmuestra}`; 


// calcula la suma de los datos del ejemplo 
const sumadatosejemplo=sumaArreglo(datosEjemploVar);  
// calcula la media 
const mediadatosejemplo=sumadatosejemplo/Tmuestra;   
// coloca la suma de los datos en el doc 
const SumaDatosEjemplo= document.getElementById('suma-datos-ejemplo'); 
SumaDatosEjemplo.textContent = `${sumadatosejemplo}`;  

// coloca la media de los datos en el doc 
const MediaDatosEjemplo= document.getElementById('media-datos-ejemplo');  
MediaDatosEjemplo.textContent = `${redondearACuatroCifras(mediadatosejemplo)}`;  


function cuadradosdiferencias(datos,idTabla) {
    // calculamos la media 
    const n=datos.length; 
    const media=sumaArreglo(datos)/n;
    const tableBody = document.getElementById(idTabla);
    // Crear la primera fila
    let sumadiferenciasalcuadrado=0;

    for (let i = 0; i <  n; i++) {
        const row1 = document.createElement("tr"); 
        row1.align="right"; 
        const cell1 = document.createElement("td");
        cell1.textContent =i+1;
        row1.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = datos[i]; 
        row1.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = redondearACuatroCifras(datos[i]-media); 
        row1.appendChild(cell3);

        const cell4= document.createElement("td");
        cell4.textContent =redondearACuatroCifras(  (datos[i]-media)**2); 
        sumadiferenciasalcuadrado+=(datos[i]-media)**2
        row1.appendChild(cell4);
        tableBody.appendChild(row1);
    }

    const rowfinal= document.createElement("tr"); 
    const celda1=document.createElement("td") ;
    celda1.colSpan="3" ;
    celda1.style.textAlign="right" ; 
    celda1.textContent="\\(\\sum (y_i-\\bar{y})^2 \\to \\)";
    rowfinal.appendChild(celda1);

    const celda4=document.createElement("td") ;
    celda4.textContent=redondearACuatroCifras(sumadiferenciasalcuadrado) ;
    celda4.align="right" ;
    rowfinal.appendChild(celda4);
    tableBody.appendChild(rowfinal);  
    // Agregar las filas al cuerpo de la tabla
    
}

// se llena la tabla con las diferencias y los cuadrados de las diferencias 
cuadradosdiferencias(datosEjemploVar,'tabla-datos-dif-dif-al-cuadrado')


// se obtiene el vector de diferencias 

let diferencias = new Array(datosEjemploVar.length);
let diferenciasalcuadrado = new Array(datosEjemploVar.length);
let sumadiferenciasalcuadrado=0;
const n=datosEjemploVar.length; 
for(let i=0; i<datosEjemploVar.length;i++){
    diferencias[i]=datosEjemploVar[i]-mediadatosejemplo;
    diferenciasalcuadrado[i]=diferencias[i]**2;
    sumadiferenciasalcuadrado+=diferenciasalcuadrado[i]; 
}
varianzaejemplo=sumadiferenciasalcuadrado/(n-1); 
//console.log("SCE ",redondearACuatroCifras(sumadiferenciasalcuadrado)); 

//console.log("Var ",redondearACuatroCifras(varianzaejemplo));  

const scd= document.getElementById('suma-de-cuadrados-diferencias');  
scd.textContent = `${"\\[S^2=\\frac{\\sum\\limits_{i=1}^n(y_i-\\bar{y})^2}{n-1}=\\frac{"+redondearACuatroCifras(sumadiferenciasalcuadrado)+"}{"+(n-1)+"}="+redondearACuatroCifras(varianzaejemplo)+"\\]"}`;   

// coloca los datos del ejercicio de la varianza  
llenarTabla(datosEjerVar,'tabla-ejercicio-varianza');  

// calcula la suma de los datos del ejemplo 
const mediadatosejercicio=sumaArreglo(datosEjerVar)/datosEjerVar.length;

let diferenciasejercicio = new Array(datosEjerVar.length);
let diferenciasalcuadradoejercicio = new Array(datosEjerVar.length);
let sumadiferenciasalcuadradoejercicio=0;
const nejercicio=datosEjerVar.length; 
for(let i=0; i<datosEjerVar.length;i++){
    diferencias[i]=datosEjerVar[i]-mediadatosejercicio;
    diferenciasalcuadradoejercicio[i]=(datosEjerVar[i]-mediadatosejercicio)**2;
    sumadiferenciasalcuadradoejercicio+=(datosEjerVar[i]-mediadatosejercicio)**2; 
}
let varianzaejercicio=sumadiferenciasalcuadradoejercicio/(nejercicio-1);  

//console.log("SCE ",redondearACuatroCifras(sumadiferenciasalcuadradoejercicio));
//console.log("Var ejercicio ",redondearACuatroCifras(varianzaejercicio));  


function compararNumerosSCE() {
    // Obtener el valor ingresado por el usuario
    const valorIngresado = document.getElementById('respuesta-ingresada').value; 

    // Convertir el valor ingresado a número (ya que viene como cadena)
    const valorNumerico = Number(valorIngresado); 

    // Comparar los valores
    if (valorNumerico === redondearACuatroCifras(sumadiferenciasalcuadradoejercicio)) {
        document.getElementById("resultado-sce").textContent = "Felicitaciones, respuesta correcta";
        document.getElementById("resultado-sce").style.backgroundColor = "powderblue";
    } else {
        document.getElementById("resultado-sce").textContent = "Lo siento, respuesta incorrecta, sigue practicando";
        document.getElementById("resultado-sce").style.backgroundColor = "red";
    }
}

function compararNumerosVar() {
    // Obtener el valor ingresado por el usuario
    const valorIngresado = document.getElementById('respuesta-varianza').value; 

    // Convertir el valor ingresado a número (ya que viene como cadena)
    const valorNumerico = Number(valorIngresado); 

    // Comparar los valores
    if (valorNumerico === redondearACuatroCifras(varianzaejercicio)){
        document.getElementById("resultado-var").textContent = "Felicitaciones, respuesta correcta";
        document.getElementById("resultado-var").style.backgroundColor = "powderblue";
    } else {
        document.getElementById("resultado-var").textContent = "Lo siento, respuesta incorrecta, sigue practicando";
        document.getElementById("resultado-var").style.backgroundColor = "red"; 
    }
}





