import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Player } from './Player';

export type MovieCardProps = {
    id: number;
    name: string;
    imgSrc: string;
    videoSrc: string;
};
export const MovieCard = ({
  id,
  name,
  imgSrc,
  videoSrc
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="small-film-card__image">
        <Player videoSrc={videoSrc} imgSrc={imgSrc} isHovered={isHovered} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

