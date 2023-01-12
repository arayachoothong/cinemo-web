import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

MovieTags.propTypes = {
  movie: PropTypes.object,
};

export default function MovieTags({ movie }) {
  const { genre, duration } = movie;

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

  return (
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
  );
}
