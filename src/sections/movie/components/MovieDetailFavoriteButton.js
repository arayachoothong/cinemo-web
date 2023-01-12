import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';
import { addFavorites, removeFavorites } from '../../favorite/stores';
import Iconify from '../../../components/iconify';

const StyledFavoriteButton = styled(Iconify)({
  color: 'white',
  cursor: 'pointer',
  width: '1.5rem',
  height: '1.5rem',
});

MovieDetailFavoriteButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default function MovieDetailFavoriteButton({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const addToFavorite = () => {
    const isInFavorite = favorites.some((el) => el.id === movie.id);
    if (isInFavorite) return;
    dispatch(addFavorites(movie));
  };

  const removeFromFavorite = () => {
    dispatch(removeFavorites(movie));
  };

  useEffect(() => {
    const isFavorite = favorites.some((el) => el.id === movie.id);
    setIsFavorite(isFavorite);
  }, [favorites]);

  return (
    <Box>
      {isFavorite && (
        <Button
          color="error"
          variant="contained"
          startIcon={<StyledFavoriteButton icon="eva:heart-outline" />}
          onClick={removeFromFavorite}
        >
          Remove From Favorite
        </Button>
      )}
      {!isFavorite && (
        <Button
          color="primary"
          variant="contained"
          startIcon={<StyledFavoriteButton icon="eva:heart-outline" />}
          onClick={addToFavorite}
        >
          Add To Favorite
        </Button>
      )}
    </Box>
  );
}
