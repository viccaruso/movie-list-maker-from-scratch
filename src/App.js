import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm/MovieForm';
import MovieList from './MovieList/MovieList';

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
      <MovieList movies={allMovies} />
    </div>
  );
}

export default App;
