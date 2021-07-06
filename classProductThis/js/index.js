class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

const book = new Product("Wiedźmin", 29.99);

console.log(book.getName());
console.log(book.getPrice());
