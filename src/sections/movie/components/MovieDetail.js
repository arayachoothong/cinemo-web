import PropTypes from 'prop-types';
import { Typography, Stack, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MovieTags, MovieDetailFavoriteButton } from '.';

const StyledMoviePoster = styled('img')(() => ({
  objectFit: 'center',
}));

MovieDetail.propTypes = {
  movieDetail: PropTypes.object.isRequired,
};

export default function MovieDetail({ movieDetail }) {
  return (
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <StyledMoviePoster src={movieDetail.posterUrl} alt={movieDetail.titleEn} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Stack>
          <Typography variant="h4">{movieDetail.titleEn}</Typography>
          <MovieTags movie={movieDetail} />
        </Stack>
        <Stack sx={{ marginTop: 4 }}>
          <Typography variant="body2">{movieDetail.synopsisEn}</Typography>
        </Stack>
        <Stack sx={{ marginTop: 4 }}>
          <MovieDetailFavoriteButton movie={movieDetail} />
        </Stack>
      </Grid>
    </Grid>
  );
}
