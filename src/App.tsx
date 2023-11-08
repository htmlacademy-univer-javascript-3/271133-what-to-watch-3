import { MainPage } from './Pages/MainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/404Page/404Page.tsx';
import { SignInPage } from './Pages/SignInPage/SignInPage.tsx';
import { MyListPage } from './Pages/MyListPage/MyListPage.tsx';
import { MoviePage } from './Pages/MoviePage/MoviePage.tsx';
import { AddReviewPage, AddReviewPageProps } from './Pages/AddReviewPage/AddReviewPage.tsx';
import { PlayerPage, PlayerPageProps } from './Pages/PlayerPage/PlayerPage.tsx';
import { PrivateRoute } from './CommonComponent/PrivateRoute/PrivateRoute.tsx';
import { MovieCardProps } from './CommonComponent/MovieCard/MovieCard';

type AppProps = {
    name: string;
    genre: string;
    releaseDate: number;
    movies: MovieCardProps[];
    review: AddReviewPageProps;
    player: PlayerPageProps;
};

export const App = (props: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<MainPage {...props} />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/player/:id" element={<PlayerPage{...props.player} />} />
        <Route path="films/:id">
          <Route index element={<MoviePage />} />
          <Route path="/films/:id/review" element={<AddReviewPage {...props.review} />} />
        </Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/mylist/" element={<MyListPage movies={props.movies} />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
