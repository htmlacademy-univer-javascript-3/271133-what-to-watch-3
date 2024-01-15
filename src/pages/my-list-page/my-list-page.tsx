import {useFavouriteMovies} from '../../hooks/movies';
import {MoviesList} from '../../common-component/movies-list/movies-list';
import {Footer} from '../../common-component/footer/footer';
import {Header} from '../../common-component/header/header';
import {useEffect} from 'react';

export const MyListPage = () => {
  const {data: movies, fetchFavouriteMovies} = useFavouriteMovies();
  useEffect(() => {
    fetchFavouriteMovies();
  }, [fetchFavouriteMovies]);
  return (
    <div className="user-page">
      <Header isListPage>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{movies.length}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={movies}/>
      </section>
      <Footer/>
    </div>
  );
};
