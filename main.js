let MotorolaE22 = 30000.00;
let MotorolaE40 = 35000.00; 
let MotorolaE20 = 40000.00;
let MotorolaE32 = 45000.00;
let MotorolaG22 = 50000.00;
let MotorolaG32 = 50000.00;
let MotorolaG42 = 55000.00;
let MotorolaG52 = 60000.00;
let MotorolaG82 = 65000.00;
let MotorolaEdge30fusion = 70000.00; 
let MotorolaEdge30Ultra = 75000.00;
let MotorolaEdge30Neo = 80000.00;
let MotorolaEdge30Pro = 85000.00;
let MotorolaEdge30fusionSE = 90000.00; 


// console.log("El valor del Motorola E20 ES:", MotorolaE20); 
// alert("Hola")
// let modeloElegido = prompt("Indica cuál modelo de celular quieres comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
// modeloElegido = modeloElegido.toLowerCase()
// prompt("Usted eligió la opción", modeloElegido);
// let totalCompra = 0;

// usar while mientras la opcion sea a b o c
alert("Hola, muy buenas tardes, ¡Bienvenido a nuestro sitio web!")

function Comprar() {
    // alert("Hola, muy buenas tardes, ¡Bienvenido a nuestro sitio web!")
    let totalCompra = 0;
    let modeloElegido = prompt("Indiquenos cuál familia de motorola desea comprar: \n a) Moto E \n b) Moto G \n c) Moto Edge:" );
    modeloElegido = modeloElegido.toLowerCase()
    prompt("Usted eligió la opción", modeloElegido);
    while (modeloElegido == ("a" || "b" || "c")) {
        if (modeloElegido == "a"){
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaE20  \n 2) MotorolaE22 \n 3) MotorolaE32 \n 4) MotorolaE40:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaE20;
                alert("Usted a comprado el MotorolaE20");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaE22;
                alert("Usted a comprado el MotorolaE20");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaE32;
                alert("Usted a comprado el MotorolaE20");
                alert(`El total de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaE40;
                alert("Usted a comprado el MotorolaE20");
                alert(`El total de la compra es ${totalCompra}`);
            }
            return totalCompra
            break
        }
        if (modeloElegido == "b"){
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 5) MotorolaG82:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaG22;
                alert("Usted a comprado el MotorolaG22");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaG32;
                alert("Usted a comprado el MotorolaG32");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += Motorola;
                alert("Usted a comprado el MotorolaG42");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 4){
                totalCompra += MotorolaG42;
                alert("Usted a comprado el MotorolaG52");
                alert(`El total de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaG82;
                alert("Usted a comprado el MotorolaG82");
                alert(`El total de la compra es ${totalCompra}`);
            }
            return totalCompra
            break
        }
        if (modeloElegido == "c"){
            celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaEdge30Fusion  \n 2) MotorolaEdge30Ultra \n 3) MotorolaEdge30Neo \n 4) MotorolaEdge30Pro \n 5) MotorolaEdge30FusionSe:" ));
            if(celularElegido == 1 ){
                totalCompra += MotorolaEdge30fusion;
                alert("Usted a comprado el MotorolaEdge30Fusion");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 2){
                totalCompra += MotorolaEdge30Ultra;
                alert("Usted a comprado el MotorolaEdge30Ultra");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Neo;
                alert("Usted a comprado el MotorolaEdge30Neo");
                alert(`El total de la compra es ${totalCompra}`);
            }else if(celularElegido == 3){
                totalCompra += MotorolaEdge30Pro;
                alert("Usted a comprado el MotorolaEdge30Pro");
                alert(`El total de la compra es ${totalCompra}`);
            }else{
                totalCompra += MotorolaEdge30fusionSE;
                alert(`Usted a comprado el MotorolaEdge30fusionSE`);
                alert(`El total de la compra es ${totalCompra}`);
            }
            return totalCompra
            break
        }
    }
}

function comprarOtro() {
    agregar = parseInt(prompt("Desea agregar otro producto? \n 1) Sí. \n 2) No."))
    if (agregar == 1) {
        return Comprar();
    } else {
        alert("Muchísimas gracias por comprar en nuestro sitio.")
    } 
    // switch (comprarOtro) {
    //     case (agregar == 1):
    //         alert("Muchísimas gracias por comprar en nuestro sitio.")
    //         break;

    //     case (agregar == 2):
    //         return Comprar()
    //         break;
        // default:
        //     return "operacion no definida";
        //     break;
}

function sumarTotales() {
    totalFinal = ;
    alert(`El total final es ${totalFinal}`)
    return totalFinal
}

Comprar()
comprarOtro()
sumarTotales()


// if (modeloElegido == "a"){
//     celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaE20  \n 2) MotorolaE22 \n 3) MotorolaE32 \n 4) MotorolaE40:" ));
//     if(celularElegido == 1 ){
//         totalCompra += MotorolaE20;
//         alert("Usted a comprado el MotorolaE20");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 2){
//         totalCompra += MotorolaE22;
//         alert("Usted a comprado el MotorolaE20");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 3){
//         totalCompra += MotorolaE32;
//         alert("Usted a comprado el MotorolaE20");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else{
//         totalCompra += MotorolaE40;
//         alert("Usted a comprado el MotorolaE20");
//         alert(`El total de la compra es ${totalCompra}`);
//     }
// }
// if (modeloElegido == "b"){
//     celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaG22  \n 2) MotorolaG32 \n 3) Motorola42 \n 4) MotorolaE52 \n 5) MotorolaG82:" ));
//     if(celularElegido == 1 ){
//         totalCompra += MotorolaG22;
//         alert("Usted a comprado el MotorolaG22");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 2){
//         totalCompra += MotorolaG32;
//         alert("Usted a comprado el MotorolaG32");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 3){
//         totalCompra += Motorola;
//         alert("Usted a comprado el MotorolaG42");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 4){
//         totalCompra += MotorolaG42;
//         alert("Usted a comprado el MotorolaG52");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else{
//         totalCompra += MotorolaG82;
//         alert("Usted a comprado el MotorolaG82");
//         alert(`El total de la compra es ${totalCompra}`);
//     }
// }
// if (modeloElegido == "c"){
//     celularElegido = parseInt(prompt("Indica cuál celular quieres comprar: \n 1) MotorolaEdge30Fusion  \n 2) MotorolaEdge30Ultra \n 3) MotorolaEdge30Neo \n 4) MotorolaEdge30Pro \n 5) MotorolaEdge30FusionSe:" ));
//     if(celularElegido == 1 ){
//         totalCompra += MotorolaEdge30fusion;
//         alert("Usted a comprado el MotorolaEdge30Fusion");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 2){
//         totalCompra += MotorolaEdge30Ultra;
//         alert("Usted a comprado el MotorolaEdge30Ultra");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 3){
//         totalCompra += MotorolaEdge30Neo;
//         alert("Usted a comprado el MotorolaEdge30Neo");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else if(celularElegido == 3){
//         totalCompra += MotorolaEdge30Pro;
//         alert("Usted a comprado el MotorolaEdge30Pro");
//         alert(`El total de la compra es ${totalCompra}`);
//     }else{
//         totalCompra += MotorolaEdge30fusionSE;
//         alert(`Usted a comprado el MotorolaEdge30fusionSE`);
//         alert(`El total de la compra es ${totalCompra}`);

//     }
// }
// let num1 = 0
// let num2 = 0
// num1 = parseInt(prompt("Ingrese el valor del num1: "));
// num2 = parseInt(prompt("Ingrese el valor del num2: "));
// function sumar(num1, num2){
//     num1 = parseInt(prompt("Ingrese el valor del num1: "));
//     num2 = parseInt(prompt("Ingrese el valor del num2: "));
//     alert(num1 + num2)
//     return num1 + num2;
// }
// sumar()
    // prompt("Usted eligió la opción", celularElegido);
    // totalCompra += celularElegido;
    // prompt("El total es", totalCompra);
    // alert("Usted completó la compra");


// let compra = parseInt(prompt("Querés comprar el moto e22?"));

// if (compra == 1) {
//     Total += MotorolaE22
//     alert("Usted Compró el moto e 22")
//     alert("El monto total de la compra es: " + MotorolaE22)
// }


// ingresar qué celular quiere comprar
// calcular total
//calcular precio con descuento 
//y calcular precio con promocion
// funcion para seleccionar el producto
// fuincion para realizar la compra
// funcion para aplicar descuento

// como usa un ciclo? 
