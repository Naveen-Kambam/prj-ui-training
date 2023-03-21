function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.movieInfo = `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}`;
}

let movie1 = new Movie("Top Gun", "Tony scott", 1986);
console.log(movie1.movieInfo);