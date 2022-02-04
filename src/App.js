import { useState } from 'react';
import './App.css';
import Filter from './Filter';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('red');

  function addMovie(movie) {
    setAllMovies([...allMovies, movie]);
  }

  function deleteMovie(title) {

  }

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
