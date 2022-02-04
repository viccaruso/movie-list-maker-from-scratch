import React from 'react';

export default function Movie({ movie }) {
  return (
    <div className='movie-poster' style={{ borderColor: movie.color }}>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <h3>{movie.director}</h3>
    </div >
  );
}
