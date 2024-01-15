import classNames from 'classnames';
import {Link} from 'react-router-dom';

type LogoProps = {
  isLight?: boolean;
}

export const Logo = ({isLight}: LogoProps) => (
  <div className="logo">
    <Link to={'/'} className={classNames('logo__link', isLight ? 'logo__link--light' : undefined)}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);
