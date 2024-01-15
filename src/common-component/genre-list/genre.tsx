import classNames from 'classnames';
import {useAppDispatch} from '../../hooks/store';
import {setGenre} from '../../store/movies/movies';

type GenreItemProps = {
  genre: string;
  isActive?: boolean;
};

export const GenreItem = ({genre, isActive}: GenreItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={classNames('catalog__genres-item', {
        'catalog__genres-item--active': isActive,
      })}
    >
      <button
        className="catalog__genres-link"
        onClick={() => {
          dispatch(setGenre(genre));
        }}
      >
        {genre}
      </button>
    </li>
  );
};
