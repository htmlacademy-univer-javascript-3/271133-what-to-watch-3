import { Link } from 'react-router-dom';
import { Loader } from '../../common-component/loader/loader';
import { AddReviewForm } from '../../common-component/review-form/review-form';
import { useMovie } from '../../hooks/movies';
import { usePathId } from '../../hooks/use-path-id';
import { Header } from '../../common-component/header/header';

export const AddReviewPage = () => {
  const id = usePathId();
  const { data: movie, isLoading } = useMovie(id);

  return (
    <Loader isLoading={isLoading} height={'100vh'} backgroundColor={'#e1b0b2'}>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={movie?.backgroundImage} alt={movie?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${ id}`} className="breadcrumbs__link">
                    {movie?.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={movie?.posterImage}
              alt={movie?.name}
              width="218"
              height="327"
            />
          </div>
        </div>

        <AddReviewForm />
      </section>
    </Loader>
  );
};
