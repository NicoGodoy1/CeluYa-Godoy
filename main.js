//carrito vacio
// carrito = [];

// Declaracón objeto producto y cliente
class Producto {

    constructor(nombre, precio) {
        this.nombre =  nombre;
        this.precio = parseFloat(precio);
        // this.vendido = false;
    }
    vender() {
        alert("Hola, soy el producto" + this.nombre)
    }
    agregarCarrito(precio) {
        // carrito.push(precio)
        alert("Hola, soy " + this.nombre)
    }
//     sumarTotal() {
//         for (const index of carrito ) {
//             total += 
//             producto.vender()
//         }
//         alert("Hola, soy " + this.nombre)
//     }
}

class Cliente {

    constructor(dni, nombre, apellido, correo) {
        this.dni =  dni
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.comprar = function() {alert("Hola, soy " + this.nombre)}
    }
    comprar(producto) {
        // carrito.push(producto)
        alert("Hola, soy " + this.nombre)
    }
    sumarInteres() {
        alert("Hola, soy " + this.nombre)
    }
    finalizarCompra() {
        alert("Hola, soy " + this.nombre)
    }
}

const productos = [];
productos.push (new Producto("MotorolaE20", 35000.00));
productos.push (new Producto("MotorolaE40", 40000.00));
productos.push (new Producto("MotorolaE32", 45000.00));
productos.push (new Producto("MotorolaG22", 50000.00));
productos.push (new Producto("MotorolaG32", 55000.00));
productos.push (new Producto("MotorolaG42", 60000.00));
productos.push (new Producto("MotorolaG52", 65000.00));
productos.push (new Producto("MotorolaG82", 70000.00));
productos.push (new Producto("MotorolaEdge30Ultra", 75000.00));
productos.push (new Producto("MotorolaEdge30Neo", 80000.00));
productos.push (new Producto("MotorolaEdge30Pro", 85000.00));
productos.push (new Producto("MotorolaEdge30Fusion", 900000.00));
productos.push (new Producto("MotorolaEdge30FusionSe", 95000.00));


const carrito = [10, 10, 10, 10];
let totalFinal = 0

// function calcularTotal() {
//     for (let index = 0; index < 6 ; index++ ){
//         totalFinal = totalFinal+ (carrito[i]);
//     }
//     alert (`${totalFinal}`)
// }
for (let index = 0; index < 5 ; index++ ){
    parcial = carrito[index];
    totalFinal += parcial;
}
alert (`el total es ${totalFinal}`)
// calcularTotal()

// const productos = [];
// const MotorolaE20 = new Producto({nombre: "MotorolaE20", precio: 35000.00});
// const MotorolaE40 = new Producto({nombre: "MotorolaE40", precio: 40000.00});
// const MotorolaE32 = new Producto({nombre: "MotorolaE32", precio: 45000.00});
// const MotorolaG22 = new Producto({nombre: "MotorolaG22", precio: 50000.00});
// const MotorolaG32 = new Producto({nombre: "MotorolaG32", precio: 55000.00});
// const MotorolaG42 = new Producto({nombre: "MotorolaG42", precio: 60000.00});
// const MotorolaG52 = new Producto({nombre: "MotorolaG52", precio: 65000.00});
// const MotorolaG82 = new Producto({nombre: "MotorolaG82", precio: 70000.00});
// const MotorolaEdge30Ultra = new Producto({nombre: "MotorolaEdge30Ultra", precio: 75000.00});
// const Motoroladge30Neo = new Producto({nombre: "MotorolaEdge30Neo", precio: 80000.00});
// const MotorolaEdge30Pro = new Producto({nombre: "MotorolaEdge30Pro", precio: 85000.00});
// const MotorolaEdge30Fusion = new Producto({nombre: "MotorolaEdge30Fusion", precio: 900000.00});
// const MotorolaEdge30FusionSe = new Producto({nombre: "MotorolaEdge30FusionSe", precio: 95000.00});


// variables de productos 
// const productos = [];
// productos.push (MotorolaE20);
// productos.push (MotorolaE40);
// productos.push (MotorolaE32);
// productos.push (MotorolaG22);
// productos.push (MotorolaG32);
// productos.push (MotorolaG42);
// productos.push (MotorolaG52);
// productos.push (MotorolaG82);
// productos.push (MotorolaEdge30Ultra);
// productos.push (Motoroladge30Neo);
// productos.push (MotorolaEdge30Pro);
// productos.push (MotorolaEdge30Fusion);
// productos.push (MotorolaEdge30FusionSe);

// for (let index = 0; index < 6 ; index++ ) {
// //    item.vender();
//     alert(productos[index]);
// }

for (const producto of productos) {
    producto.vender()
}

const cliente1 = new Cliente(39329297,"Nico", "Godoy", "nicolasgastongodoy@gmail.com");
cliente1.comprar();


alert("Hola, muy buenas tardes, ¡Bienvenido/a a nuestro sitio web\ndonde vas a encontrar los últimos modelos de celulares!")

let totalCompra = 0;

// FUNCION PARA SELECCIONAR LOS PRODUCTOS
function Comprar() {
    let totalCompra = 0;
    let modeloElegido = prompt("Ingrese la letra de la familia de motorola que desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    modeloElegido = modeloElegido.toLowerCase()
    while (modeloElegido == "a" || "b" || "c") {
        if (modeloElegido == "a"){
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola E20  \n 2) Motorola E22 \n 3) Motorola E32 \n 4) Motorola E40" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaE20;
                alert("Agregaste al carrito el MotorolaE20");
            }else if(celularElegido == 2){
                totalCompra += MotorolaE22;
                alert("Agregaste al carrito el MotorolaE22");
            }else if(celularElegido == 3){
                totalCompra += MotorolaE32;
                alert("Agregaste al carrito el Motorola E32");
            }else{
                totalCompra += MotorolaE40;
                alert("Agregaste al carrito el Motorola E40");
            }
        }else if (modeloElegido == "b"){
            celularElegido = parseInt(prompt("Indica el número celular quieres comprar: \n 1) Motorola G22  \n 2) Motorola G32 \n 3) Motorola 42 \n 4) Motorola E52 \n 5) Motorola G82:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaG22;
                alert("Agregaste al carrito elMotorola G22");
            }else if(celularElegido == 2){
                totalCompra += MotorolaG32;
                alert("Agregaste al carrito el MotorolaG32");
            }else if(celularElegido == 3){
                totalCompra += MotorolaG42;
                alert("Agregaste al carrito el Motorola G42");
            }else if(celularElegido == 4){
                totalCompra += MotorolaG52;
                alert("Agregaste al carrito el Motorola G52");
            }else{
                totalCompra += MotorolaG82;
                alert("Agregaste al carrito el Motorola G82");
            }
        }else{
            celularElegido = parseInt(prompt("Indica el número del celular quieres comprar: \n 1) Motorola Edge 30Fusion  \n 2) Motorola Edge 30Ultra \n 3) Motorola Edge 30Neo \n 4) Motorola Edge 30Pro \n 5) Motorola Edge 30Fusion SE:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaEdge30fusion;
                alert("Agregaste al carrito el MotorolaEdge 30 Fusion");
            }else if(celularElegido == 2){
                totalCompra += MotorolaEdge30Ultra;
                alert("Agregaste al carrito el MotorolaEdge 30Ultra");
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Neo;
                alert("Agregaste al carrito el Motorola Edge 30Neo");
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Pro;
                alert("Agregaste al carrito el Motorola Edge 30Pro");
            }else{
                totalCompra += MotorolaEdge30fusionSE;
                alert(`Agregaste al carrito el MotorolaEdge 30fusion SE`);
            }
        }
    return totalCompra
    }
}

// FUNCIONES QUE CALCULAN LOS DESCUENTOS E INTERESES
function efectivo(monto) {
    monto = monto - (monto*0.2)
    return monto
}
function credito(monto) {
    monto = monto + (monto*0.1)
    return monto
}

// FUNCION PARA LA EJECUCIÓN DEL MENU
function ejecutarMenu () {
    let option = parseInt(prompt(" Indiqué la opción que desee realizar \n 1) Agregar un producto al carrito \n 2) Salir del sitio"));
    while (option != 0) {
        if (option == 1){
            num = parseInt(prompt("¿Cuántos celulares vas a comprar?"));
            let suma = 0;
            for(let i = 0; i < num; i++){
                numeroCompra = i + 1;
                alert(`Producto n° ${numeroCompra}`);
                suma += Comprar();
            }
            alert(`Has finalizado la selección. El total es ${suma} pesos`)
            descuento = parseInt(prompt("Elija el medio de pago: \n 1) Efectivo o débito (20% descuento) \n 2) Crédito en 3 cuotas (10% interés)"))
            while (descuento == 1 || 2 ) {
                if (descuento == 1) {
                    sumaEfectivo = efectivo(suma);
                    alert(`- El subtotal es ${suma} pesos.\n- El total final con 10% de descuento es ${sumaEfectivo} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n---La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`);
                    return sumaEfectivo
                } else if (descuento == 2){
                    sumaCredito = credito(suma);
                    alert(`- El subtotal es: ${suma} pesos.\n- El total final con el 10% de interés es ${sumaCredito} pesos.\n\n--- Rescibirás el producto en las próximas 24hs.---\n\n--- La/lo invitamos a conocer nuestros CELU YA CRÉDITOS con la mejor tasa.---\n \n ¡¡Gracias por su compra!!`)
                    return sumaEfectivo
                } else {
                    alert(`No ingresó un medio correcto, vuelva a intentar`)
                    break
                }
            }
            return listaCompras 
        }else if (option == 2){
            alert("Gracias por visitar nuestro sitio.\n Lo esperamos cuando desee realizar un pedido")
            break

        }else{
            alert("Comience de nuevo y elija la opción 1 o 2")
            break
        }
    }
}
// LLAMADO A LA FUNCION DEL MENU 
ejecutarMenu()

//funcion de orden superior
function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)


// productos.forEach(item => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//       <h2>Id: ${item.id}</h2>
//       <p>Nombre: ${item.nombre}</p>
//       <b>$${item.precio}</b>
//       <button class="button">"Comprar"</button>
//     `;
  
//     container.append(div);
//   });