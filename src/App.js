import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm/MovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  // const [movieTitle, setMovieTitle] = useState('');
  // const [movieYear, setMovieYear] = useState('');
  // const [movieDirector, setMovieDirector] = useState('');
  // const [movieColor, setMovieColor] = useState('');
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
    </div>
  );
}

export default App;
