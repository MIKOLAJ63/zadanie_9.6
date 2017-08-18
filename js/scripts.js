//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var element = document.createElement('li');
  var x = list.getElementsByTagName("li").length;
  element.innerHTML = 'item ' + x ;
  console.log(x+1)
  list.appendChild(element);
});