import React from 'react';
import Movie from './Movie';
import './MovieList.css';

export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      { movies.map((movie, i) => <Movie key={movie.title + i} movie={movie} />) }
    </div>
  );
}
