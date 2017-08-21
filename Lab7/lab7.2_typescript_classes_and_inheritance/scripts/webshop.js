//let products: Product[] = [];
//class Product {
//    public Name: string;
//    public Category: string;
//    public Price: number;
//    public ArticleNumber: string;
//    constructor(name: string, category: string, price: number, articleNumber: string) {
//        this.Name = name;
//        this.Category = category;
//        this.Price = price;
//        this.ArticleNumber = articleNumber;
//    }
//}
//class Book extends Product {
//    public Author: string;
//    public Year: string;
//    constructor(name: string, category: string, price: number, articleNumber: string, author: string, year: string) {
//        super(name, category, price, articleNumber)
//        this.Author = author;
//        this.Year = year;
//    }
//}
//class DVD extends Product {
//    public Length: number;
//    constructor(name: string, category: string, price: number, articleNumber: string, length: number) {
//        super(name, category, price, articleNumber);
//        this.Length = length;
//    }
//}
//class Game extends Product {
//    public HasSplitscreen: boolean;
//    constructor(name: string, category: string, price: number, articleNumber: string, hassplitscreen: boolean) {
//        super(name, category, price, articleNumber);
//        this.HasSplitscreen = hassplitscreen;
//    }
//}
//function ListAllProducts(e): void {
//    let productListElem = document.getElementById("result-list-all");
//    productListElem.innerHTML += "______START____<br/>";
//    for (var val of products) {
//        productListElem.innerHTML += val.constructor.name + "<br/>"; //gets the classname (or producttype)
//        productListElem.innerHTML += "name: " + val.Name + "<br/>";
//        productListElem.innerHTML += "category: " + val.Category + "<br/>";
//        productListElem.innerHTML += "price: " + val.Price + "<br/>";
//        productListElem.innerHTML += "article number: " + val.ArticleNumber + "<br/>";
//        productListElem.innerHTML += "_______________<br/>";
//    }
//    productListElem.innerHTML += "______END______<br/>";
//}
//function ListAllBooks(e): void {
//    let bookListElem = document.getElementById("result-list-books");
//    bookListElem.innerHTML += "______START____<br/>";
//    for (var val of products) {
//        if (val instanceof Book)//if current instance is a book
//        {
//            bookListElem.innerHTML += val.constructor.name + "<br/>"; //gets the classname (or producttype)
//            bookListElem.innerHTML += "name: " + val.Name + "<br/>";
//            bookListElem.innerHTML += "price: " + val.Price + "<br/>";
//            bookListElem.innerHTML += "article number: " + val.ArticleNumber + "<br/>";
//            bookListElem.innerHTML += "author: " + val.Author + "<br/>";
//            bookListElem.innerHTML += "year: " + val.Year+ "<br/>";
//            bookListElem.innerHTML += "_______________<br/>";
//        }
//    }
//    bookListElem.innerHTML += "______END______<br/>";
//}
//(function () {
//    console.log("iife 1 done (products array seeding)");
//    products.push(new Book("ivanhoe", "roman", 99, "jasf23489", "walter scott", "1820"));
//    products.push(new Book("moby dick", "roman", 29, "shl29384", "herman melville", "2016"));
//    products.push(new DVD("the girl on the train", "thriller/mystery", 129, "asdlf2394", 112));
//    products.push(new Game("halo", "action/fantasy", 399, "akldöfh2398", true));
//})(); 
