// Define a Media class that serves as a base class for different media types
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getter for the title of the media
  get title() {
    return this._title;
  }

  // Getter for the checked-out status
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  // Getter for the ratings array
  get ratings() {
    return this._ratings;
  }

  // Setter to change the checked-out status
  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }

  // Method to toggle the checked-out status
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Method to calculate the average rating of the media
  getAverageRating() {
    if (this._ratings.length === 0) return 0;

    const ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const average = ratingsSum / this._ratings.length;
    return average;
  }

  // Method to add a new rating to the ratings array
  addRating(rating) {
    this._ratings.push(rating);
  }
}

// Book class that inherits from Media, represents a book with author and pages properties
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  // Getter for the author of the book
  get author() {
    return this._author;
  }

  // Getter for the number of pages
  get pages() {
    return this._pages;
  }
}

// Movie class that inherits from Media, represents a movie with director and runTime properties
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  // Getter for the director of the movie
  get director() {
    return this._director;
  }

  // Getter for the runtime of the movie
  get runTime() {
    return this._runTime;
  }
}

// Create an instance of Book
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

// Toggle check-out status and display it
historyOfEverything.toggleCheckOutStatus();
console.log(
  `Is "${historyOfEverything.title}" checked out? ${historyOfEverything.isCheckedOut}`
);

// Add ratings to the book and display the average rating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(
  `Average rating for "${
    historyOfEverything.title
  }": ${historyOfEverything.getAverageRating()}`
);

// Create an instance of Movie
const speed = new Movie("Jan de Bont", "Speed", 116);

// Toggle check-out status and display it
speed.toggleCheckOutStatus();
console.log(`Is "${speed.title}" checked out? ${speed.isCheckedOut}`);

// Add ratings to the movie and display the average rating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`Average rating for "${speed.title}": ${speed.getAverageRating()}`);
