import { useState } from 'react';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieColor, setMovieColor] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
