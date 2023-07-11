class ProductManager{
    #products=[];
    #idProduct=0

    getProducts(){
        return this.#products
    }

    addProducts(title, description, price, thumbnail, code, stock){
        const newProduct={
            id:++this.#idProduct,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        const productWithSameCode = this.#products.find((products) => products.code === code );
          if (productWithSameCode) {
            throw new Error("Ya existe un producto con ese código");
          } 

        this.#products.push(newProduct);
    }

    getProductById(id) {
        const productById = this.#products.find((products) => products.id === id);
        if (productById) {
          return product;
        } else {
          throw new Error("No existe ningún objeto con ese ID.");
        }
    } 

}



const manager=new ProductManager()

console.log(manager.getProducts())
    manager.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log(manager.getProducts())
    manager.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log(manager.getProducts())
//Error intencional codigo repetido

manager.addProducts("producto prueba 2","Este es un producto prueba 2",200,"Sin imagen 2","aaa000",25)
console.log(manager.getProducts())

console.log(manager.getProductById(1));
