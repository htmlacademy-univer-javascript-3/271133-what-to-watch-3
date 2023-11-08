import { MovieCard, MovieCardProps } from '../MovieCard/MovieCard';

type MoviesListProps = {
    movies: MovieCardProps[];
};

export const MoviesList = ({movies}: MoviesListProps) => (
  <div className="catalog__films-list">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        {...movie}
      />
    ))}
  </div>
);
