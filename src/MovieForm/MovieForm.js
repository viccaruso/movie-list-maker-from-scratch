import React from 'react';

export default function MovieForm({ movieFormTitle, movieFormDirector, movieFormYear, movieFormColor, setMovieFormTitle, setMovieFormDirector, setMovieFormYear, setMovieFormColor, addMovie }) {
  return (
    <form className='movie-form'>
      <label>Title
        <input />
      </label>
      <label>Director
        <input />
      </label>
      <label>Year
        <input />
      </label>
      <label>Background Color
        <select>
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
