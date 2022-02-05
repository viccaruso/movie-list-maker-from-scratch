import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { useMovieForm } from './useMovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');

  const { movieFormTitle,
    setMovieFormTitle,
    movieFormYear,
    setMovieFormYear,
    movieFormDirector,
    setMovieFormDirector,
    movieFormColor,
    setMovieFormColor } = useMovieForm();

  function addMovie(movie) {
    setAllMovies([...allMovies, movie]);
  }

  function deleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setFilterQuery('');
    setAllMovies([...allMovies]);
  }

  useEffect(() => {
    const filteredList = allMovies.filter(movie => movie.title.includes(filterQuery));
    setFilteredMovies(filteredList);

  }, [filterQuery, allMovies]);

  return (
    <div className="App">
      <MovieForm
        movieFormTitle={movieFormTitle}
        movieFormDirector={movieFormDirector}
        movieFormYear={movieFormYear}
        movieFormColor={movieFormColor}
        setMovieFormTitle={setMovieFormTitle}
        setMovieFormDirector={setMovieFormDirector}
        setMovieFormYear={setMovieFormYear}
        setMovieFormColor={setMovieFormColor}
        addMovie={addMovie} />
      <p>Filter Movies</p>
      <Filter filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
      <MovieList 
        movies={filteredMovies.length ? filteredMovies : allMovies}
        deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
