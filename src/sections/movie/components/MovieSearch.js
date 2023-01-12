import PropTypes from 'prop-types';
import { InputAdornment, TextField } from '@mui/material';
import Iconify from '../../../components/iconify';

MovieSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchMovie: PropTypes.func.isRequired,
};

export default function MovieSearch({ search, onSearchMovie }) {
  const handleSearchChange = (event) => {
    onSearchMovie(event.target.value);
  };
  return (
    <TextField
      placeholder="Search movie..."
      value={search}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
