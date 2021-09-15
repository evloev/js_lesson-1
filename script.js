let numberOfFilms = +prompt("сколько фильмов вы посмотрели", "");

let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("один из последних просмотренных фильмов?", ""),
  b = prompt("ваша оценка этому фильму?", ""),
  c = prompt("один из последних просмотренных фильмов?", ""),
  d = prompt("ваша оценка этому фильму?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
