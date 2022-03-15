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

const year_5 = 100;
if (true) {
  const year_5 = 122;
  console.log(year_5);
}
console.log(year_5);

// funciones

function sumar(num1, num2) {
  console.log(num1 + num2);
}

sumar(6, 10);

//Funciones flechas

const sumarFlecha = (num1, num2) => {
  console.log(num1 + num2);
};

sumarFlecha(5, 4);

//Funcion flecha con un solo parametro
const sumarParametro = (num1) => {
  return num1 + 2;
};

console.log(sumarParametro(3));

//Funcion flecha sin return y sin llaves

const felchaSumar = (num1) => num1 + 4;

console.log(felchaSumar(5));

//Funcion flecha sin return y sin llaves con parentesis
const sumar2 = (num1) => num1 - 2;
console.log(sumar2(5));

//Funcion flecha sin parametros
const sumar3 = () => 4 * 5;
console.log(sumar3());

//Template string
const numero = (num) => {
  return "el numero es: " + num;
};

console.log(numero(4));

const numeroDos = (num) => {
  return `el numero es: ${num}`;
};

console.log(numeroDos(4));

//CONCEPTOS DE OBJETOS
const mascota = {
  nombre: "Tom",
  edad: 3,
  tipo: "perro",
  razas: ["pincher", "pitbull"]
};

mascota.nombre = "Sol";
mascota.edad = 4;
console.log(mascota.edad);
console.log(mascota.razas);
mascota.razas[0] = "prueba";

//Destructuracion de objeto

const { nombre } = mascota;
console.log(nombre);

//--------------------------

const web = {
  name: "natalia",
  links: {
    enalce: "natalia.com"
  },
  redeSociales: {
    youtube: {
      enlace: "musica.com",
      name: "natalia musica"
    },
    facebook: {
      enlace: "facebook.com",
      name: "natalia facebbok"
    }
  }
};

const { enlace, name } = web.redeSociales.youtube;
console.log(enlace);

//PROMESAS

fetch(' https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(data => {
    data.results.forEach(element => {
      console.log(element.name)
    });
  })
  .catch(error => console.log(error))

//MEJORAS DE LAS PROMESAS - ASINCRONISMO

const getPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};

getPokemon();

//----------------------------------------------------------------
const getPokemon2 = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    const list_name = data.results.filter( e => e.name === 'bulbasaur')
    console.log(list_name)
  } catch (error) {
    console.log(error);
  }
};

getPokemon2();

//----------------------------------------------------------------
const getPokemonLong = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    const list_name = data.results.filter( e => e.name.length === 7)
    console.log(list_name)
  } catch (error) {
    console.log(error);
  }
}

getPokemonLong()

















