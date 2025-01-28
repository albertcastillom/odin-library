  class Book{
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    toggleRead(){
      this.read = !this.read;
    }

    getInfo(){
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "READ" : "Not Read Yet"}`;
    }
  }

  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      this.render();
    }
  
    removeBook(index) {
      this.books.splice(index, 1);
      this.render();
    }
  
    toggleRead(index) {
      this.books[index].toggleRead();
      this.render();
    }
  
    render() {
      const libraryEl = document.querySelector("#library");
      libraryEl.innerHTML = "";
  
      this.books.forEach((book, i) => {
        const bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
          <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
          </div>
          <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "READ" : "Not Read Yet"}</p>
            <button class="remove-btn" data-index="${i}">Remove</button>
            <button class="toggle-read-btn" data-index="${i}">Toggle Read</button>
          </div>
        `;
        libraryEl.appendChild(bookEl);
      });
  
      this.addEventListeners();
    }
  
    addEventListeners() {
      document.querySelectorAll(".remove-btn").forEach((btn) =>
        btn.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          this.removeBook(index);
        })
      );
  
      document.querySelectorAll(".toggle-read-btn").forEach((btn) =>
        btn.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          this.toggleRead(index);
        })
      );
    }
  }
  
  const library = new Library();

  document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    library.addBook(newBook);
  });

  document.querySelector("#new-book-btn").addEventListener("click", () => {
    document.querySelector("#new-book-form").style.display = "block";
  });






//   const myLibrary = [];

//   function Book(title, author, pages, read){
//       this.title = title;
//       this.author = author;
//       this.pages = pages;
//       this.read = read;
//       this.info = function(){
//           info = title + " by " + author + ", " + pages + " pages, " + read ;
//           return info;
//         };
//     }

//   function render(){
//     let libraryEl = document.querySelector("#library");
//     libraryEl.innerHTML = "";
//     for ( let i = 0; i < myLibrary.length; i++){
//       let book = myLibrary[i];
//       let bookEl = document.createElement("div");
//       bookEl.setAttribute("class", "book-card");
//       bookEl.innerHTML = `
//         <div class="card-header">
//           <h3 class="title">${book.title}</h3>
//           <h5 class="author">by ${book.author}</h5>
//         </div>
//         <div class="card-body">
//           <p>${book.pages} pages</p>
//           <p class="read-status">${book.read ? "READ" : "Not Read Yet"}</p>
//           <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
//           <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
//         </div>
//       `;
//       libraryEl.appendChild(bookEl);
//     }
//   };

//   function removeBook(index){
//     myLibrary.splice(index, 1);
//     render();
//   }

  
//   function addBookToLibrary(){
//     let title = document.querySelector("#title").value;
//     let author = document.querySelector("#author").value;
//     let pages = document.querySelector("#pages").value;
//     let read = document.querySelector("#read").value;
//     let newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
//     render();
//   }


// let newBookbtn = document.querySelector("#new-book-btn");
// newBookbtn.addEventListener("click", function(){
//   let newBookForm = document.querySelector("#new-book-form");
//     newBookForm.style.display = "block";
// })
  
// document.querySelector("#new-book-form").addEventListener("submit", function(){
//   event.preventDefault();
//   addBookToLibrary();
// });

