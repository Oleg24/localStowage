// This piece is pretty straightforward whenever a storage event is fired, we'll update the DOM elements with the properties of that event.  

window.addEventListener('storage', function(e) {  
  console.log('event fired');
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = e.storageArea;
});