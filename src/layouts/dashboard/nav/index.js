import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer, Typography, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import useResponsive from '../../../hooks/useResponsive';
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
import { StyledNavItem, StyledNavItemIcon } from '../../../components/nav-section/styles';
import Iconify from '../../../components/iconify';
import navConfig from './config';

const NAV_WIDTH = 280;

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isDesktop = useResponsive('up', 'lg');

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Logo />{' '}
        <Typography variant="h4" sx={{ color: 'text.primary' }}>
          Cinemo
        </Typography>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {isLoggedIn && (
        <Box sx={{ p: 1, marginTop: 'auto' }}>
          <StyledNavItem
            onClick={logout}
            sx={{
              '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              },
            }}
          >
            <StyledNavItemIcon>
              <Iconify icon="eva:log-out-fill" />
            </StyledNavItemIcon>

            <ListItemText disableTypography primary="logout" />
          </StyledNavItem>
        </Box>
      )}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
