import { Footer } from '../../CommonComponent/Footer/Footer.tsx';
import { Header } from '../../CommonComponent/Header/Header.tsx';
import { Link, useParams } from 'react-router-dom';
import { MOVIES } from '../../Mocks/Movies';
import { Tabs } from '../../CommonComponent/Tab/Tabs';
import { Tab } from '../../CommonComponent/Tab/Tab';
import { DetailsTab } from '../../CommonComponent/Tab/DetailsTab';
import { OverviewTab } from '../../CommonComponent/Tab/OverviewTab';
import { ReviewsTab } from '../../CommonComponent/Tab/ReviewsTab';
import { MoviesList } from '../../CommonComponent/MoviesList/MoviesList';

export const MoviePage = () => {
  const {id} = useParams();
  const movie = MOVIES[Number(id) - 1];
  const movies = MOVIES.slice(5, 9);
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.imgSrc} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${movie.id}/review`} className="btn film-card__button">
                                    Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.imgSrc} alt={movie.name}
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
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={movies} />
        </section>
        <Footer />
      </div>
    </div>
  );
};
