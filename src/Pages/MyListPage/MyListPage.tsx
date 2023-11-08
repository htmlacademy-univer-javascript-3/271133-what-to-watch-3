import { Footer } from '../../CommonComponent/Footer/Footer.tsx';
import { Header } from '../../CommonComponent/Header/Header.tsx';
import { MovieCardProps } from '../../CommonComponent/MovieCard/MovieCard';
import { MoviesList } from '../../CommonComponent/MoviesList/MoviesList';

export type MyListPageProps = {
    movies: MovieCardProps[];
};

export const MyListPage = ({movies}: MyListPageProps) => (
  <div className="user-page">
    <Header>
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesList movies={movies} />
    </section>
    <Footer />
  </div>
);
