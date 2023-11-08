import { MovieCard, MovieCardProps } from '../MovieCard/MovieCard';
import { useState } from 'react';

type MoviesListProps = {
    movies: MovieCardProps[];
};

export const MoviesList = ({movies}: MoviesListProps) => {
  const [, setActiveFilm] = useState<number | null>();
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          onMouseEnter={() => {
            setActiveFilm(movie.id);
          }}
          onMouseLeave={() => {
            setActiveFilm(null);
          }}
        />
      ))}
    </div>
  );
};
