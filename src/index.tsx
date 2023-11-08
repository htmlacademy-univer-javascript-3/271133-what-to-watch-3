import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { MOVIES } from './Mocks/Movies.ts';
import { REVIEW } from './Mocks/Reviews.ts';
import { PLAYER } from './Mocks/Player.ts';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App name={'The Grand Budapest Hotel'} genre={'Drama'} releaseDate={2014} movies={MOVIES} player={PLAYER}
      review={REVIEW}
    />
  </React.StrictMode>
);
