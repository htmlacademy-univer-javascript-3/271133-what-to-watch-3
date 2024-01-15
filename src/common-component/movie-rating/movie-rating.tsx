const convertMovieRatingToLevel = (rating: number): string => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  } else {
    return '';
  }
};

export type MovieRatingProps = {
  rating?: number;
  scoresCount?: number;
};

export const MovieRating = ({rating, scoresCount}: MovieRatingProps) => (
  <div className="film-rating">
    <div className="film-rating__score">{rating}</div>
    <p className="film-rating__meta">
      <span className="film-rating__level">
        {convertMovieRatingToLevel(rating || 0)}
      </span>
      <span className="film-rating__count">{scoresCount} ratings</span>
    </p>
  </div>
);
