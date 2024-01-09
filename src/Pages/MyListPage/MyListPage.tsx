import { useFavouriteMovies } from '../../hooks/Movies';
import { MoviesList } from '../../CommonComponent/MoviesList/MoviesList';
import { Footer } from '../../CommonComponent/Footer/Footer';
import { Header } from '../../CommonComponent/Header/Header';

export const MyListPage = () => {
  const {data: movies} = useFavouriteMovies();
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">
                    My list <span className="user-page__film-count">{movies.length}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={movies} />
      </section>
      <Footer />
    </div>
  );
};
