import { MovieCardProps } from '../../CommonComponent/MovieCard/MovieCard.tsx';
import { Footer } from '../../CommonComponent/Footer/Footer.tsx';
import { Header } from '../../CommonComponent/Header/Header.tsx';
import { MoviesList } from '../../CommonComponent/MoviesList/MoviesList';


type MainProps = {
    name: string;
    genre: string;
    releaseDate: number;
    movies: MovieCardProps[];
};

export const MainPage = ({name, genre, releaseDate, movies}: MainProps) => (
  <>
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{releaseDate}</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">
                            All genres
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Comedies
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Crime
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Documentary
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Dramas
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Horror
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Kids & Family
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Romance
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Sci-Fi
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
                            Thrillers
            </a>
          </li>
        </ul>
        <MoviesList movies={movies}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">
                        Show more
          </button>
        </div>
      </section>

      <Footer />
    </div>
  </>
);
