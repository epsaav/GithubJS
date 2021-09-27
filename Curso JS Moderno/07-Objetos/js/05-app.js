//Objetos dentro de objetos

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


console.log(producto.medidas.informacion.peso);

console.log(producto.medidas.fabricacion.pais);

