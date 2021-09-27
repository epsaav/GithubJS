
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: false,
    medidas : {
        informacion : {
            peso: '1 Kg',
            medida: '1 m'
        },
        fabricacion : {
            pais : "china"
        }
    }
    
}

//Destructuring de objetos dentro de objetos
//Extrae la informacion y te crea el objeto

const { nombre , medidas : {informacion : {peso} } } = producto;

console.log(peso);