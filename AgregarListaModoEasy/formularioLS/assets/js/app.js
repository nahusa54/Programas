
  const ListaTweets= document.getElementById('lista-tweets');



EventListener();

function EventListener(){

document.querySelector('#formulario').addEventListener('submit',agregarTweet);

ListaTweets.addEventListener('click', BorrarTweet);

document.addEventListener("DOMContentLoaded", localStorageListo);
}




function agregarTweet(e){
  e.preventDefault();
// leo tweets
let Tweet = document.getElementById('tweet').value;




// Creo boton para eliminar
const Botton = document.createElement('a');
Botton.classList = 'borrar-tweet';

Botton.innerText = 'X'; 

// Crear elemeto y añardirle el contenido a la lista
const Lista = document.createElement('li');
Lista.innerText= Tweet;
// añade el boton de borrar el tweet
Lista.appendChild(Botton);
// añade el tweet a la lista
ListaTweets.appendChild(Lista);

agregarTweetAlocalStorage((Tweet));
}
function BorrarTweet(e){

    e.preventDefault();
    
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('Tweet Eliminado');
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }

}
function agregarTweetAlocalStorage(tweet){
let tweets;

tweets=obtenerTweetsLocalStorage();
//agregar a localstorage
tweets.push(tweet);





localStorage.setItem('Tweets',JSON.stringify(tweets));

}


function obtenerTweetsLocalStorage(){
let Tweets;

if(localStorage.getItem('Tweets') === null){
  console.log("entro a vacio");
    tweets = []
}
else  {
  console.log(Tweets);
tweets = JSON.parse(localStorage.getItem('Tweets'));
}


return tweets;
}

function localStorageListo(){
let tweets;
console.log("asfdasd");
tweets = obtenerTweetsLocalStorage();

tweets.forEach(function(Tweet) {

  const Botton = document.createElement('a');
  Botton.classList = 'borrar-tweet';
  
  Botton.innerText = 'X'; 
  
  // Crear elemeto y añardirle el contenido a la lista
  const Lista = document.createElement('li');
  Lista.innerText= Tweet;
  // añade el boton de borrar el tweet
  Lista.appendChild(Botton);
  // añade el tweet a la lista
  ListaTweets.appendChild(Lista);
  console.log("asfdasd");
});


}
function borrarTweetLocalStorage(tweet){

let tweets, tweetborrar;

tweetborrar = tweet.substring(0,tweet.length - 1);
tweets =  obtenerTweetsLocalStorage();


tweets.forEach(function(tweet, index){
if(tweetborrar === tweet){

  tweets.splice(index, 1);

}

})


localStorage.setItem('Tweets',JSON.stringify(tweets));

}