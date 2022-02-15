var precio_base = 2000

var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var cantidadhijos_recargo = 0.2

var recargo = 0
var recargo_total = 0
var precio_final = 0

console.clear()
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuántos años tiene?, ingrese solamente números ")
var edad_numero = parseInt(edad)

//Si la edad es menor entonces no aplica al seguro
if (edad_numero<18){
  alert("Debe ser mayor de edad para aplicar al seguro")
}
//Si es mayor de edad entonces aplica al seguro
else {

var casado = prompt("¿Está casado actualmente?, si/no")
if("SI" == casado.toUpperCase()){
  var edad_conyuge = prompt("¿Qué edad tiene su conyuge?, ingrese solamente números")
  var edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?, si/no")
if("SI" == hijos.toUpperCase()){
  var cant_hijos = prompt("¿Cuántos hijos tiene?, ingrese solamente números")
  var cant_hijos_numero = parseInt(cant_hijos)
  //Cálculo de costo de recargo por cantidad de hijos
  recargo = cant_hijos_numero * cantidadhijos_recargo * precio_base
  recargo_total = recargo_total + recargo
}

//Cálculo de costo de recargo para el asegurado
if(edad_numero>=18 && edad_numero<25){
    recargo = precio_base * edad_18
    recargo_total = recargo_total + recargo
}
  else if (edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
}
  else if (edad_numero>=50){
    recargo = precio_base *edad_50
    recargo_total = recargo_total + recargo
}

//Cálculo de costo de recargo para el conyuge
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    recargo = precio_base * edad_18
    recargo_total = recargo_total + recargo
}  
  else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
}
  else if (edad_conyuge_numero>=50){
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
}
  
//Cálculo del precio final de la cotización  
precio_final = precio_base + recargo_total

//Muestra en consola los recargos y el precio final de la cotización
console.log ("Para el asegurado "+nombre)
console.log ("El total de los recargos es de: Q"+recargo_total)
console.log ("El total de la cotización del seguro es de: Q"+precio_final)
}
