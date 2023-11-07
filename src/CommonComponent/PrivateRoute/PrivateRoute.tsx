import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const hasAccess = false;
  return hasAccess ? <Outlet /> : <Navigate to={'/login'} />;
};
