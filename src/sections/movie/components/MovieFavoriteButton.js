import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorites, removeFavorites } from '../../favorite/stores';
import Iconify from '../../../components/iconify';

const StyledFavoriteWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '16px',
});

const StyledFavoriteButton = styled(Iconify)({
  color: 'white',
  cursor: 'pointer',
  width: '1.75rem',
  height: '1.75rem',
});

MovieFavoriteButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default function MovieFavoriteButton({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const addToFavorite = (e) => {
    e.stopPropagation();
    const isInFavorite = favorites.some((el) => el.id === movie.id);
    if (isInFavorite) return;
    dispatch(addFavorites(movie));
  };

  const removeFromFavorite = (e) => {
    e.stopPropagation();
    dispatch(removeFavorites(movie));
  };

  useEffect(() => {
    const isFavorite = favorites.some((el) => el.id === movie.id);
    setIsFavorite(isFavorite);
  }, [favorites, movie.id]);

  return (
    <StyledFavoriteWrapper>
      {isFavorite}
      {isFavorite && <StyledFavoriteButton icon="eva:heart-fill" onClick={removeFromFavorite} />}
      {!isFavorite && <StyledFavoriteButton icon="eva:heart-outline" onClick={addToFavorite} />}
    </StyledFavoriteWrapper>
  );
}
