import { MovieCard } from '../MovieCard/MovieCard';
import { MovieListType } from '../../Types/Movies';

type MoviesListProps = {
    movies: MovieListType[];
};

export const MoviesList = ({movies}: MoviesListProps) => (
  <div className="catalog__films-list">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        previewImage={movie.previewImage}
        previewVideoLink={movie.previewVideoLink}
        name={movie.name}
        id={movie.id}
      />
    ))}
  </div>
);
