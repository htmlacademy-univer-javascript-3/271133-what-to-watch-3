export const ApiRoutes = {
  Movies: '/films',
  PromoMovie: '/promo',
  Login: '/login',
  Logout: '/logout',
  FavoriteMovies: '/favorite',
  FavoriteMovie: (id: string, status: boolean) =>
    `/favorite/${id}/${status ? 1 : 0}`,
  Movie: (id: string) => `/films/${id}`,
  SimilarMovies: (id: string) => `/films/${id}/similar`,
  Comments: (id: string) => `/comments/${id}`,
};
