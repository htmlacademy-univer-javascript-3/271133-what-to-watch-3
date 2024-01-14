import { MainPage } from './pages/main-page/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found-page/not-found-page.tsx';
import { SignInPage } from './pages/sign-in-page/sign-in-page.tsx';
import { MyListPage } from './pages/my-list-page/my-list-page.tsx';
import { MoviePage } from './pages/movie-page/movie-page.tsx';
import { PlayerPage} from './pages/player-page/player-page.tsx';
import { PrivateRoute } from './common-component/private-route/private-route.tsx';
import { AddReviewPage } from './pages/add-review-page/add-review-page';


export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/player/:id" element={<PlayerPage/>} />
        <Route path="films/:id" element={<MoviePage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/mylist/" element={<MyListPage/>} />
        <Route path="/films/:id/review/" element={<AddReviewPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
