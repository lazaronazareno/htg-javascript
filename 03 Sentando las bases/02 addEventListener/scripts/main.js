'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const inputSolucion = document.querySelector('#input-solucion');

function recibirNombre(event) {
  event.preventDefault();
  console.log(event);
  var name = inputNombre.value;
  if (name.length < 5 || name.length > 50) {
    alert("El nombre debe ser entre 5 y 50 caracteres");
  } else {
    alert('El formulario se ha enviado correctamente');
  }
}

function interceptarNombre(event) {
  if (event.target.value.length < 5 || event.target.value.length > 50) {
    console.log("El nombre debe ser entre 5 y 50 caracteres");
  } else {
    console.log(event.target.value);
  }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);

function agregartxt2() {
  var newtexto = document.createElement("div");
  newt.style.cssText = 'border:4px solid #56aaf3;padding:12px;width:160px;margin:12px 0 12px 0;';
  var nombre = document.createTextNode(inputNombre.value);
  newt.appendChild(nombre);
  document.getElementById("cont5").appendChild(newtexto);
  var newtexto2 = document.createElement("div");
  newtexto2.style.cssText = 'border:8px solid #56aaf3;padding:12px;width:160px;margin:12px 0 12px 0;';
  var comentario = document.createTextNode(inputSolucion.value)
  newtexto2.appendChild(comentario);
  document.getElementById("cont5").appendChild(newtexto2);
}

function agregaralgo() {
  var flotante = document.createElement('div');
  flotante.style.cssText = 'display:flex;position:fixed;left:30px;border:8px solid #56aaf3;padding:12px;float:left;width:160px;background-color:white;color:black';
  var nombre = document.createTextNode(inputNombre.value);
  flotante.appendChild(nombre);
  document.getElementsByTagName('body')[0].appendChild(flotante);
  var flotante = document.createElement('div2');
  flotante.style.cssText = 'display:flex;position:fixed;top:50px;left:30px;border:8px solid #56aaf3;padding:12px;float:left;width:160px;background-color:white;color:black';
  var comentario = document.createTextNode(inputSolucion.value);
  flotante.appendChild(comentario);
  document.getElementsByTagName('body')[0].appendChild(flotante);
}
