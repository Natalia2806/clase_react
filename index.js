//No es usada
// var year = 19
// var year = 20
// console.log(year)

// //Solo se puede declarar una misma variable una vez
// let year1 = 10
// year1 = 20
// console.log(year1)

// var year_3 = 60

// if (true) {
//   var year_3 = 80
//   console.log(year_3)
// }
// console.log(year_3)

// let year_4 = 10
// if (true){
//   let year_4 = 12
//    console.log(year_4)
// }
//  console.log(year_4)


const year_5 = 100
if (true){
  const year_5 = 122
  console.log(year_5)
}
 console.log(year_5)

 // funciones 

 function sumar(num1, num2) {
   console.log(num1 + num2)
 }

 sumar (6, 10)

 //Funciones flechas

 const sumarFlecha = (num1, num2) => {
   console.log(num1 + num2)
 }

sumarFlecha(5, 4)

//Funcion flecha con un solo parametro
const sumarParametro = num1 => {
  return num1 + 2
}

console.log(sumarParametro(3))

//Funcion flecha sin return y sin llaves

const felchaSumar = num1 => num1 + 4

console.log(felchaSumar(5))

//Funcion flecha sin return y sin llaves con parentesis
const sumar2 = num1 => (num1 - 2)
console.log(sumar2(5))

//Funcion flecha sin parametros
const sumar3 = () => 4 * 5
console.log(sumar3())