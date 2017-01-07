var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var products = [];
var Product = (function () {
    function Product(name, category, price, articleNumber) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }
    return Product;
})();
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(name, category, price, articleNumber, author, year) {
        _super.call(this, name, category, price, articleNumber);
        this.Author = author;
        this.Year = year;
    }
    return Book;
})(Product);
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(name, category, price, articleNumber, length) {
        _super.call(this, name, category, price, articleNumber);
        this.Length = length;
    }
    return DVD;
})(Product);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, category, price, articleNumber, hassplitscreen) {
        _super.call(this, name, category, price, articleNumber);
        this.HasSplitscreen = hassplitscreen;
    }
    return Game;
})(Product);
function ListAllProducts(e) {
    var productListElem = document.getElementById("result-list-all");
    productListElem.innerHTML += "______START____<br/>";
    for (var _i = 0; _i < products.length; _i++) {
        var val = products[_i];
        productListElem.innerHTML += val.constructor.name + "<br/>"; //gets the classname (or producttype)
        productListElem.innerHTML += "name: " + val.Name + "<br/>";
        productListElem.innerHTML += "category: " + val.Category + "<br/>";
        productListElem.innerHTML += "price: " + val.Price + "<br/>";
        productListElem.innerHTML += "article number: " + val.ArticleNumber + "<br/>";
        productListElem.innerHTML += "_______________<br/>";
    }
    productListElem.innerHTML += "______END______<br/>";
}
function ListAllBooks(e) {
    var bookListElem = document.getElementById("result-list-books");
    bookListElem.innerHTML += "______START____<br/>";
    for (var _i = 0; _i < products.length; _i++) {
        var val = products[_i];
        if (val instanceof Book) {
            bookListElem.innerHTML += val.constructor.name + "<br/>"; //gets the classname (or producttype)
            bookListElem.innerHTML += "name: " + val.Name + "<br/>";
            bookListElem.innerHTML += "price: " + val.Price + "<br/>";
            bookListElem.innerHTML += "article number: " + val.ArticleNumber + "<br/>";
            bookListElem.innerHTML += "author: " + val.Author + "<br/>";
            bookListElem.innerHTML += "year: " + val.Year + "<br/>";
            bookListElem.innerHTML += "_______________<br/>";
        }
    }
    bookListElem.innerHTML += "______END______<br/>";
}
(function () {
    console.log("iife 1 done (products array seeding)");
    products.push(new Book("ivanhoe", "roman", 99, "jasf23489", "walter scott", "1820"));
    products.push(new Book("moby dick", "roman", 29, "shl29384", "herman melville", "2016"));
    products.push(new DVD("the girl on the train", "thriller/mystery", 129, "asdlf2394", 112));
    products.push(new Game("halo", "action/fantasy", 399, "akldöfh2398", true));
})();
