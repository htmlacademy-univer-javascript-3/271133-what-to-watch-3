import { MovieListType } from '../../Types/Movies';
import {MovieCard} from '../movie-card/movie-card.jsx';

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
