function mostrar () {

const numero = parseInt(prompt ("Ingrese un numero: ")); 

if (numero <= 50) {
    console.log ("El numero es menor que 50");
}
else if (numero >30)
    console.log ("El numero es mayor que 30");
    
else if (numero >= 40)
    console.log ("El numero es menor que 40");
}

mostrar ()

let nombre = prompt ("Ingresar nombre: ");

while (nombre != "ESC") {
    alert ("El usuario ingreso: " + nombre);
    nombre = prompt ("Ingresar otro nombre: ");
}

function calcular () {

let cantidad = parseFloat(prompt ("Ingresar cantidad"))
let precio = parseFloat(prompt ("Ingresar precio"))

compra = precio * cantidad;
desc = compra * 0.15;
pagar = compra - desc;
console.log ("El descuento es: " + desc)
console.log ("El total a pagar es: " + pagar)
}

calcular ()

const listaProducto1 = {id: 1, name: "Juego de living" , precio: 120000 } 

const listaProductos = [listaProducto1, {id: 2, name: "Banquetas y mesa" , precio: 100000}, {id: 3, name: "Deck", precio:200000 }]

listaProductos.unshift ({id: 4, name: "Pergola", precio: 250000})

for (const producto of listaProductos) {
    console.log (producto)
}

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase ()
        this.precio = parseFloat(precio)
        this.vendido = false 
    }
    sumarIva() {
        this.precio = this.precio * 1.21
    }
}
const productos = []

productos.push (new Producto ( "Casita de juguete", "70000"))
productos.push (new Producto ( "Reposera", "25000"))
productos.push (new Producto ( "Huerta ", "40000"))

console.log (productos)

for (const producto of productos){
    producto.sumarIva ()
}

console.log (productos)