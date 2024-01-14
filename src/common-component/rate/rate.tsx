import { Star } from './star.jsx';

const MAX_RATE = 10;

export type RateProps = {
    onClick: (value: number) => void;
};

export const Rate = ({ onClick }: RateProps) => (
  <div className="rating">
    <div className="rating__stars">
      {Array.from(Array(MAX_RATE).keys()).map((i) => (
        <Star
          key={MAX_RATE - i}
          value={MAX_RATE - i}
          onClick={() => onClick(MAX_RATE - i)}
        />
      ))}
    </div>
  </div>
);
