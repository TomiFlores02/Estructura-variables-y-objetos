class Compra {
    constructor(carritoCompras) {
        this.carrito = carritoCompras
    }
    subtotal () {
        if (this.carrito.length > 0) {
            return this.carrito.reduce ((acc, shoe) => acc + shoe.price, 0)
        }
    }
}