import React, { FC } from 'react'
import PopularMovies from './PopularMovies'
import FavoriteMovies from './FavoriteMovies/FavoriteMovies'


const MoviesContainer: FC = () => {
  return <div>
    <PopularMovies></PopularMovies>
    <FavoriteMovies></FavoriteMovies>
  </div>
}

export default MoviesContainer