import { MainPage } from './pages/main-page/main-page.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found-page/not-found-page.jsx';
import { SignInPage } from './pages/sign-in-page/sign-in-page.jsx';
import { MyListPage } from './pages/my-list-page/my-list-page.jsx';
import { MoviePage } from './pages/movie-page/movie-page.jsx';
import { PlayerPage} from './pages/player-page/player-page.jsx';
import { PrivateRoute } from './common-component/private-route/private-route.jsx';
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
