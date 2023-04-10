const carrito = []

const shoes = [{code: 1, model: 'Nike Jordan 1 mid', price: 50000},
               {code: 2, model: 'Nike Air force 1', price: 40000},
               {code: 3, model: 'Nike Court vision low', price: 54000},
               {code: 4, model: 'Nike Air max excee', price: 25000},
               {code: 5, model: 'Nike Air max 90', price: 19800},
               {code: 6, model: 'Nike Revolution 5', price: 32000}]

const firstMessage = "Seleccioná la zapatilla que quieras por el código numérico:"

function searchShoe(code) {
    let result = shoes.find((shoe) => shoe.code === parseInt(code))
        return result 
}

function checkout() {
    if (carrito.length === 0) {
        console.warn("No hay nada agregado al carrito.")
        return
    }

    const shopping = new Compra(carrito)
    alert('El valor final es de: $' + shopping.subtotal())
    let answer = confirm("¿Estás seguro que querés confirmar el pago?")
    if (answer === true) {
        alert('Te informamos que tu pago de $' + shopping.subtotal() + " fue confirmado. ¡Muchas gracias por su compra!")
        carrito.length = 0
    }
}

function buy() {
    let code = prompt(firstMessage)
        if (!parseInt(code)) {
            alert ("El código ingresado es incorrecto.")
            let answer = confirm ("¿Querés probar otra vez?")
                if (answer === true) {
                    buy()
                }
                return 
        }
    let chosenShoe = searchShoe (code)   
        if (chosenShoe === undefined) {
            alert("El código ingresado es incorrecto.")
            return
        }

        alert(chosenShoe.model + ' ha sido agregada a su carrito. ')
        carrito.push (chosenShoe)

        let answer = confirm ("¿Querés llevar otra zapatilla?")
        if (answer === true) {
            buy()
        } else {
            checkout()
        }
}