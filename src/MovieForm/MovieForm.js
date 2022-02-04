import React from 'react';

export default function MovieForm({ movieFormTitle, movieFormDirector, movieFormYear, movieFormColor, setMovieFormTitle, setMovieFormDirector, setMovieFormYear, setMovieFormColor, addMovie }) {
  return (
    <form className='movie-form'>
      <label>Title
        <input required value={movieFormTitle} onChange={(e) => setMovieFormTitle(e.target.value)} />
      </label>
      <label>Director
        <input required value={movieFormDirector} onChange={(e) => setMovieFormDirector(e.target.value)} />
      </label>
      <label>Year
        <input required value={movieFormYear} onChange={(e) => setMovieFormYear(e.target.value)} />
      </label>
      <label>Background Color
        <select value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)} >
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
        </select>
      </label>
    </form>
  );
}
