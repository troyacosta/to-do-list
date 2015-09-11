'use strict';

var header = document.getElementById('header');
var inputBox = document.getElementById('inputBox');
var button = document.getElementById('button');
var textBox = document.getElementById('textBox');

textBox.style.backgroundColor = 'white';
textBox.style.width = '30em'
textBox.style.height = '30em';

header.style.textAlign = 'center';
header.style.color = 'white';

inputBox.style.width = '25em';

var render = function() {
	textBox.innerHTML = '';
}



var fullList = [];

button.addEventListener('click', function(event) {
	event.preventDefault();
	fullList.push(inputBox.value);
	render();
	textBox.innerHTML = fullList.join('<br>');
	inputBox.value = '';
});

render();
