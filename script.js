const numberOfFilms = +prompt('Siz qancha filmni ko`rib bo`lgansiz?', ''); //1

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}; //2

const a = prompt('Sizning oxirgi ko`rgan filmingiz?', ''),
      b = prompt('U filmga qanaqa baho berasiz?', ''),
      c = prompt('Sizning oxirgi ko`rgan filmingiz?', ''),
      d = prompt('U filmga qanaqa baho berasiz?', '');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);