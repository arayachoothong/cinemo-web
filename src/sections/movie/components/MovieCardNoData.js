import { Box, Typography, Stack, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Iconify from '../../../components/iconify';

const StyledNodataWrap = styled(Stack)({
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledNodataIcon = styled(Iconify)({
  height: '150px',
  width: '150px',
});

MovieCardNoData.propTypes = {
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function MovieCardNoData({ message, isLoading }) {
  return (
    <StyledNodataWrap>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Box>
          <StyledNodataIcon icon="eva:file-text-outline" />
          <Typography variant="h4">{message}</Typography>
        </Box>
      )}
    </StyledNodataWrap>
  );
}
