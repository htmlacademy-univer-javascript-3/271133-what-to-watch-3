import { Logo } from '../logo/logo.tsx';
import { ReactNode, useCallback } from 'react';
import { useAuthorizationStatusSelector, useAvatarLinkSelector } from '../../store/user/selector';
import { useAppDispatch } from '../../hooks/store';
import { logoutAction } from '../../store/api-action';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../types/auth';

type HeaderProps = {
    children?: ReactNode;
}

export const Header = ({children}: HeaderProps) => {
  const authStatus = useAuthorizationStatusSelector();
  const avatarLink = useAvatarLinkSelector();
  const dispatch = useAppDispatch();
  const handleSignOut = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      dispatch(logoutAction());
    },
    [dispatch],
  );

  return (
    <header className="page-header film-card__head">
      <Logo />
      {children}
      {authStatus === AuthorizationStatus.Auth ? (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to="/mylist">
                <img
                  src={avatarLink}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <a onClick={handleSignOut} className="user-block__link">
                            Sign out
            </a>
          </li>
        </ul>
      ) : (
        <div className="user-block">
          <Link to="/login" className="user-block__link">
                        Sign in
          </Link>
        </div>
      )}
    </header>
  );

};
