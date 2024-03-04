class BookClub {
  library;
  books = [];
  members = [];

  constructor(library) {
    this.library = library;
  }

  addBook(title, author) {
    // if(typeof(title) == 'string' && typeof(author) == 'string' ){
    // console.log(title);
    // }

    const existingBook = this.books.find((book) => book.title === title);
    if (existingBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    } else {
      this.books.push({ title, author });
      return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }
  }

  addMember(memberName) {
    const existingmember = this.members.find((member) => member === memberName);
    if (existingmember) {
      return `Member ${memberName} is already a part of the book club.`;
    } else {
      this.members.push(memberName);
      return `Member ${memberName} has been joined to the book club.`;
    }
  }

  assignBookToMember(memberName, bookTitle) {
    const isItAmember = this.members.indexOf(memberName);
    const incudesBook = this.books.findIndex(
      (book) => book.title === bookTitle
    );

    if (isItAmember == -1) {
      throw new Error(`Member ${memberName} not found.`);
    }
    if (incudesBook) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    const assignedBook = this.books.splice(incudesBook, 1);

    return `Member ${memberName} has been assigned the book "${assignedBook[0].title}" by ${assignedBook[0].author}.`;
  }

  generateReadingReport() {
    if (this.members == "") {
      return "No members in the book club.";
    }
    if (this.books.length - 1 < 0) {
      return "No available books in the library.";
    }

    let report = `Available Books in ${this.library} library:\n`;
    this.books.forEach((book) => {
      report += `"${book.title}" by ${book.author}\n`;
    });
    return report.trim();
  }
}

const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());
