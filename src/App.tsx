import { MainPage } from './Pages/MainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Pages/404Page/404Page.tsx';
import { SignInPage } from './Pages/SignInPage/SignInPage.tsx';
import { MyListPage } from './Pages/MyListPage/MyListPage.tsx';
import { MoviePage } from './Pages/MoviePage/MoviePage.tsx';
import { PlayerPage} from './Pages/PlayerPage/PlayerPage.tsx';
import { PrivateRoute } from './CommonComponent/PrivateRoute/PrivateRoute.tsx';
import { AddReviewPage } from './Pages/AddReviewPage/AddReviewPage';


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
        <Route path="/films/${id}/review" element={<AddReviewPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
