import {useCallback, useState, MouseEvent} from 'react';
import {useAppDispatch} from '../../hooks/store';
import {usePathId} from '../../hooks/use-path-id';
import {useNavigate} from 'react-router-dom';
import {postCommentAction} from '../../store/api-action';
import {Star} from '../rate/star';

export type ReviewForm = {
  rating: number;
  comment: string;
};

export const AddReviewForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const id = usePathId();

  const [reviewForm, setReviewForm] = useState<ReviewForm>({
    rating: 0,
    comment: '',
  });

  const handleChange = useCallback(
    (nextValue: Partial<ReviewForm>) => {
      setReviewForm((prevValue) => prevValue && {...prevValue, ...nextValue});
    },
    [setReviewForm],
  );

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setDisabled(true);
      e.preventDefault();
      dispatch(postCommentAction({movieId: id, ...reviewForm})).then(
        (result) => {
          setDisabled(false);
          if (result.payload) {
            navigate(`/films/${id}`);
          }
        },
      );
    },
    [dispatch, reviewForm, id, navigate],
  );

  const MAX_RATING = 10;
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(MAX_RATING).keys()).map((i) => (
              <Star
                key={MAX_RATING - i}
                value={MAX_RATING - i}
                onClick={() => handleChange({rating: MAX_RATING - i})}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewForm.comment}
            onChange={(e) => {
              handleChange({
                comment: e.target.value,
              });
            }}
            disabled={disabled}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                reviewForm.comment.length < 50 ||
                reviewForm.comment.length > 400 ||
                reviewForm.rating === 0 ||
                disabled
              }
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
