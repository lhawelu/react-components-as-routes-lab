import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,index) => (
        <div key={index}>
          <h3>{director.name}</h3>
          {director.movies.map((movie,index) => <ul key={index}>{movie}</ul>)}
        </div>
      ))}
    </div>
  );
}

export default Directors
