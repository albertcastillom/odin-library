const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        info = title + " by " + author + ", " + pages + " pages, " + read ;
        return info;
      };
  }

  function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook.info());
  }

  addBookToLibrary("Percy Jackson", "olypian", "365", "read already");

console.log(myLibrary);
  