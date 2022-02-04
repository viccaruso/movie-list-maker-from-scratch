import React from 'react';

export default function Filter({ filterQuery, setFilterQuery }) {
  return (
    <div className='movie-filter'>
      <input value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)} />
    </div>
  );
}
