var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var app = angular.module("productsApp", []);
app.controller("HomeController", HomeController); //registering homecontroller
//CLASSES ---START
var Classes;
(function (Classes) {
    var Product = (function () {
        function Product(name, category, price, articleNumber) {
            this.Name = name;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }
        return Product;
    }());
    //arrays of product types
    Product.books = [];
    Product.dvds = [];
    Product.games = [];
    Classes.Product = Product;
    var Book = (function (_super) {
        __extends(Book, _super);
        function Book(name, category, price, articleNumber, author, year) {
            var _this = _super.call(this, name, category, price, articleNumber) || this;
            _this.Author = author;
            _this.Year = year;
            return _this;
        }
        return Book;
    }(Product));
    Classes.Book = Book;
    var DVD = (function (_super) {
        __extends(DVD, _super);
        //public mainActors: string[];
        function DVD(name, category, price, articleNumber, length) {
            var _this = _super.call(this, name, category, price, articleNumber) || this;
            _this.Length = length;
            return _this;
        }
        return DVD;
    }(Product));
    Classes.DVD = DVD;
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(name, category, price, articleNumber, hassplitscreen) {
            var _this = _super.call(this, name, category, price, articleNumber) || this;
            _this.HasSplitscreen = hassplitscreen;
            return _this;
        }
        return Game;
    }(Product));
    Classes.Game = Game;
})(Classes || (Classes = {}));
var Product = (function () {
    function Product(name, category, price, articleNumber) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }
    return Product;
}());
//arrays of product types
Product.books = [];
Product.dvds = [];
Product.games = [];
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(name, category, price, articleNumber, author, year) {
        var _this = _super.call(this, name, category, price, articleNumber) || this;
        _this.Author = author;
        _this.Year = year;
        return _this;
    }
    return Book;
}(Product));
var DVD = (function (_super) {
    __extends(DVD, _super);
    //public mainActors: string[];
    function DVD(name, category, price, articleNumber, length) {
        var _this = _super.call(this, name, category, price, articleNumber) || this;
        _this.Length = length;
        return _this;
    }
    return DVD;
}(Product));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, category, price, articleNumber, hassplitscreen) {
        var _this = _super.call(this, name, category, price, articleNumber) || this;
        _this.HasSplitscreen = hassplitscreen;
        return _this;
    }
    return Game;
}(Product));
//CLASSES ---END
var HomeController = app.controller("HomeController", function ($scope) {
    $scope.ShowBooks = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            return retrievedProducts;
        }(); //immediately run this method (iief)
    };
    $scope.ShowProducts = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            for (var _b = 0, _c = Product.games; _b < _c.length; _b++) {
                var game = _c[_b];
                retrievedProducts.push(game);
            }
            for (var _d = 0, _e = Product.dvds; _d < _e.length; _d++) {
                var dvd = _e[_d];
                retrievedProducts.push(dvd);
            }
            return retrievedProducts;
        }(); //immediately run this method (iief)
    };
    $scope.SaveBook = function () {
        var name = $scope.Name;
        var newBook = new Book($scope.Name, $scope.Category, $scope.Price, $scope.ArticleNumber, $scope.Author, $scope.Year);
        Product.books.push(newBook);
        console.log(newBook);
        //clear the input boxes after submitting new book (commented out due to error)
        var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
        //for (var input of inputs) {
        //    input.value = "";
        //}
    };
});
window.onload = function () {
    //seed some defautl products into arrays
    Product.books.push(new Book("the clean coder", "educative", 299, "94857239-4923", "robert c. martin", "2011"));
    Product.books.push(new Book("programming in html5 with javascript and scc3 (exam ref 70-480)", "educative", 499, "24857247-9482", "rick delorme", "2014"));
    Product.dvds.push(new DVD("planet of the apes", "action/sci-fi", 29, "9345395734953", 119));
    Product.dvds.push(new DVD("drive", "crime/drama", 49, "9345395734953", 100));
    Product.games.push(new Game("motorstorm pacific rift", "driving", 79, "29038452394857", true));
};
//# sourceMappingURL=products.js.map