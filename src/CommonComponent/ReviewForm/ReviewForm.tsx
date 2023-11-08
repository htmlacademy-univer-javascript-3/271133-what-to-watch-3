import { Link } from 'react-router-dom';

export type FilmCardProps = {
    id: number;
    name: string;
    imgSrc: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export const MovieCard = ({
  id,
  name,
  imgSrc,
  onMouseEnter,
  onMouseLeave,
} : FilmCardProps) => (
  <article className="small-film-card catalog__films-card"
    onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
  >
    <div className="small-film-card__image">
      <img
        src={imgSrc}
        alt={name}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
    </h3>
  </article>
);
