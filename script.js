//comentario de una linea

/*comentario de varias lineas*/

document.getElementById("titulo").innerHTML = "HOLA MUNDO";

function miFunc() {
    alert('Haz dado clic al botón!');
}

let h2 = document.getElementById("subtitulo"); 
// Encuentra el elemento "h2" en el sitio
  h2.onclick = muestraAlerta; 
// Agrega función onclick al elemento
    
function muestraAlerta(evento) {
  alert("Evento onclick ejecutado!");
}

document.write("<br>Hola mundo");
alert("Hola mundo");
console.log("Hola mundo");

document.write("<h1>Hello world</h1>");
//tipos de datos

//cadena de texto
"Hello world" //string
'Hello world' //string

//number
1, 2, 3, 4, 5 //integer
2.1, 5.5 //float

//boleano
true //verdadero
false //falso

//array
/*['jose', 'juan', 'jorge']
[1, 2, 3] //listas*/

//object
'manuel'
50.3
16
true

/*{
  "username": "manuel",
  "score": 50.3,
  "hours": 16,
  "profecional": true
}

{
  "username": "sergio",
  "score": 80.3,
  "hours": 12,
  "profecional": false
}*/

console.log("Esto es una cadena");
console.log(18.5);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({"username": "manuel", "score": 50.3});

var nombreusuario = "juan"; 

var nombreusuario = "pepe";
console.log(nombreusuario)

let lastname = "jose"; 
console.log(lastname)

const PI = 3.1416;
console.log(PI)

//escritura camelcase
let nombrePersona = "luis";
console.log(nombrePersona)

let numberOne = 50;
let numberTwo = 10;

let result = numberOne - numberTwo;

console.log(result);

let name = "Juan";
let lastName = " Juarez";

let completeName = name + " " +  lastName;

console.log(completeName);

let numeroUno = "60";
let numeroDos = "25";

let resultado = numeroUno > numeroDos;

console.log(resultado);

let password = "saul321";
let input = "saul321";

let resul = password == input;

if (resul === true) {
  console.log("Login Correcto");
}
console.log("Continuar:");

if (resul === false) {
  console.log("Login Incorrecto");
  console.log("Gracias, suerte para la proxima:");
}

let passwor = "saul321";
let inpu = "saul321";

let resu = passwor == inpu;

if (resu === true) {
  console.log("Contraseña Correcta");
  console.log("Continua: ");
} else {
    console.log("Contraseña incorrecta");
    console.log("Vuelve a intentarlo: ");
}

let score = 19;

if (score > 80) {
  console.log("Felicidades vas bien");
} else if (score >= 30) {
  console.log("Esfuerzate mas");
}

else {
  console.log("Deves de practicar mas");
}

var typeCard = "Guardadito";

switch(typeCard) {
  case "Debito":
    console.log("Tu tarjeta es de debito");
    break;
  case "Credito":
    console.log("Tu tarjeta es de credito");
    break;
  default:
    console.log("No tienes tarjeta");
}

let count = 6;

while(count > 0) {
  console.log(count);
  count = count - 1;
}

let cuenta = 0;

while(cuenta < 6) {
  console.log(cuenta);
  cuenta = cuenta + 1;
}

let cuent = 1;

while(cuent <= 6) {
  console.log(cuent);
  cuent++;
}

let names = ["Juan", "Manuel", "Jose", "Luis"];
console.log (names [0]);

let nombres = ["Juan", "Manuel", "Jose", "Luis"];
console.log (nombres.length);

for(let i = 1; i < nombres.length; i++) {
  console.log(nombres[i]);
}

function saludar() {
  console.log("Hola");
}
saludar();

function saludo(nombre) {
  console.log("Hola " + nombre);
}
saludo("Ricardo");
saludo("Benjamin");
saludo("Brenda");
saludo("Ricardito");
saludo("Gabriela");

function add(n1, n2) {
  console.log(n1 + n2);
}
add(5, 6);
add(15, 6);
add(5, 26);

function suma(n1,n2) {
  return n1 + n2;
}

console.log(suma(20, 30));

function resta(n1,n2) {
  return n1 - n2;
}

console.log(resta(20, 30));

function multiplica(n1,n2) {
  return n1 * n2;
}

console.log(multiplica(20, 30));

  function divide(n1,n2) {
  return n1 / n2;
}

console.log(divide(20, 30));

function saludo(nombre) {
  return "Hola mi nombre es " + nombre;
}

console.log(saludo("Ricardo"));

function saludo(nombre) {
  return "Hola mi nombre es " + nombre;
}
alert(saludo("Ricardo"));

var fotoMostrada = "logo";

function miFuncion(){
  var imagen = document.getElementById("logo");
    if(fotoMostrada == "logo"){
      imagen.src = "img/Logotipo.png";
      fotoMostrada = "logotipo";  
    }
    else{
      imagen.src = "img/Logo.png";
      fotoMostrada = "logo";
      //imagen.src = "img/Mi blog.png";
      //fotoMostrada = "blog";
      
    } 
}