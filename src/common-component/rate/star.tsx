type StarProps = {
  value: number;
  onClick: () => void;
  disabled?: boolean;
};

export const Star = ({value, onClick, disabled}: StarProps) => (
  <>
    <input
      className="rating__input"
      id={`star-${value}`}
      type="radio"
      name="rate"
      value={value}
      onClick={onClick}
      disabled={disabled}
    />
    <label className="rating__label" htmlFor={`star-${value}`}>
      Rate {value}
    </label>
  </>);
