class producto {
    // Atributos  -- no es necesari declararlos
    nombre;
    precio;
    stock;

    // Metodo Constructor
    constructor( p1, p2, p3 ) {
        this.nombre = p1;
        this.precio = p2;
        this.stock = p3
    }

    // Editar atributos
    cambioPrecio (nuevoPrecio) {
        this.precio = nuevoPrecio
    }

    comprar(cantidad){
        if (this.stock > 0) {
            this.stock = this.stock - cantidad;
        } else {
            console.log("No hay stop");
        }
    }

    agregarStock (cantidad) {
        this.stock =this.stock + cantidad;
        console.log(`El nuevo Stock es: ${this.stock}`);
    }
}  

 const producto1 = new producto ("Papa Negra", 5, 25);
 console.log(producto1);

 
producto1.cambioPrecio(10)

producto1.comprar(0)

producto1.agregarStock(1000)

console.log(producto1);