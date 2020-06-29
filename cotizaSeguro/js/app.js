class Seguro{
    constructor(marca,anio,tipo){
this.marca = marca;
this.anio  = anio;
this.tipo  = tipo;
}
};

// Listeners
cargarEventListeners();

function cargarEventListeners() {

  
    inicioprograma();
    document.querySelector('#formulario').addEventListener('submit',enviarFormulario);



}


function inicioprograma(){
   
const max = new Date().getFullYear(),
     min = max-21;
     

     const Anio = document.getElementById('anio');
     console.log("a123sd");
for(let i = max;i>min;i--){
       
console.log(i);
let option = document.createElement('option');
option.value=i;
option.innerHTML=i;
Anio.appendChild(option);


     }}

function enviarFormulario(){
console.log("asd");
new Seguro= Seguro(document.getElementById('marca'),ocument.getElementById('anio'),)


}