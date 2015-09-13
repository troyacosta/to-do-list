(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var addItem = function addItem() {
    event.preventDefault();
    fullList.push(inputBox.value);
    inputBox.value = '';
};

button.addEventListener('click', function (event) {
    event.preventDefault();
    textBox.innerHTML = '';
    textBox.innerHTML = fullList.join('<br>');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map