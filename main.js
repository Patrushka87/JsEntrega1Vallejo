alert("Bienvenido, a continuación podras calcular tu presupuesto")

const presupuesto = () => {
    let ancho = 0
    let alto = 0
    let m2 = 0
    let subtotal = 0
    let precioM2 = 1200
    let seguirComprando = false

    do {
        ancho = Number(prompt("Ingrese el ancho en metros"))
        while(isNaN(ancho) || ancho<= 0) {
            ancho = Number(prompt("Ingrese el ancho en metros"))
        }
        alto = Number(prompt("Ingrese el alto en metros"))
        while(isNaN(alto) || alto<= 0) {
            alto = Number(prompt("Ingrese el alto en metros"))
        }
              
        m2 = ancho * alto
        subtotal += m2 * precioM2
        seguirComprando = confirm("¿Quieres sumar otra medida?")

    } while (seguirComprando)


    return subtotal
};

const aplicarDescuento = (subtotal) => {
    if (subtotal >= 10000) {
        const totalConDescuento = subtotal * 0.80
        return totalConDescuento
    } else {
        return subtotal
    }
}

const calcularColocacion = (subtotal) => {
    const quiereColocacion = confirm("¿Quiere colocacion?")  

        if (quiereColocacion && subtotal >=20000) {
        alert("Tenes colocacion gratis. EL total de tu compra es: $" +subtotal)
    } else if (quiereColocacion && subtotal < 20000) {
        subtotal += 2000
        alert("El total de tu compra mas el costo de colocacion es: $" + subtotal)
    } else {
        alert("el total de tu compra es: $" +subtotal)
    }

    return subtotal
};

const subtotal = presupuesto()

const subtotalConDescuento = aplicarDescuento(subtotal)

const subtotalConColocacion = calcularColocacion(subtotalConDescuento)