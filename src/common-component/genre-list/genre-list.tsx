import {GenreItem} from './genre.tsx';

type GenresListProps = {
  genres: string[];
  activeGenre: string;
};

export const GenreList = ({genres, activeGenre}: GenresListProps) => (
  <ul className="catalog__genres-list">
    {genres.map((genre) => (
      <GenreItem key={genre} genre={genre} isActive={genre === activeGenre}/>
    ))}
  </ul>
);
