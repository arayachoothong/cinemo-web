import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { MovieCardList, getMovieListApi } from '../../sections/movie';
import { setFavorites } from '../../sections/favorite/stores';
import { fKeyTocamel } from '../../utils/formatObject';

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  const getFavoriteList = async () => {
    try {
      setIsLoading(true);
      const data = await getMovieListApi('users');
      const movieData = fKeyTocamel(data);
      const favoriteIds = localStorage.getItem('myFavorite')?.split(',');
      const favoriteList = movieData.movies.filter((el) => favoriteIds.includes(el.id.toString()));
      dispatch(setFavorites(favoriteList));
    } catch (error) {
      setFavorites([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <>
      <Helmet>
        <title> My Favorites | Cinemo Web </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4">My Favorites</Typography>
        </Stack>

        <MovieCardList movieList={favorites} isLoading={isLoading} />
      </Container>
    </>
  );
}
