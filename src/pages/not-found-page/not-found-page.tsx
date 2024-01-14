import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <>
    <h1><b>404</b> Page not found</h1>
    <p>
      <Link to={'/'}>Main page</Link>
    </p>
  </>
);
