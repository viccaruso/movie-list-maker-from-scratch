import { useState } from 'react';

export function useMovieForm() {
  const [movieFormTitle, setMovieFormTitle] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('red');


  return {
    movieFormTitle,
    setMovieFormTitle,
    movieFormYear,
    setMovieFormYear,
    movieFormDirector,
    setMovieFormDirector,
    movieFormColor,
    setMovieFormColor
  };
}