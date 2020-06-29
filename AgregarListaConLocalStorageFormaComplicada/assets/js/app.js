var form = document.querySelector('form')
var ul = document.querySelector('ul')
var button = document.querySelector('submit')
var Texto = document.getElementById('tweet')


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
    const li = document.createElement('li')

    li.textContent = text
    ul.appendChild(li)
var button = document.createElement("button");
button.innerHTML = "Delete";
button.onclick=remove(this)
ul.appendChild(button);
ul.appendChild(li);

  }
  
  form.addEventListener('submit', function(e) {
    e.preventDefault()
  
    itemsArray.push(Texto.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(Texto.value)
    Texto.value = ''
  })
  
  data.forEach(item => {
    liMaker(item)
  })
  
  button.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
  })
  function BorrarStorage(){
    ul.innerHTML = "";

    localStorage.clear();
  }


function remove(tweet) { 
  tweet.parentNode.parentNode.removeChild(link.parentNode);
}