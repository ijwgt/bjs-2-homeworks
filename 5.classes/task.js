class PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		  this.name = name;
		  this.releaseDate = releaseDate;
		  this.pagesCount = pagesCount;
		  this.state = 100;
		  this.type = null;
	}
	
	fix() {
	  this.state *= 1.5;
	}
  
	set state(number) {
	  if (number < 0) {
		this._state = 0;
	  } else if (number > 100) {
		this._state = 100;
	  } else {
		this._state = number;
	  }
	}
  
	get state() {
	  return this._state;
	}
  }
  
  class Magazine extends PrintEditionItem {
	constructor(type, name, releaseDate, pagesCount) {
	  super(type, name, releaseDate, pagesCount);
	  this.type = "magazine";
	}
  }
  
  class Book extends PrintEditionItem {
	constructor(author, type, name, releaseDate, pagesCount) {
	  super(type, name, releaseDate, pagesCount);
	  this.author = author;
	  this.type = "book";
	}
  }
  
  class NovelBook extends Book {
	constructor(author, type, releaseDate, pagesCount) {
	  super(author, type, releaseDate, pagesCount);
	  this.type = "novel";
	}
  }
  
  class FantasticBook extends Book {
	constructor(author, type, releaseDate, pagesCount) {
	  super(author, type, releaseDate, pagesCount);
	  this.type = "fantastic";
	}
  }
  
  class DetectiveBook extends Book {
	constructor(author, type, releaseDate, pagesCount) {
	  super(author, type, releaseDate, pagesCount);
	  this.type = "detective";
	}
  }
  
  
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
	  let findBook = this.books.find(book => book[type] === value);
	  
	  if (typeof findBook === 'object') {
		return findBook;
	  } else {
		  return null;
		}
	  }
  
	  giveBookByName(bookName) {
		  let giveBook = this.books.find(book => 
			book.name === bookName);
		
		  if (typeof giveBook === "object") {
			let index = this.books.indexOf(giveBook);
			this.books.splice(index, 1);
			return giveBook;
		  } else {
			  return null;
			}
	  }
  }