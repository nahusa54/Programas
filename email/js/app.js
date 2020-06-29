const para = document.getElementById('email');
const asunto =document.getElementById('asunto');
const mensaje =document.getElementById('mensaje');
const  btnEnviar =document.getElementById('enviar');
const Formulario=document.getElementById('enviar-mail');
const reset=document.getElementById('resetBtn');
eventListeners();

function eventListeners() {

document.addEventListener('DOMContentLoaded',inicioApp);


        // campos del formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    

btnEnviar.addEventListener('click', enviarEmail);
reset.addEventListener('click', resetFor)
}

function inicioApp() {
    console.log("Cargado");
    btnEnviar.disabled=true;
   
}



function validateEmail(campo) {
   const mensaje = campo.value;


   if(mensaje.indexOf('@')!== -1 ){
    campo.style.borderBottomColor='green';
    campo.classList.remove('error');
    
    
    
    }else{
    
        campo.style.borderBottomColor='red';
        campo.classList.add('error');
    
    }
    

}

//validar campo

function validarCampo(){
    
    //se valida la longitud y que no este vacio
    validarLongitud(this);

    if(this.type === 'email'){

        validateEmail(this);

    }
    let errores = document.querySelectorAll('.error')
    if(email.value!=='' && asunto.value!=='' && mensaje.value !==''){
       
       if(errores.length===0){
        btnEnviar.disabled=false;}
    }
}


function validarLongitud(campo){

if(campo.value.length>0){
campo.style.borderBottomColor='green';
campo.classList.remove('error');



}else{

    campo.style.borderBottomColor='red';
    campo.classList.add('error');

}

}

function enviarEmail(e){

    //spinner load

    const spinnerGif=document.querySelector('#spinner');
    spinnerGif.style.display='block';

    //gif enviar email 
    const enviado = document.createElement('img');
    enviado.src='img/mail.gif';
    enviado.style.display='block';

    //Ocultar Spinner y mostrar gif de enviado

    setTimeout(function(){


        spinnerGif.style.display='none';
        document.querySelector('#loaders').appendChild(enviado);
    
    setTimeout(function(){
        Formulario.reset
        document.getElementById("enviar-mail").reset();

    },5000);
    
    
    },3000);
e.preventDefault();


}


function resetFor(e){
e.preventDefault();
    document.getElementById("enviar-mail").reset();

}