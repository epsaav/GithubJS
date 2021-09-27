//Creando objetos

const nombre="Monitor de 20 pulgadas";
const precio=300;
const disponible=true;

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: false
}

//Agregar nuevas propiedades al objeto.

producto.imagen="Imagen.jpg";

//Eliminar propiedades al objeto 

delete producto.precio;

console.log(producto.imagen);