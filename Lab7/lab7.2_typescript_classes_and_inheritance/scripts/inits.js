//(function () {
//    console.log("iife 2 done (event handler initialization and similiar)");
//    document.getElementById("bookform").style.display = "none";
//    //attaching event listener to buttons at the end when the dom is ready
//    document.getElementById("btn-list-all").addEventListener("click", ListAllProducts, false);
//    document.getElementById("btn-list-books").addEventListener("click", ListAllBooks, false);
//    document.getElementById("btn-show-bookform").addEventListener("click", function (e) {
//        document.getElementById("bookform").style.display = "block";
//        //get the add book button element once its visible and defined
//        let btnAddBook = document.getElementById("btn-add-book");
//        btnAddBook.addEventListener("click", function (e) {
//            let bookformElem = document.getElementById("bookform");
//            let inputs = (<HTMLInputElement[]><any>bookformElem.getElementsByTagName("input"));
//            //create new book
//            let name: string;
//            let author: string;
//            let year: string;
//            let articlenumber: string;
//            let category: string;
//            let price: number;
//            for (var input of inputs) {
//                if (input.name == "name") {
//                    name = input.value;
//                }
//                if (input.name == "author") {
//                    author = input.value;
//                }
//                if (input.name == "year") {
//                    year = input.value;
//                }
//                if (input.name == "articlenumber") {
//                    articlenumber = input.value;
//                }
//                if (input.name == "price") {
//                    price = parseInt(input.value);
//                }
//                if (input.name == "category") {
//                    category = input.value;
//                }
//            }
//            let createdBook: Book = new Book(name, category, price, articlenumber, author, year);
//            products.push(createdBook);
//            alert("book added to products");
//        })
//    });
//})(); 
