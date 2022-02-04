import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className='movie-poster'>
      <p>{movie.title}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div >
  );
}
