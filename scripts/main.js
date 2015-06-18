// on the initial visit if there is a message or color in localStorage then load those settings otherwise save whatever we have to storage (should just be the preselected color);

if(localStorage.getItem('message') || localStorage.getItem('color')){
  loadSettings();
} else {
  populateStorage();
}

function populateStorage(){
  localStorage.setItem('recipient', document.getElementById('recipient').value);
  localStorage.setItem('message', document.getElementById('message').value);
  localStorage.setItem('color', document.getElementById('color').value);

  loadSettings();
}

function loadSettings(){
  var recipient = localStorage.getItem('recipient');
  var message = localStorage.getItem('message');
  var color = localStorage.getItem('color');

  document.getElementById('recipient').value = recipient;
  document.getElementById('message').value = message;
  document.getElementById('color').value = color;

  document.querySelector('html').style.backgroundColor = color; 
}

function clear(){
  localStorage.clear();
  document.getElementById('blue').selected = true; 
  document.getElementById('recipient').value = '';
  document.getElementById('message').value = '';
  populateStorage();
}

document.getElementById('recipient').onchange = populateStorage;
document.getElementById('message').onchange = populateStorage;
document.getElementById('color').onchange = populateStorage;
document.getElementById('clear').onclick = clear;
