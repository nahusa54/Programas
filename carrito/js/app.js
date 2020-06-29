const Carrito= document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const VaciarCarrito = document.getElementById('vaciar-carrito');




cargarEventListListeners();
function cargarEventListListeners(){

// cuando tocas agregar carrito
cursos.addEventListener('click',agregarCarrito);


Carrito.addEventListener('click',eliminarcurso);


VaciarCarrito.addEventListener('click',VaciarCarritoF);

//al cargar la pag que se cargue localstorage
 document.addEventListener('DOMContentLoaded',LeerLocalStorage);

}

function agregarCarrito(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){


        const curso = e.target.parentElement.parentElement;
        
        LeerDatosCursos(curso);
    }
  } 


  function LeerDatosCursos(curso){
 const infocurso={
 imagen: curso.querySelector('img').src,
 titulo: curso.querySelector('h4').textContent,
 precio: curso.querySelector('.precio span').textContent,
id: curso.querySelector('a').getAttribute('data-id')

 }
   insertarCarrito(infocurso);
   


}
function insertarCarrito(curso){

const row = document.createElement('tr');
row.innerHTML= `
          <td>
        <img src="${curso.imagen}">
          </td>
          <img stc="${curso.imagen}">
          <td>${curso.titulo}</td>
          <td>${curso.precio}</td>
          
          <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}
                ">X</a>
          </td>

          `;
        console.log(listaCursos);
        
        listaCursos.appendChild(row);
        GuardarCursoEnLocalStorage(curso);

}
//eliminar carrito
function eliminarcurso (e){

e.preventDefault();

let curso,cursoID;


if(e.target.classList.contains('borrar-curso')){
  console.log("ELIMINAR");
  e.target.parentElement.parentElement.remove();

  curso=e.target.parentElement.parentElement;

  cursoID=curso.querySelector('a').getAttribute('data-id');

  

}

eliminarCursoLocalStorage(cursoID);


}
//Vaciar Carrito
function VaciarCarritoF(e){

e.preventDefault();

console.log("ENTRO A VACIAR");
while(listaCursos.firstChild){

listaCursos.removeChild(listaCursos.firstChild);
console.log("asd");
}
return false;
}

function GuardarCursoEnLocalStorage(Curso){

let cursos;

cursos = ObtenerCursosLocalStorage();

console.log(cursos);
//curso se agrega al array
cursos.push(Curso);

localStorage.setItem('cursos', JSON.stringify(cursos))


}
//Obtenes Cursos de localStorage y tambien se fija si esta vacio
function ObtenerCursosLocalStorage(){

let cursosLS;
//nos fijamos si esta vacia
if(localStorage.getItem('cursos')===null){

cursosLS=[];

}
else
{

cursosLS=JSON.parse( localStorage.getItem('cursos'));


}
return cursosLS

}
//carga local storage al  carrito
function LeerLocalStorage(){
let cursosLS;

cursosLS=ObtenerCursosLocalStorage();


console.log(cursosLS);

cursosLS.forEach(function(curso){


  const row = document.createElement('tr');
  row.innerHTML= `
            <td>
          <img src="${curso.imagen}">
            </td>
            <img stc="${curso.imagen}">
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            
            <td>
                  <a href="#" class="borrar-curso" data-id="${curso.id}
                  ">X</a>
            </td>
  
            `;
          console.log(listaCursos);
          
          listaCursos.appendChild(row);
  
});

}

function eliminarCursoLocalStorage(curso) {
  let cursosLS;


  curso = curso.replace(/\s/g, '');
  // Obtenemos el arreglo de cursos
  cursosLS = ObtenerCursosLocalStorage();
  // Iteramos comparando el ID del curso borrado con los del LS
  cursosLS.forEach(function(cursoLS, index) {
      if(cursoLS.id === curso) {
          cursosLS.splice(index, 1);
      }
  });
  // Añadimos el arreglo actual a storage
  localStorage.setItem('cursos', JSON.stringify(cursosLS) );
}


