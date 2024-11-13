function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      info = title + " by " + author + ", " + pages + " pages, " + read ;
      return info;
    };
  }

  const book1 = new book("Percy Jackson", "olypian", "365", "read already");
  console.log(book1.info());