import {usePathId} from '../../hooks/use-path-id.js';
import {useComments} from '../../hooks/movies.js';
import {Loader} from '../loader/loader.tsx';

export const ReviewsTab = () => {
  const id = usePathId();
  const {data: comments, isLoading} = useComments(id);
  const convert = (date: string) => new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <Loader isLoading={isLoading}>
          {comments.map((comment) => (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user}</cite>
                  <time className="review__date" dateTime="2016-12-24">
                    {convert(comment.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          ))}
        </Loader>
      </div>
    </div>
  );
};
