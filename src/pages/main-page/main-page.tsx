import {useAuthorizationStatusSelector} from '../../store/user/selector';
import {Header} from '../../common-component/header/header';
import {Footer} from '../../common-component/footer/footer';
import {AuthorizationStatus} from '../../types/auth';
import {Play} from '../../common-component/buttons/play/play';
import {Favourite} from '../../common-component/buttons/favourite/favourite';
import {Loader} from '../../common-component/loader/loader';
import {useCurrentGenreSelector} from '../../store/movies/selector';
import {ALL_GENRES, MovieListType} from '../../types/movies';
import {useCallback, useEffect, useState} from 'react';
import classNames from 'classnames';
import {toast} from 'react-toastify';
import isActive = toast.isActive;
import {setGenre} from '../../store/movies/movies';
import {useAppDispatch} from '../../hooks/store';
import {MoviesList} from '../../common-component/movies-list/movies-list';
import {useMovies, usePromoMovie} from '../../hooks/movies.ts';


const filterMovies = (
  films: Array<MovieListType>,
  genre: string,
): Array<MovieListType> => {
  if (genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

const extractAllGenres = (films: Array<MovieListType>): Array<string> => {
  const genres = films.map((movie) => movie.genre);
  return [ALL_GENRES, ...new Set(genres)];
};

export const MainPage = () => {
  const authStatus = useAuthorizationStatusSelector();
  const {data: promoMovie} = usePromoMovie();
  const {data: allMovies, isLoading} = useMovies();
  const currentGenre = useCurrentGenreSelector();
  const movies = filterMovies(allMovies, currentGenre);
  const genres = extractAllGenres(allMovies);
  const [countMovies, setCountMovies] = useState(10);
  const dispatch = useAppDispatch();

  const handleShowMore = useCallback(() => {
    setCountMovies((prev) => prev + 10);
  }, [setCountMovies]);

  useEffect(() => {
    setCountMovies(10);
  }, [currentGenre]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoMovie?.backgroundImage} alt={promoMovie?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoMovie?.posterImage}
                alt={promoMovie?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoMovie?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoMovie?.genre}</span>
                <span className="film-card__year">{promoMovie?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Play movieId={promoMovie?.id}/>
                {authStatus === AuthorizationStatus.Auth && (
                  <Favourite movieId={promoMovie?.id}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Loader isLoading={isLoading}>
            <ul className="catalog__genres-list">
              {genres.map((genre) => (
                <li key={genre}
                  className={classNames('catalog__genres-item', {
                    'catalog__genres-item--active': isActive,
                  })}
                >
                  <button
                    className="catalog__genres-link"
                    onClick={() => {
                      dispatch(setGenre(genre));
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {genre}
                  </button>
                </li>))}
            </ul>
            <MoviesList movies={movies?.slice(0, countMovies)}/>
            {countMovies < movies?.length && (
              <div className="catalog__more">
                <button className="catalog__button" type="button" onClick={handleShowMore}>
                  Show more
                </button>
              </div>)}
          </Loader>
        </section>
        <Footer/>
      </div>
    </>
  );
};
