// Lista de productos fijos
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Carrito vacío
var carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n\n";
    productos.forEach((prod, index) => {
        mensaje += `${index + 1}. ${prod.nombre} - $${prod.precio}\n`;
    });
    alert(mensaje);
}

// Función para agregar productos al carrito
function agregarProducto() {
    let mensaje = "Elige el número del producto que quieras agregar:\n\n";
    productos.forEach((prod, index) => {
        mensaje += `${index + 1}. ${prod.nombre} - $${prod.precio}\n`;
    });

    let opcion = parseInt(prompt(mensaje));

    if (opcion >= 1 && opcion <= productos.length) {
        let producto = productos[opcion - 1];
        carrito.push(producto);
        alert(`Agregaste: ${producto.nombre} ($${producto.precio})`);
    } else {
        alert("Opción inválida.");
    }
}

// Función para mostrar el carrito con total
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Productos en tu carrito:\n\n";
        let total = 0;

        carrito.forEach((prod, index) => {
            mensaje += `${index + 1}. ${prod.nombre} - $${prod.precio}\n`;
            total += prod.precio;
        });

        mensaje += `\nTotal a pagar: $${total}`;
        alert(mensaje);
    }
}

// Función principal con menú
function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Menú Carrito de Compras\n\n" +
            "1. Ver productos disponibles\n" +
            "2. Agregar producto al carrito\n" +
            "3. Ver carrito\n" +
            "4. Salir\n\n" +
            "Elige una opción:"
        );

        switch (opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                agregarProducto();
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                alert("¡Gracias por tu compra!");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== "4");
}

// Ejecutar programa
menu();
