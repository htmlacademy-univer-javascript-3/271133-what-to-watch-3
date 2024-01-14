import { Link } from 'react-router-dom';
import { usePathId } from '../../hooks/use-path-id';
import { useAuthorizationStatusSelector } from '../../store/user/selector';
import { useMovie, useSimilarMovies } from '../../hooks/movies';
import { Loader } from '../../common-component/loader/loader';
import { AuthorizationStatus } from '../../types/auth';
import { Play } from '../../common-component/buttons/play/play';
import { Favourite } from '../../common-component/buttons/favourite/favourite';
import { Tabs } from '../../common-component/tab/tabs';
import { Tab } from '../../common-component/tab/tab';
import { OverviewTab } from '../../common-component/tab/overview-tab';
import { DetailsTab } from '../../common-component/tab/details-tab';
import { ReviewsTab } from '../../common-component/tab/reviews-tab';
import { MoviesList } from '../../common-component/movies-list/movies-list';
import { Footer } from '../../common-component/footer/footer';
import { Header } from '../../common-component/header/header';

export const MoviePage = () => {
  const id = usePathId();
  const authStatus = useAuthorizationStatusSelector();
  const { data: film, error, isLoading } = useMovie(id);
  const { data: similarMovies } = useSimilarMovies(id);

  return (
    <Loader isLoading={isLoading} height={'100vh'} backgroundColor={'#e1b0b2'}>
      <div>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div
              className="film-card__bg"
              style={{ backgroundColor: film?.backgroundColor }}
            >
              <img src={film?.backgroundImage} alt={film?.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            {!error ? (
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{film?.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{film?.genre}</span>
                    <span className="film-card__year">{film?.released}</span>
                  </p>

                  <div className="film-card__buttons">
                    <Play movieId={id} />
                    {authStatus === AuthorizationStatus.Auth && (
                      <Favourite movieId={id} />
                    )}
                    {authStatus === AuthorizationStatus.Auth && (
                      <Link
                        to={`/films/${id}/review`}
                        className="btn film-card__button"
                      >3
                              Add review
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div> {error} </div>
            )}
          </div>

          {!error && (
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={film?.posterImage}
                    alt={film?.name}
                    width="218"
                    height="327"
                  />
                </div>

                <div className="film-card__desc">
                  <Tabs>
                    <Tab name="Overview" content={<OverviewTab />} />
                    <Tab name="Details" content={<DetailsTab />} />
                    <Tab name="Reviews" content={<ReviewsTab />} />
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </section>
        {!error && (
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <MoviesList movies={similarMovies} />
            </section>
            <Footer />
          </div>
        )}
      </div>
    </Loader>
  );
};
