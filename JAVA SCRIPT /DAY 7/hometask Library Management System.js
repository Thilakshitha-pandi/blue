class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedDate = new Date(publishedYear, 0);
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.publishedDate.getFullYear()}.`;
  }
}

class EBook extends Book {
  constructor(title, author, publishedYear, fileSize) {
    super(title, author, publishedYear);
    this.fileSize = fileSize;
  }

  getSummary() {
    return `${super.getSummary()} File size: ${this.fileSize} MB.`;
  }
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book2 = new Book("The Land of Stories: The Wishing Spell", "Chris Colfer", 2012);

const ebook1 = new EBook("Harry Potter and the Chamber of Secrets (eBook)", "J.K. Rowling", 1998, 2.1);
const ebook2 = new EBook("The Land of Stories: The Enchantress Returns (eBook)", "Chris Colfer", 2013, 3.5);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(ebook1.getSummary());
console.log(ebook2.getSummary());
