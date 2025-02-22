class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newCondition) {

        if (newCondition < 0) {
            this._state = 0;
        } else if (newCondition > 100) {
            this._state = 100;
        } else {
            this._state = newCondition;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}


// task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let itemBooks = this.books[i];
            if (itemBooks[type] === value) {
                return itemBooks;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let findBook = null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                findBook = this.books[i];
                this.books = this.books.filter(function(item) {
                    return item.name !== bookName;
                });
                break;
            }
        }
        return findBook;
    }

}


let lib = new Library('Centralnaya');
let azbuka = new Book('Morshak', 'Azbuka', 1998, 33);

lib.addBook(azbuka);
