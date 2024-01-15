import {MovieCard} from '../movie-card/movie-card';
import {MovieListType} from '../../types/movies';

type MoviesListProps = {
  movies: MovieListType[];
};

export const MoviesList = ({movies}: MoviesListProps) => (
  <div className="catalog__films-list">
    {movies.map((movie) => (
      <MovieCard
        genre={movie.genre}
        key={movie.id}
        previewImage={movie.previewImage}
        previewVideoLink={movie.previewVideoLink}
        name={movie.name}
        id={movie.id}
      />
    ))}
  </div>
);
