
// drag and drop API

const draggable = document.getElementById("draggable");
const droppable = document.getElementById("droppable");

draggable.addEventListener('dragstart', function(event){
  event.dataTransfer.setData('text/plain', event.target.id)
})

droppable.addEventListener('dragover', function(event){
  event.preventDefault();
})

droppable.addEventListener('drop', function(event){
    let data = event.dataTransfer.getData('text/plain');
  
  event.target.appendChild(document.getElementById(data));
})

// geolocation
if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
        
        let latElement = document.getElementById("lattitude") = lat;
        let longElement = document.getElementById("longitude") = long;
        
        
      })
}
else{
  console.log("Geolocation is not supported in your browser")
}

// Canvas

const CANVAS = document.getElementById('myCanvas');
const ctx = CANVAS.getContext('2d');


ctx.fillStyle = 'green';
ctx.fillRect(10, 10,50,50);

ctx.strokeStyle = 'orange';
ctx.lineWidth = 2;
ctx.strokeRect(30, 40, 50, 50);

// storage

const NAME =  document.getElementById("name");
const EMAIL =  document.getElementById("email");

const SAVE_BUTTON =  document.getElementById("saveButton");
const LOAD_BUTTON =  document.getElementById("loadButton");

SAVE_BUTTON.addEventListener('click', function(event){
    localStorage.setItem("NAME", NAME.value);
    localStorage.setItem("EMAIL", EMAIL.value);
    console.log('data is saved')
})

LOAD_BUTTON.addEventListener('click', function(event){
    NAME.value = localStorage.getItem("NAME",);
    EMAIL.value = localStorage.getItem("EMAIL");
    console.log('data is saved')
})

// web workers

let worker = new Worker('worker.js'); // worker URL

const BUTTON = document.getElementById('workerButton');
const RESULT = document.getElementById('result');

BUTTON.addEventListener('click', function(){
    worker.postMessage('start...')
})

worker.addEventListener('message', function(event){
    RESULT.textContent = event.data;
})

