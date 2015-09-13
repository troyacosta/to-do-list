'use strict';

var header = document.getElementById('header');
var inputBox = document.getElementById('inputBox');
var button = document.getElementById('button');
var textBox = document.getElementById('textBox');
var container = document.getElementById('container');
var fullList = [];

container.style.width = '25em';
container.style.margin = '3em auto';

textBox.style.backgroundColor = '#fff';
textBox.style.width = '30em';
textBox.style.height = '30em';
textBox.style.margin = '0 auto';
textBox.style.padding = '1em';

header.style.textAlign = 'center';
header.style.color = '#fff';

inputBox.style.width = '26em';

var addItem = function() {
    event.preventDefault();
    fullList.push(inputBox.value);
    inputBox.value = '';
};

button.addEventListener('click', function(event) {
    event.preventDefault();
    textBox.innerHTML = '';
    textBox.innerHTML = fullList.join('<br>');
});
