(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var header = document.getElementById('header');
var inputBox = document.getElementById('inputBox');
var button = document.getElementById('button');
var textBox = document.getElementById('textBox');

textBox.style.backgroundColor = 'white';
textBox.style.width = '30em';
textBox.style.height = '30em';

header.style.textAlign = 'center';
header.style.color = 'white';

inputBox.style.width = '25em';

var render = function render() {
	textBox.innerHTML = '';
};

var fullList = [];

button.addEventListener('click', function (event) {
	event.preventDefault();
	fullList.push(inputBox.value);
	render();
	textBox.innerHTML = fullList.join('<br>');
	inputBox.value = '';
});

render();

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map