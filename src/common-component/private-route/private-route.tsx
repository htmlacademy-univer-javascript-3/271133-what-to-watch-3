import {Navigate, Outlet} from 'react-router-dom';

export const PrivateRoute = () => {
  const hasAccess = true;
  return hasAccess ? <Outlet/> : <Navigate to={'/login'}/>;
};
