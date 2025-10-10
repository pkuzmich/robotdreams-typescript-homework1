/* створити клас Library для зберігання книг та інших видів друкованих матеріалів (журнали, брошури).
   реалізувати наступний функціонал:
   1. метод getInfo для отримання інформації про матеріал в залежності від його типу
   2. додавання нового матеріалу
   3. перегляд списку всіх матеріалів
   4. фильтрування матеріалів за різними критеріями (автор, рік видання, тип матеріалу)
   5. отримання інформаації за унікальним ідентифікатором
   6. видалення елементу
   7. оновлення інформації про елемент
*/

class LibraryItem {
  id: number
  title: string
  year: number
  author: string
  isAvailable: boolean

  constructor(id: number, title: string, year: number, author: string, isAvailable: boolean) {
    this.id = id
    this.title = title
    this.year = year
    this.author = author
    this.isAvailable = isAvailable
  }

  getInfo() {
    console.log(
      `Title: ${this.title} Author: ${this.author} Year: ${this.year} Available: ${this.isAvailable}`
    )
  }
}

class Book extends LibraryItem {
  genre: string
  pages: number

  constructor(
    id: number,
    title: string,
    year: number,
    author: string,
    isAvailable: boolean,
    genre: string,
    pages: number
  ) {
    super(id, title, year, author, isAvailable)
    this.genre = genre
    this.pages = pages
  }

  getInfo() {
    return `Genre: ${this.genre} Pages: ${this.pages}`
  }
}

class Magazine extends LibraryItem {
  issueNumber: number

  constructor(
    id: number,
    title: string,
    year: number,
    author: string,
    isAvailable: boolean,
    issueNumber: number
  ) {
    super(id, title, year, author, isAvailable)
    this.issueNumber = issueNumber
  }

  getInfo() {
    return `Issue Number: ${this.issueNumber}`
  }
}

class Brochure extends LibraryItem {
  topic: string

  constructor(
    id: number,
    title: string,
    year: number,
    author: string,
    isAvailable: boolean,
    topic: string
  ) {
    super(id, title, year, author, isAvailable)
    this.topic = topic
  }

  getInfo() {
    return `Topic: ${this.topic}`
  }
}

class Library {
  private items: LibraryItem[] = []

  addItem(item: LibraryItem) {
    this.items.push(item)
  }

  infoItem(id: number) {
    return this.items.find((item) => item.id === id)
  }

  updateItem(id: number, updates: Partial<LibraryItem>) {
    this.items = this.items.map((item) => (item.id === id ? Object.assign(item, updates) : item))
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id)
  }

  getItemsByTitle(title: string) {
    return this.items.filter((item) => item.title === title)
  }

  getItemsByAuthor(author: string) {
    return this.items.filter((item) => item.author === author)
  }

  getItemsByYear(year: number) {
    return this.items.filter((item) => item.year === year)
  }

  getItems() {
    return this.items
  }
}

const library = new Library()

const book = new Book(1, 'The Great Gatsby', 1925, 'F. Scott Fitzgerald', true, 'Fiction', 180)
const magazine = new Magazine(2, 'National Geographic', 2024, 'National Geographic Society', true, 123)
const brochure = new Brochure(3, 'City Guide', 2023, 'City of New York', true, 'New York City')
const brochureNew = new Brochure(4, 'City Guide', 2025, 'John Doe', true, 'New York City')
const magazineNew = new Magazine(5, 'National Geographic', 2025, 'National Geographic Society', true, 150)

library.addItem(book)
library.addItem(magazine)
library.addItem(brochure)
library.addItem(brochureNew)
library.addItem(magazineNew)

library.updateItem(1, { ...book, title: 'The Great Gatsby 2', isAvailable: false })
// library.deleteItem(1)
// library.deleteItem(3)

// console.log(library.infoItem(1))
// console.log(library.getItemsByTitle('City Guide'))
// console.log(library.getItemsByAuthor('John Doe'))
console.log(library.getItemsByYear(2025))
// console.log(library.getItems())
