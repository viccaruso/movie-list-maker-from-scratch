import React from 'react';
import './MovieForm.css';

export default function MovieForm({ movieFormTitle, movieFormDirector, movieFormYear, movieFormColor, setMovieFormTitle, setMovieFormDirector, setMovieFormYear, setMovieFormColor, addMovie }) {

  function handleSubmit(e) {
    e.preventDefault(); //Always
    const movie = { //Build a movie object
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYear,
      color: movieFormColor
    };

    addMovie(movie); //Send movie to parent state
    //Reset form fields to default
    setMovieFormTitle('');
    setMovieFormDirector('');
    setMovieFormYear('');
    setMovieFormColor('red');
  }
  return (
    <form className='movie-form' onSubmit={handleSubmit}>
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
      <button>Add Movie</button>
    </form>
  );
}
