import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import MovieCard from './MovieCard';
import MovieCardNoData from './MovieCardNoData';

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function MovieList({ movieList, isLoading }) {
  return (
    <Box>
      {movieList.length > 0 && (
        <Grid container spacing={3} columns={{ xs: 4, sm: 12, md: 12 }}>
          {movieList.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
      {movieList.length === 0 && <MovieCardNoData message="No movie found!" isLoading={isLoading} />}
    </Box>
  );
}
