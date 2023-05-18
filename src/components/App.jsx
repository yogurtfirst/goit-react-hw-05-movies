import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import(`./SharedLayout/SharedLayout`));
const HomePage = lazy(() => import(`../pages/Home`));
const MoviesPage = lazy(() => import(`../pages/Movies`));
const MovieDetailsPage = lazy(() => import(`../pages/MovieDetails`));
const Cast = lazy(() => import(`./Cast/Cast`));
const Reviews = lazy(() => import(`./Reviews/Reviews`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};