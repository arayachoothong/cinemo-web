import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MovieDetail, getMovieListApi } from '../../sections/movie';
import { fKeyTocamel } from '../../utils/formatObject';

export default function MovieDetiilPage() {
  const initDetail = {
    id: 0,
    titleEn: '',
    titleTh: '',
    ratingId: 0,
    rating: '',
    duration: 0,
    releaseDate: '',
    sneakDate: '',
    synopsisTh: '',
    synopsisEn: '',
    director: '',
    actor: '',
    genre: '',
    posterOri: '',
    posterUrl: '',
    trailer: '',
    trIos: '',
    trHd: '',
    trSd: '',
    trMp4: '',
    dateUpdate: '',
    trailerCmsId: '',
    trailerIvxKey: '',
  };
  const [movieDetail, setMovieDetail] = useState({ ...initDetail });
  const { id } = useParams();

  const getMovieList = async () => {
    try {
      const data = await getMovieListApi('users');
      const movieData = fKeyTocamel(data);
      const movieDetail = movieData.movies.find((el) => el.id === parseInt(id, 10));
      setMovieDetail(movieDetail);
    } catch (error) {
      setMovieDetail({ ...initDetail });
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <>
      <Helmet>
        <title> {movieDetail.titleEn} | Cinemo Web </title>
      </Helmet>

      <Container>
        <Box>
          <MovieDetail movieDetail={movieDetail} />
        </Box>
      </Container>
    </>
  );
}
