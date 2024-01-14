import { MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export type PlayButtonProps = {
    movieId?: string;
};

export const Play = ({ movieId }: PlayButtonProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (movieId) {
        navigate(`/player/${ movieId}`);
      }
    },
    [movieId, navigate],
  );

  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};
