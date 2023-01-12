import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { MovieSearch, MovieCardList, getMovieListApi } from '../../sections/movie';
import { fKeyTocamel } from '../../utils/formatObject';
import { setFavorites } from '../../sections/favorite';

export default function MoviePage() {
  const [tempMovies, setTempMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getMovieList = async () => {
    try {
      setIsLoading(true);
      const data = await getMovieListApi();
      const movieData = fKeyTocamel(data);
      setMovies(movieData.movies);
      setTempMovies(movieData.movies);
      getFavoriteList(movieData.movies);
    } catch (error) {
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFavoriteList = (movie) => {
    const localFavorites = localStorage.getItem('myFavorite');
    if (!localFavorites) return;
    const favoriteIds = localStorage.getItem('myFavorite').split(',');
    const favoriteList = movie.filter((el) => favoriteIds.includes(el.id.toString()));
    dispatch(setFavorites(favoriteList));
  };

  const onSearchMovie = (value) => {
    setSearch(value);
    const moviesFilter = tempMovies.filter((el) => {
      const filter = search.toLowerCase();
      const titleEn = el.titleEn.toLowerCase();
      return titleEn.includes(filter);
    });
    setMovies(moviesFilter);
  };

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <>
      <Helmet>
        <title> Movies Finder | Cinemo Web </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4">Movies Finder</Typography>
        </Stack>

        <Stack mb={3} direction="row" alignItems="center" justifyContent="space-between">
          <MovieSearch search={search} onSearchMovie={onSearchMovie} />
        </Stack>

        <MovieCardList movieList={movies} isLoading={isLoading} />
      </Container>
    </>
  );
}
