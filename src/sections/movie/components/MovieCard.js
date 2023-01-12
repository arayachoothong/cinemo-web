import PropTypes from 'prop-types';
import { Box, Card, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MovieFavoriteButton } from '.';

const StyledMovieDescription = styled(Typography)(() => ({
  WebkitLineClamp: 3,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}));

const StyledMoviePoster = styled('div')((props) => ({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0.3) 100%), url("${props.imageUrl}")`,
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
}));

const StyledMovieDetail = styled(Stack)({
  backgroundColor: 'black',
  color: 'white',
  padding: '16px',
  height: '100%',
});

const IMG_HEIGHT = {
  LG: '400px',
  MD: '600px',
  XS: '600px',
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default function MovieCard({ movie }) {
  const { titleEn, synopsisEn, posterUrl, genre, duration } = movie;
  const navigate = useNavigate();

  const getMovieGenre = () => genre.split('/').join(', ');
  const getMovieDuration = () => {
    const h = Math.floor(duration / 60);
    let m = duration % 60;
    m = m < 10 ? `0${m}` : m;
    return `${h} h ${m} min`;
  };
  const movieTags = () => {
    let tags = [];
    const movieGenre = getMovieGenre(genre);
    const movieDuration = getMovieDuration(duration);
    tags = [movieGenre, movieDuration];
    return tags;
  };

  const viewDetail = () => {
    navigate(`/movie/detail/${movie.id}`);
  };

  return (
    <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={viewDetail}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            lg: IMG_HEIGHT.LG,
            md: IMG_HEIGHT.MD,
            xs: IMG_HEIGHT.XS,
          },
        }}
      >
        <StyledMoviePoster imageUrl={posterUrl} />
        <MovieFavoriteButton movie={movie} />
      </Box>

      <StyledMovieDetail spacing={2}>
        <Typography variant="h6" noWrap>
          {titleEn}
        </Typography>

        <div>
          {movieTags().map((movie, index) => (
            <Typography variant="caption" key={index}>
              {index > 0 && (
                <Typography variant="caption" sx={{ marginX: '4px' }}>
                  |
                </Typography>
              )}
              {movie}
            </Typography>
          ))}
        </div>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <StyledMovieDescription variant="body1">{synopsisEn}</StyledMovieDescription>
        </Stack>
      </StyledMovieDetail>
    </Card>
  );
}
